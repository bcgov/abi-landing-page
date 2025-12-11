import { dashboards } from "@/data/dashboardsData";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Using inline type definition without external references
export default async function DashboardDetailPage({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any; // Using 'any' here due to type incompatibility with Next.js 15.3.1
}) {
  // Await params before destructuring
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const dashboard = dashboards.find((d) => d.slug === slug);

  if (!dashboard) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/dashboards">
          <Button variant="ghost" className="mb-2 text-blue-600 -ml-3">
            ← Back to Dashboards
          </Button>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 mb-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">
          {dashboard.portfolio}
        </h1>

        <div className="flex items-center mb-4">
          <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800">
            {dashboard.branch}
          </span>
        </div>

        <p className="text-gray-700 text-lg">{dashboard.description}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Available Dashboards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboard.urls.map((urlItem, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-2"></div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {urlItem.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={urlItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="bcgov"
                  className="w-full hover:shadow-md transition-all duration-200"
                >
                  View Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
