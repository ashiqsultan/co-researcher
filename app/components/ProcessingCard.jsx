import React from "react";
import { IconSearch, IconBook } from "@tabler/icons-react";

const ProcessingCard = () => {
  return (
    <div className="my-20 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-7">
      {/* Animated Icons */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        {/* <div className="animate-bounce delay-0">
          <IconSearch className="w-8 h-8 text-sky-500" />
        </div> */}
        <div className="animate-bounce delay-300">
          <IconSearch className="w-8 h-8 text-sky-600" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Running Research Workflow
      </h2>

      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
        <div className="bg-gradient-to-r from-sky-500 via-teal-500 to-sky-600 h-2 rounded-full animate-pulse"></div>
      </div>

      {/* Message */}
      <div className="text-center">
        <p className="text-gray-600 mb-2 font-medium">
          Exploring the Web, Analyzing Data, Deriving Insights…
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          This process may take approximately 5–10 minutes. Please check back
          shortly using the same URL.
        </p>
        <div className="relative mt-4">
          <div
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              const tooltip = document.getElementById("copy-tooltip");
              tooltip.classList.remove("hidden");
              setTimeout(() => tooltip.classList.add("hidden"), 2000);
            }}
            className="text-blue-500 hover:text-blue-700 underline font-mono text-xs cursor-pointer inline-block"
          >
            {window.location.href}
          </div>
          <div
            id="copy-tooltip"
            className="hidden absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg"
          >
            Copied!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingCard;
