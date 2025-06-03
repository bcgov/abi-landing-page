import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const categories = [
    {
      title: "Dashboards",
      description: "View our analytics dashboards",
      href: "/dashboards",
    },
    {
      title: "Services",
      description: "Explore our development services",
      href: "/services",
    },
    {
      title: "Requests",
      description: "Submit analytics requests",
      href: "/requests",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Analytics & Business Intelligence
      </h1>

      {/* Team Summary Section */}
      <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome</h2>
        <p className="text-gray-700 mb-2">
          Welcome to the Analytics and Business Intelligence team portal. We
          provide data analytics, business intelligence solutions, and reporting
          services to support evidence-based decision making across the
          ministry.
        </p>
      </div>

      {/* Navigation categories */}
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-2"></div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {category.title}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={category.href} passHref>
                <Button variant="bcgov" className="w-full">
                  Explore {category.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
