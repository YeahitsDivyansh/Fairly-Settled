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
  const [replyText, setReplyText] = useState({});

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
            console.log("🔥 Comments fetched:", data);
            setComments(data);
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

  const replyToComment = async (parentId) => {
    if (!currentUser || !replyText[parentId]?.trim()) return;

    await addDoc(collection(db, "comments"), {
      blogId,
      userId: currentUser.uid,
      userName: currentUser.phoneNumber || currentUser.email,
      content: replyText[parentId].trim(),
      createdAt: serverTimestamp(),
      parentId,
    });

    setReplyText((prev) => ({ ...prev, [parentId]: "" }));
  };

  const formatDate = (ts) => ts?.toDate().toLocaleString();

  const nestedReplies = (parentId) =>
    comments
      .filter((c) => c.parentId === parentId)
      .sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return a.createdAt.seconds - b.createdAt.seconds;
      });

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

      {comments
        .filter((c) => !c.parentId)
        .map((comment) => (
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

            {/* Reply Section */}
            <div className="ml-4 mt-2">
              {currentUser && (
                <div className="flex gap-2 mb-2">
                  <input
                    value={replyText[comment.id] || ""}
                    onChange={(e) =>
                      setReplyText((prev) => ({
                        ...prev,
                        [comment.id]: e.target.value,
                      }))
                    }
                    className="flex-1 border px-2 py-1 text-sm rounded"
                    placeholder="Reply..."
                  />
                  <button
                    onClick={() => replyToComment(comment.id)}
                    disabled={!replyText[comment.id]?.trim()}
                    className="bg-gray-200 text-sm px-2 rounded disabled:opacity-50"
                  >
                    Reply
                  </button>
                </div>
              )}

              {/* Show Replies */}
              {nestedReplies(comment.id).map((reply) => (
                <div
                  key={reply.id}
                  className="ml-4 mt-1 border-l pl-2 text-sm"
                >
                  <div className="flex justify-between text-xs text-gray-600">
                    <span className="font-medium">{reply.userName}</span>
                    <span>{formatDate(reply.createdAt)}</span>
                  </div>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentSection;
