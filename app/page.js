"use client";
import { IconFlask } from "@tabler/icons-react";
import RecentResearch from "./components/RecentResearch";
import NewResearchForm from "./components/NewResearchForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-sky-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accelerate Your Research with AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Describe your research topic and our AI agent will gather data in real-time, delivering comprehensive analysis with actionable insights.
          </p>
        </div>

        <NewResearchForm />

        <div className="mt-20">
          <RecentResearch />
        </div>
      </main>
    </div>
  );
}
