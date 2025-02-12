import React from 'react'
import Link from 'next/link'

interface Dashboard {
    title: string
    description: string
    url: string
}

interface DashboardCategory {
    name: string
    dashboards: Dashboard[]
}

const dashboardCategories: DashboardCategory[] = [
    {
        name: 'Work Coordination',
        dashboards: [
            {
                title: 'Work Coordination',
                description: 'Description of Work Coordination',
                url: process.env.NEXT_PUBLIC_WORK_COORDINATION_URL || '',
            },
        ],
    },
    {
        name: 'Service BC',
        dashboards: [
            {
                title: 'Service BC',
                description: 'Description of Service BC',
                url: process.env.NEXT_PUBLIC_SERVICE_BC_URL || '',
            },
        ],
    },
]

export default function DashboardsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {dashboardCategories.map((category) => (
                <div key={category.name} className="mb-12">
                    <h2 className="text-2xl font-bold text-bcgov-blue font-BCSans mb-6">
                        {category.name}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.dashboards.map((dashboard) => (
                            <Link
                                href={dashboard.url}
                                key={dashboard.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-bcgov-blue font-BCSans mb-2">
                                        {dashboard.title}
                                    </h3>
                                    <p className="text-gray-600 font-BCSans">
                                        {dashboard.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
