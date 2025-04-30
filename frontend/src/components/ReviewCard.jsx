import React from 'react'

const ReviewCard = () => {
    return (
        <div className="relative bg-white p-6 rounded-4xl shadow-lg border-2 border-blue-400 flex items-center gap-6">
            {/* Right Side - Review Content */}
            <div className="flex-1">
                <h3 className="text-lg font-bold text-blue-700">MR JOHN</h3>
                <p className="text-sm mt-2 text-gray-700">
                    I was offered the right advice which helped me in my legal issue. Adv.Ashok Gupta's assistance led me to make the right decision in my legal matter.
                </p>

                {/* Review Date */}
                <p className="mt-4 text-xs text-gray-500">Reviewed on: January 20, 2025</p>
            </div>
        </div>
    )
}

export default ReviewCard
