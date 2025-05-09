import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dashboard } from '@/hooks/useDashboardFilters'

interface DashboardCardProps {
    dashboard: Dashboard
    isFeatured?: boolean
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
    dashboard,
    isFeatured = false,
}) => {
    const descriptionMaxLength = isFeatured ? 100 : 120

    return (
        <Card
            className={`overflow-hidden hover:shadow-lg transition-all duration-200 
      ${
          isFeatured
              ? 'border-t-4 border-blue-500 hover:shadow-xl'
              : 'border border-gray-200 hover:border-blue-300'
      }`}
            data-testid={`dashboard-card-${dashboard.slug}`}
        >
            {!isFeatured && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-2"></div>
            )}
            <div className="p-6">
                <h3
                    className={`text-xl font-${
                        isFeatured ? 'bold' : 'semibold'
                    } mb-2 ${isFeatured ? 'text-blue-700' : 'text-gray-800'}`}
                >
                    {dashboard.portfolio}
                </h3>
                <div className="flex items-center mb-3">
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${
                            isFeatured
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                        {dashboard.branch}
                    </span>
                </div>
                <p
                    className={`text-gray-600 mb-${isFeatured ? '4' : '6'} ${
                        isFeatured ? 'line-clamp-2' : 'h-20 overflow-hidden'
                    }`}
                >
                    {dashboard.description.length > descriptionMaxLength
                        ? `${dashboard.description.substring(
                              0,
                              descriptionMaxLength
                          )}...`
                        : dashboard.description}
                </p>
                <Link href={`/dashboards/${dashboard.slug}`} passHref>
                    <Button variant="bcgov" className="w-full">
                        {isFeatured ? 'Open Dashboard' : 'View Dashboard'}
                    </Button>
                </Link>
            </div>
        </Card>
    )
}
