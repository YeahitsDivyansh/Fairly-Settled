import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="w-full h-[] sm:w-[300px] bg-white rounded-lg shadow overflow-hidden flex flex-col justify-between">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-300 w-full h-full flex items-center justify-center">
            <span className="text-gray-600">No Image</span>
          </div>
        )}
      </div>

      {/* 40% Height - Title + Description */}
      <div className="flex flex-col justify-between h-full p-3">
        <div>
          <h2 className="text-lg font-semibold mb-1">{blog.title}</h2>
          <div
            className="leading-relaxed mb-3 text-slate-800 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
        <div className="mt-3">
          <Link to={`/blogs/${blog.id}`} className="inline-block w-full">
            <button className="w-full bg-blue-600 text-white text-sm py-1 px-3 rounded hover:bg-blue-700">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
