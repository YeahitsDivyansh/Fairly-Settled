import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  const fetchBlogs = async () => {
    const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setBlogs(data);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogPosts", id));
    fetchBlogs();
  };

  const startEditing = (blog) => {
    setEditingId(blog.id);
    setEditTitle(blog.title);
    setEditContent(blog.content);
    setEditImageUrl(blog.imageUrl || "");
    setNewImageFile(null);
  };

  const handleImageDelete = () => {
    setEditImageUrl("");
    setNewImageFile(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setNewImageFile(file);
  };

  const handleUpdate = async () => {
    let updatedImageUrl = editImageUrl;

    if (!editImageUrl && newImageFile) {
      const storageRef = ref(storage, `blogImages/${uuidv4()}-${newImageFile.name}`);
      await uploadBytes(storageRef, newImageFile);
      updatedImageUrl = await getDownloadURL(storageRef);
    }

    await updateDoc(doc(db, "blogPosts", editingId), {
      title: editTitle,
      content: editContent,
      imageUrl: updatedImageUrl,
    });

    setEditingId(null);
    setEditTitle("");
    setEditContent("");
    setEditImageUrl("");
    setNewImageFile(null);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Manage Blog Posts</h2>
      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b pb-3">
              {editingId === blog.id ? (
                <div>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full border p-2 mb-2"
                  />
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full border p-2 mb-2 h-32"
                  ></textarea>

                  {editImageUrl && !newImageFile ? (
                    <div className="mb-2 relative">
                      <img src={editImageUrl} alt="Current" className="w-full h-48 object-contain" />
                      <button
                        onClick={handleImageDelete}
                        className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <label className="inline-block px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-pointer hover:bg-gray-700 mb-2">
                        Browse Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                      {newImageFile && (
                        <p className="text-black mt-2 font-medium">
                          Selected File: {newImageFile.name}
                        </p>
                      )}
                    </>
                  )}
                  <div>
                    <button onClick={handleUpdate} className="bg-green-600 text-white px-4 py-1 mr-2 rounded">
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)} className="bg-gray-500 text-white px-4 py-1 rounded">
                      Cancel
                    </button>
                  </div>

                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {blog.createdAt?.toDate().toLocaleString()}
                  </p>
                  <div
                    className="leading-relaxed mb-3 text-slate-800 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  ></div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => startEditing(blog)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
