import { useState, useMemo } from 'react'
import { dashboards } from '@/data/dashboardsData'

export type SortOption = 'default' | 'alphabetical' | 'category'
export type Dashboard = (typeof dashboards)[0]

export function useDashboardFilters() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [sortBy, setSortBy] = useState<SortOption>('default')
    const [isGridView, setIsGridView] = useState(true)

    // Filter dashboards based on search term and category
    const filteredDashboards = useMemo(() => {
        let filtered = dashboards.filter((dashboard) => {
            const matchesSearch =
                dashboard.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                dashboard.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            const matchesCategory =
                selectedCategory === '' ||
                dashboard.category === selectedCategory
            return matchesSearch && matchesCategory
        })

        // Apply sorting
        if (sortBy === 'alphabetical') {
            return [...filtered].sort((a, b) => a.title.localeCompare(b.title))
        } else if (sortBy === 'category') {
            return [...filtered].sort(
                (a, b) =>
                    a.category.localeCompare(b.category) ||
                    a.title.localeCompare(b.title)
            )
        }

        return filtered
    }, [searchTerm, selectedCategory, sortBy])

    // Get featured dashboards (shows first 3 dashboards)
    const featuredDashboards = useMemo(() => dashboards.slice(0, 3), [])

    // Determine if we should show featured dashboards
    const showFeatured = useMemo(
        () => !searchTerm && !selectedCategory,
        [searchTerm, selectedCategory]
    )

    return {
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        isGridView,
        setIsGridView,
        filteredDashboards,
        featuredDashboards,
        showFeatured,
    }
}
