import React from 'react'

const JobsLoading = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
            {/* List Item Skeletons */}
            <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded animate-shimmer bg-gray-200"></div>
                        <div className="flex-1 h-4 animate-shimmer rounded bg-gray-200"></div>
                    </div>
            </div>
        </div>
    )
}

export default JobsLoading
