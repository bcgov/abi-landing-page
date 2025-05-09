import { dashboards } from '@/data/dashboardsData'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Using inline type definition without external references
export default async function DashboardDetailPage({
    params,
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any // Using 'any' here due to type incompatibility with Next.js 15.3.1
}) {
    // Await params before destructuring
    const resolvedParams = await params
    const { slug } = resolvedParams
    const dashboard = dashboards.find((d) => d.slug === slug)

    if (!dashboard) return notFound()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{dashboard.portfolio}</h1>

            <p className="text-lg mb-6">{dashboard.description}</p>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Available Dashboards:</h2>
                <div className="flex flex-col gap-3">
                    {dashboard.urls.map((urlItem, index) => (
                        <Link
                            key={index}
                            href={urlItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="bcgov"
                                size="lg"
                                className="w-full sm:w-auto"
                            >
                                {urlItem.title}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
