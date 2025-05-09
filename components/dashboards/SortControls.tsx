import React from 'react'
import { SortOption } from '@/hooks/useDashboardFilters'

interface SortControlsProps {
    sortBy: SortOption
    setSortBy: (option: SortOption) => void
}

export const SortControls: React.FC<SortControlsProps> = ({
    sortBy,
    setSortBy,
}) => {
    return (
        <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <div className="flex gap-2">
                <button
                    onClick={() => setSortBy('default')}
                    className={`px-3 py-1 text-sm rounded-md ${
                        sortBy === 'default'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={sortBy === 'default'}
                >
                    Default
                </button>
                <button
                    onClick={() => setSortBy('alphabetical')}
                    className={`px-3 py-1 text-sm rounded-md ${
                        sortBy === 'alphabetical'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={sortBy === 'alphabetical'}
                >
                    A-Z
                </button>
                <button
                    onClick={() => setSortBy('branch')}
                    className={`px-3 py-1 text-sm rounded-md ${
                        sortBy === 'branch'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-pressed={sortBy === 'branch'}
                >
                    Branch
                </button>
            </div>
        </div>
    )
}
