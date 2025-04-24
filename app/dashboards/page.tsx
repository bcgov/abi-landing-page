import React from 'react'
import Link from 'next/link'
import { dashboards } from '@/data/dashboardsData'

export default function DashboardsPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboards.map((dashboard) => (
                    <Link
                        key={dashboard.id}
                        href={`/dashboards/${dashboard.slug}`}
                        className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-bcgov-blue font-BCSans mb-2">
                                {dashboard.title}
                            </h3>
                            {/* <p className="text-gray-600 font-BCSans">
                                {dashboard.description}
                            </p> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
