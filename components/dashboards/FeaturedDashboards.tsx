import React from 'react'
import { DashboardCard } from './DashboardCard'
import { Dashboard } from '@/hooks/useDashboardFilters'

interface FeaturedDashboardsProps {
    dashboards: Dashboard[]
}

export const FeaturedDashboards: React.FC<FeaturedDashboardsProps> = ({
    dashboards,
}) => {
    if (dashboards.length === 0) return null

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">Featured Dashboards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {dashboards.map((dashboard) => (
                    <DashboardCard
                        key={dashboard.slug}
                        dashboard={dashboard}
                        isFeatured={true}
                    />
                ))}
            </div>
        </>
    )
}
