"use client";

import React from "react";
import { FilterControls } from "@/components/dashboards/FilterControls";
import { FeaturedDashboards } from "@/components/dashboards/FeaturedDashboards";
import { DashboardGrid } from "@/components/dashboards/DashboardGrid";
import { DashboardList } from "@/components/dashboards/DashboardList";
import { useDashboardFilters } from "@/hooks/useDashboardFilters";

export default function DashboardsPage() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    isGridView,
    setIsGridView,
    filteredDashboards,
    featuredDashboards,
    showFeatured,
  } = useDashboardFilters();

  const hasFiltersApplied = searchTerm || selectedCategory;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboards</h1>

      {/* Filter and controls */}
      <FilterControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isGridView={isGridView}
        setIsGridView={setIsGridView}
      />

      {/* Featured dashboards section */}
      {showFeatured && <FeaturedDashboards dashboards={featuredDashboards} />}

      {/* Results count when filtering */}
      {hasFiltersApplied && (
        <div className="mb-4">
          <p className="text-gray-500">
            Found {filteredDashboards.length} dashboard
            {filteredDashboards.length !== 1 ? "s" : ""}
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      )}

      {/* Section title */}
      <h2 className="text-2xl font-semibold mb-4">
        {hasFiltersApplied ? "Results" : "All Dashboards"}
      </h2>

      {/* Dashboard display based on view toggle */}
      {filteredDashboards.length > 0 ? (
        isGridView ? (
          <DashboardGrid dashboards={filteredDashboards} />
        ) : (
          <DashboardList dashboards={filteredDashboards} />
        )
      ) : (
        <div className="text-center py-10" data-testid="no-results">
          <p className="text-gray-500 text-lg">
            No dashboards found
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>
      )}
    </div>
  );
}
