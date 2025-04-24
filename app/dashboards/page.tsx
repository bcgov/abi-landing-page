import Link from 'next/link'
import { dashboards } from '@/data/dashboardsData'
import { Button } from '@/components/ui/button'

export default async function DashboardsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Dashboards</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboards.map((dashboard) => (
                    <div
                        key={dashboard.slug}
                        className="bg-white rounded-lg shadow p-6"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {dashboard.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {dashboard.description}
                        </p>
                        <Link href={`/dashboards/${dashboard.slug}`} passHref>
                            <Button variant="bcgov">View Details</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
