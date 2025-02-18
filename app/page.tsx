import Link from 'next/link'

export default function Home() {
    const categories = [
        {
            title: 'Dashboards',
            description: 'View our analytics dashboards',
            href: '/dashboards',
        },
        {
            title: 'Services',
            description: 'Explore our development services',
            href: '/development',
        },
        {
            title: 'Requests',
            description: 'Submit analytics requests',
            href: '/requests',
        },
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Team Summary Section */}
            <div className="mb-12">
                <p className="text-bcgov-primaryText mb-2">
                    Welcome to the Analytics and Business Intelligence team
                    portal. We provide data analytics, business intelligence
                    solutions, and reporting services to support evidence-based
                    decision making across the ministry.
                </p>
            </div>

            {/* Navigation categories */}
            <div className="space-y-6">
                {categories.map((categories, index) => (
                    <Link
                        key={index}
                        href={categories.href}
                        className="block border-b border-bcgov-border pb-4 hover:bg-bcgov-background transition-colors duration-200"
                    >
                        <div className="px-4 py-2">
                            <h2 className="text-xl font-bold text-bcgov-primaryText mb-1">
                                {categories.title}
                            </h2>
                            <p>{categories.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
