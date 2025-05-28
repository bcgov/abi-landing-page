import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dashboard } from "@/hooks/useDashboardFilters";

interface DashboardCardProps {
  dashboard: Dashboard;
  isFeatured?: boolean;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  dashboard,
  isFeatured = false,
}) => {
  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-all duration-200 
      ${
        isFeatured
          ? "border-t-4 border-blue-500 hover:shadow-xl"
          : "border border-gray-200 hover:border-blue-300"
      }`}
      data-testid={`dashboard-card-${dashboard.slug}`}
    >
      {!isFeatured && (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 h-2"></div>
      )}
      <div className="p-4">
        <h3
          className={`text-xl font-${isFeatured ? "bold" : "semibold"} mb-1 ${
            isFeatured ? "text-blue-700" : "text-gray-800"
          }`}
        >
          {dashboard.portfolio}
        </h3>
        <div className="flex items-center mb-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              isFeatured
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {dashboard.branch}
          </span>
        </div>
        <p
          className={`text-gray-600 mb-${isFeatured ? "3" : "4"} ${
            isFeatured
              ? "line-clamp-2"
              : "min-h-[40px] max-h-14 overflow-hidden text-ellipsis"
          }`}
        >
          {dashboard.shortDescription || "Click to view dashboard details"}
        </p>
        <Link href={`/dashboards/${dashboard.slug}`} passHref>
          <Button variant="bcgov" className="w-full">
            Open Portfolio
          </Button>
        </Link>
      </div>
    </Card>
  );
};
