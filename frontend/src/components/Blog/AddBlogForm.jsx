import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { db, storage } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const AdminBlogForm = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = "";

      if (selectedFile) {
        const storageRef = ref(storage, `blogImages/${uuidv4()}-${selectedFile.name}`);
        await uploadBytes(storageRef, selectedFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "blogPosts"), {
        title,
        content,
        imageUrl,
        createdAt: serverTimestamp(),
        author: "Admin",
      });

      setTitle("");
      setContent("");
      setSelectedFile(null);
      setSuccess("✅ Blog added successfully!");
    } catch (error) {
      console.error("Error adding blog:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Blog Post</h2>
      {success && <p className="text-green-600 mb-3">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
        />

        <label className="inline-block px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-pointer hover:bg-gray-700 mr-4">
          Browse Files
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {selectedFile && (
          <p className="text-black mt-2 font-medium">
            Selected File: {selectedFile.name}
          </p>
        )}

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {uploading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default AdminBlogForm;
