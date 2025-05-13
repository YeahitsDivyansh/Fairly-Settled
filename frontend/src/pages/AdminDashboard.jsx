// FILE: src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import AddBlog from "../components/Blog/AddBlogForm";
import BlogList from "../components/Blog/BlogList";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("add");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between overflow-y-hidden">
        <div>
          <h2 className="text-xl font-bold p-4 border-b">Admin Dashboard</h2>
          <nav className="flex flex-col p-4 space-y-2">
            <button
              className={`text-left p-2 rounded hover:bg-gray-200 ${
                activeTab === "add" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveTab("add")}
            >
              ➕ Add Blog
            </button>
            <button
              className={`text-left p-2 rounded hover:bg-gray-200 ${
                activeTab === "manage" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveTab("manage")}
            >
              🗂 Manage Blogs
            </button>
            <button
              className="text-left p-2 rounded hover:bg-gray-200"
              onClick={() => navigate("/blogs")}
            >
              📖 Blog
            </button>
          </nav>
        </div>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-y-auto p-6">
        {activeTab === "add" && <AddBlog />}
        {activeTab === "manage" && <BlogList />}
      </main>
    </div>
  );
};

export default AdminDashboard;
