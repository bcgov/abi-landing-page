import React from 'react'
import { categories } from '@/data/dashboardsData'

interface CategoryFilterProps {
    selectedCategory: string
    setSelectedCategory: (category: string) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
    selectedCategory,
    setSelectedCategory,
}) => {
    return (
        <div className="w-full md:w-auto">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by category"
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}
