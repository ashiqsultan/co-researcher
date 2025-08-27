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
        <div className="text-gray-500">Loading...</div>
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
