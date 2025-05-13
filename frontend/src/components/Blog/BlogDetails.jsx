import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

function BlogDetails() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'blogPosts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlogData(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
      setLoading(false);
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!blogData) {
    return <div className="text-center py-10 text-red-600">Blog not found.</div>;
  }

  return (
    <section className="rounded-lg mt-20 h-full overflow-hidden max-w-4xl mx-auto px-4">
      <div className="py-4 lg:py-8">
        {/* Thumbnail */}
        {blogData.imageUrl && (
          <img
            src={blogData.imageUrl}
            alt={blogData.title}
            className="mb-6 rounded-lg w-full max-h-[500px] object-cover"
          />
        )}

        {/* Title and Date */}
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold text-black">
            {blogData.title}
          </h1>
          <p className="text-gray-600">
            {blogData.createdAt?.toDate().toLocaleDateString()}
          </p>
        </div>

        <div className="border-b border-gray-300 mb-5" />

        {/* Blog Content */}
        <div className="content">
          <div
            className="prose max-w-none text-black leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
