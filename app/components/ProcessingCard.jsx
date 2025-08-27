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
        <p className="text-xs text-gray-500">
          This may take a few minutes, check back in a while
        </p>
      </div>
    </div>
  );
};

export default ProcessingCard;
