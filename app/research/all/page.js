"use client";

import Link from "next/link";
import useApiQuery from "@/app/hooks/useApiQuery";

// Sample data - replace this with your actual API call
const sampleResearchData = [
  {
    researchId: "8e61e257-2334-43d0-af5d-94296e8d3819",
    description:
      "How does Crispr help in genetic CKD. What are the recent researches involved in this",
    status: "completed",
    createdAt: "2025-08-24T12:52:59.000Z",
    isValid: true,
    title: "CRISPR Technology in Genetic Chronic Kidney Disease",
  },
  {
    researchId: "7a45b123-1234-4567-89ab-123456789def",
    description:
      "Exploring the applications of machine learning algorithms in early detection of cardiovascular diseases through ECG pattern analysis",
    status: "in-progress",
    createdAt: "2025-08-23T09:30:15.000Z",
    isValid: true,
    title: "AI-Powered Cardiovascular Disease Detection",
  },
  {
    researchId: "9c78d456-5678-9012-cdef-456789012345",
    description:
      "Investigation of novel immunotherapy approaches for treating metastatic melanoma using CAR-T cell technology",
    status: "completed",
    createdAt: "2025-08-22T14:20:33.000Z",
    isValid: true,
    title: "CAR-T Cell Immunotherapy for Melanoma Treatment",
  },
  {
    researchId: "5e89f789-9012-3456-789a-789012345678",
    description:
      "Analysis of microbiome diversity in patients with inflammatory bowel disease and its correlation with treatment outcomes",
    status: "draft",
    createdAt: "2025-08-21T16:45:22.000Z",
    isValid: true,
    title: "Microbiome Analysis in IBD Patients",
  },
];

const ResearchCard = ({ research }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Link href={`/research/${research.researchId}`} className="block group">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 h-full group-hover:border-blue-300">
        <div className="flex flex-col h-full">
          {/* Header with status badge */}
          <div className="flex justify-between items-start mb-3">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadgeColor(
                research.status
              )}`}
            >
              {research.status.charAt(0).toUpperCase() +
                research.status.slice(1).replace("-", " ")}
            </span>
            <span className="text-sm text-gray-500">
              {formatDate(research.createdAt)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {research.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-3">
            {research.description}
          </p>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                <span className="text-sm font-medium">View Details</span>
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function ResearchAllPage() {
  const { data: researchData, error, isLoading } = useApiQuery("/api/research");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Error Loading Research
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Recent Research
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Showing Recent 50 items
            </span>
          </div>
        </div>

        {/* Research Grid */}
        {researchData?.data.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {researchData?.data.map((research) => (
              <ResearchCard key={research.researchId} research={research} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Research Found
            </h3>
            <p className="text-gray-600">
              There are no research projects available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
