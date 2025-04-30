import React from 'react';

const ReviewForm = () => {
  return (
    <div className="text-center bg-white rounded-lg shadow-md px-4 py-3">
      {/* Left Column: Review Form */}
      <div className="lg:col-span-4 col-span-1">
        <form action="" method="POST" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Write a review</h2>
          

          {/* Review Textarea */}
          <textarea
            id="review"
            name="review"
            rows="4"
            required="true"
            className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your review"
          ></textarea>

          {/* Submit Button */}
          <div className="text-right py-4 justify-between">
            <a
              href="#"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
            >
              Post Review
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
