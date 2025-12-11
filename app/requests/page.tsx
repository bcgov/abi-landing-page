import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="https://forms.office.com/r/5whL7G48Eu"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-4">
            <h3 className="text-lg font-bold text-bcgov-blue font-BCSans mb-2">
              Request Form
            </h3>
            <p className="text-gray-600 font-BCSans">
              Click here to access the request form
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
