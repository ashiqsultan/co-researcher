'use client';
import ResearchItem from "./ResearchItems";
import useApiQuery from "../hooks/useApiQuery";

export default function RecentResearch() {
  const { data, error, isLoading } = useApiQuery("/api/research");

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Recent Research
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="flex items-center justify-between mt-4">
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Recent Research
        </h3>
        <div className="text-red-500">Error loading research projects.</div>
      </div>
    );
  }

  const previousResearch = data?.data || [];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
        Recent Research
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {previousResearch.map((research) => (
          <ResearchItem key={research.researchId} research={research} />
        ))}
      </div>
    </div>
  );
}
