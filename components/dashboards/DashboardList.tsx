import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dashboard } from '@/hooks/useDashboardFilters'

interface DashboardListProps {
    dashboards: Dashboard[]
}

export const DashboardList: React.FC<DashboardListProps> = ({ dashboards }) => {
    if (dashboards.length === 0) return null

    return (
        <div className="space-y-4">
            {dashboards.map((dashboard) => (
                <Card
                    key={dashboard.slug}
                    className="border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md overflow-hidden"
                    data-testid={`dashboard-list-item-${dashboard.slug}`}
                >
                    <div className="p-5 flex flex-col md:flex-row md:items-center">
                        <div className="flex-grow mb-4 md:mb-0 md:mr-4">
                            <div className="flex items-center mb-2">
                                <h2 className="text-xl font-semibold text-gray-800 mr-3">
                                    {dashboard.title}
                                </h2>
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {dashboard.category}
                                </span>
                            </div>
                            <p className="text-gray-600">
                                {dashboard.description.length > 200
                                    ? `${dashboard.description.substring(
                                          0,
                                          200
                                      )}...`
                                    : dashboard.description}
                            </p>
                        </div>
                        <div className="md:w-36">
                            <Link
                                href={`/dashboards/${dashboard.slug}`}
                                passHref
                            >
                                <Button variant="bcgov" className="w-full">
                                    View Dashboard
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
