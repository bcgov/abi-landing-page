import React from 'react'
import { categories } from '@/data/dashboardsData'

interface BranchFilterProps {
    selectedCategory: string
    setSelectedCategory: (branch: string) => void
}

export const BranchFilter: React.FC<BranchFilterProps> = ({
    selectedCategory,
    setSelectedCategory,
}) => {
    return (
        <div className="w-full md:w-auto">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by branch"
            >
                <option value="">All Branches</option>
                {categories.map((branch) => (
                    <option key={branch} value={branch}>
                        {branch}
                    </option>
                ))}
            </select>
        </div>
    )
}
