import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";

const PublicBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // optional: show loader

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(collection(db, "blogPosts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between"> {/* FULL PAGE HEIGHT */}
      <section className="text-gray-600 mt-20 body-font flex-grow">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          <div className="mb-5">
            <h1 className="text-center text-2xl font-bold text-black">Blog Posts</h1>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-600 font-semibold">No blogs found.</p>
          ) : (
            <div className="flex flex-wrap justify-center -m-4 mb-5">
              {blogs.map((blog) => (
                <div key={blog.id} className="p-4 md:w-1/3">
                  <div className="h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400 shadow-xl rounded-xl overflow-hidden bg-white border-b-4 border-slate-800">
                    <img
                      className="w-full h-[200px] object-cover"
                      src={blog.imageUrl || "https://via.placeholder.com/300x200.png?text=No+Image"}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-slate-800 mb-1">
                        {blog.createdAt?.toDate().toLocaleDateString()}
                      </h2>
                      <h1 className="title-font text-lg font-bold text-slate-800 mb-3">
                        {blog.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-slate-800">
                        {blog.content.slice(0, 100)}...
                      </p>
                      <Link to={`/blogs/${blog.id}`}>
                        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default PublicBlogs;
