import React from 'react'
import { DashboardCard } from './DashboardCard'
import { Dashboard } from '@/hooks/useDashboardFilters'

interface DashboardGridProps {
    dashboards: Dashboard[]
}

export const DashboardGrid: React.FC<DashboardGridProps> = ({ dashboards }) => {
    if (dashboards.length === 0) return null

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboards.map((dashboard) => (
                <DashboardCard key={dashboard.slug} dashboard={dashboard} />
            ))}
        </div>
    )
}
