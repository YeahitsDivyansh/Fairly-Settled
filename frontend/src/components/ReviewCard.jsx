import React from 'react'

const ReviewCard = ({ review }) => {
    return (
        <div className="relative bg-white p-6 rounded-4xl shadow-lg border-2 border-blue-400 flex items-center gap-6">
            {/* Right Side - Review Content */}
            <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-700">{review.name}</h3>
                <p className="text-sm mt-2 text-gray-700">
                {review.review}
                </p>

                {/* Review Date */}
                <p className="mt-4 text-xs text-gray-500">Reviewed on: {review.date}</p>
            </div>
        </div>
    )
}

export default ReviewCard
