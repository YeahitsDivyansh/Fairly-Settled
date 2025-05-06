import React from 'react';

const ReviewForm = () => {
  return (
    <div className="text-center bg-white rounded-xl shadow-sm border border-gray-400 px-6 py-5">
      <form action="" method="POST" className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Write a review</h2>

        <textarea
          id="review"
          name="review"
          rows="4"
          required
          className="block w-full p-3 text-sm text-gray-800 bg-gray-50 rounded-md border border-gray-400 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Share your thoughts..."
        ></textarea>

        <div className="text-right pt-2">
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2 shadow-sm transition"
          >
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
