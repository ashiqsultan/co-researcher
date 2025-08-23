"use client";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

export default function NewResearchForm() {
  const [researchDescription, setResearchDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement AI research functionality
    console.log("Research description:", researchDescription);
    // This would typically trigger the AI research process
    // and navigate to a results page
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <IconSearch className="h-6 w-6 text-teal-600 mr-3" />
        New Research
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          {/* Gradient shadow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg blur-md opacity-30 translate-x-1 translate-y-1"></div>

          <textarea
            id="research-description"
            rows={6}
            className="relative w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none placeholder:text-gray-400 text-gray-700"
            placeholder="Describe your research topic, hypothesis, or area of interest in pharmaceutical or biotechnology..."
            value={researchDescription}
            onChange={(e) => setResearchDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600"></div>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-600 to-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-sky-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Research
          </button>
        </div>
      </form>
    </div>
  );
}
