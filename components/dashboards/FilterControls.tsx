import React from 'react'
import { SearchBar } from './SearchBar'
import { BranchFilter } from './BranchFilter'
import { SortControls } from './SortControls'
import { ViewToggle } from './ViewToggle'
import { SortOption } from '@/hooks/useDashboardFilters'

interface FilterControlsProps {
    searchTerm: string
    setSearchTerm: (value: string) => void
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    sortBy: SortOption
    setSortBy: (option: SortOption) => void
    isGridView: boolean
    setIsGridView: (isGrid: boolean) => void
}

export const FilterControls: React.FC<FilterControlsProps> = ({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    isGridView,
    setIsGridView,
}) => {
    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <BranchFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <SortControls sortBy={sortBy} setSortBy={setSortBy} />
                <ViewToggle
                    isGridView={isGridView}
                    setIsGridView={setIsGridView}
                />
            </div>
        </div>
    )
}
