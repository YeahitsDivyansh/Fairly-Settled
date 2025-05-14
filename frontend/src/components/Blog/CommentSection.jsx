import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    let q;
    try {
      q = query(
        collection(db, "comments"),
        where("blogId", "==", blogId),
        orderBy("createdAt", "asc")
      );
    } catch (error) {
      console.error("⚠️ Error creating Firestore query:", error);
    }

    const unsubscribeSnapshot = q
      ? onSnapshot(
          q,
          (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setComments(data.filter((c) => !c.parentId)); // Filter out replies
          },
          (err) => {
            console.error("🔥 Snapshot listener error:", err);
          }
        )
      : () => {};

    return () => {
      unsubscribeAuth();
      unsubscribeSnapshot();
    };
  }, [blogId]);

  const postComment = async () => {
    if (!currentUser) return alert("Please login to comment");
    if (!newComment.trim()) return;

    await addDoc(collection(db, "comments"), {
      blogId,
      userId: currentUser.uid,
      userName: currentUser.phoneNumber || currentUser.email,
      content: newComment.trim(),
      createdAt: serverTimestamp(),
    });

    setNewComment("");
  };

  const deleteComment = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await deleteDoc(doc(db, "comments", id));
    }
  };

  const editComment = async (id) => {
    await updateDoc(doc(db, "comments", id), {
      content: editingText.trim(),
    });
    setEditingId(null);
    setEditingText("");
  };

  const formatDate = (ts) => ts?.toDate().toLocaleString();

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3">💬 Comments</h3>

      {currentUser && (
        <div className="flex gap-2 mb-4">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="Write a comment..."
          />
          <button
            onClick={postComment}
            disabled={!newComment.trim()}
            className="bg-blue-600 text-white px-3 py-2 rounded disabled:opacity-50"
          >
            Post
          </button>
        </div>
      )}

      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 border-b pb-2">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span className="font-semibold">{comment.userName}</span>
            <span>{formatDate(comment.createdAt)}</span>
          </div>

          {editingId === comment.id ? (
            <div className="flex gap-2 items-center">
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-1 border px-2 py-1"
              />
              <button
                onClick={() => editComment(comment.id)}
                className="text-xs bg-green-500 text-white px-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="text-xs bg-gray-400 text-white px-2 rounded"
              >
                Cancel
              </button>
            </div>
          ) : (
            <p className="text-gray-900">{comment.content}</p>
          )}

          {currentUser?.uid === comment.userId && (
            <div className="text-xs mt-1 space-x-2 text-blue-600">
              <button
                onClick={() => {
                  setEditingId(comment.id);
                  setEditingText(comment.content);
                }}
              >
                ✏️ Edit
              </button>
              <button
                className="text-red-600"
                onClick={() => deleteComment(comment.id)}
              >
                🗑 Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
