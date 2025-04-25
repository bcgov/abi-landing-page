import React from 'react'

interface ViewToggleProps {
    isGridView: boolean
    setIsGridView: (isGrid: boolean) => void
}

export const ViewToggle: React.FC<ViewToggleProps> = ({
    isGridView,
    setIsGridView,
}) => {
    return (
        <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">View:</span>
            <div className="flex gap-2">
                <button
                    onClick={() => setIsGridView(true)}
                    className={`p-1 rounded-md ${
                        isGridView
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label="Grid view"
                    aria-pressed={isGridView}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>
                <button
                    onClick={() => setIsGridView(false)}
                    className={`p-1 rounded-md ${
                        !isGridView
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-label="List view"
                    aria-pressed={!isGridView}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    )
}
