import { dashboards } from '@/data/dashboardsData'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Using inline type definition without external references
export default function DashboardDetailPage({
    params,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any // Using 'any' here due to type incompatibility with Next.js 15.3.1
}) {
    const { slug } = params
    const dashboard = dashboards.find((d) => d.slug === slug)

    if (!dashboard) return notFound()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{dashboard.title}</h1>

            <p className="text-lg mb-6">{dashboard.description}</p>

            <Link
                href={dashboard.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="bcgov" size="lg">
                    Open Dashboard
                </Button>
            </Link>
        </div>
    )
}
