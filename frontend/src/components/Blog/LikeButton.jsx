// src/components/Blog/LikeButton.jsx
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const LikeButton = ({ blogId }) => {
  const [likes, setLikes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    const q = query(collection(db, "likes"), where("blogId", "==", blogId));
    const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
      const allLikes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLikes(allLikes);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot();
    };
  }, [blogId]);

  useEffect(() => {
    if (currentUser) {
      const hasLiked = likes.some((l) => l.userId === currentUser.uid);
      setLiked(hasLiked);
    } else {
      setLiked(false);
    }
  }, [likes, currentUser]);

  const handleToggleLike = async () => {
    if (!currentUser) {
      alert("Please login to like this post.");
      return;
    }

    const likeQuery = query(
      collection(db, "likes"),
      where("blogId", "==", blogId),
      where("userId", "==", currentUser.uid)
    );

    const snapshot = await getDocs(likeQuery);

    if (snapshot.empty) {
      // Add like
      await addDoc(collection(db, "likes"), {
        blogId,
        userId: currentUser.uid,
      });
    } else {
      // Remove like
      await deleteDoc(snapshot.docs[0].ref);
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleToggleLike}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-200 ${
          liked
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        ❤️ {likes.length} Like{likes.length !== 1 ? "s" : ""}
      </button>
    </div>
  );
};

export default LikeButton;
