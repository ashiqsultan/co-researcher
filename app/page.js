"use client";
import { IconMicroscope, IconFlask, IconSchema } from "@tabler/icons-react";
import RecentResearch from "./components/RecentResearch";
import NewResearchForm from "./components/NewResearchForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-sky-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-teal-600 to-sky-600 rounded-lg">
                <IconMicroscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Co-Researcher
                </h1>
                <p className="text-sm text-gray-600">
                  Smarter Web Research, Powered by AI
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <IconSchema className="h-6 w-6 text-teal-600" />
              <span className="text-sm font-medium text-gray-700">
                TODO
                Link to n8n Workflow docs
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-teal-600 to-sky-600 rounded-full">
              <IconFlask className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accelerate Your Research with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe your research topic and let our AI technology conduct
            comprehensive analysis, providing you with detailed insights and
            findings in the pharmaceutical and biotechnology fields.
          </p>
        </div>

        <NewResearchForm />

        {/* Previous Research Section */}
        <RecentResearch />
      </main>
    </div>
  );
}
