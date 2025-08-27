import React from "react";
import { IconExclamationCircle } from "@tabler/icons-react";

const InvalidResearchCard = () => {
  return (
    <div className="my-20 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-red-200 p-8 space-y-7">
      {/* Animated Icons */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        <IconExclamationCircle className="w-8 h-8 text-red-500" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-red-800 text-center mb-4">
        Invalid Research Description
      </h2>

      {/* Message */}
      <div className="">
        <p className="text-red-700 mb-2 font-medium"></p>
        <div>
          <p className="font-semibold ">
            Your research description has been marked invalid.
          </p>
          <p className="mt-1 text-sm">This could be because:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
            <li>
              It does not relate to Healthcare, Medicine, or Pharmaceuticals.
            </li>
            <li>The description is unclear or incomplete.</li>
            <li>It contains unrelated keywords outside the medical domain.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvalidResearchCard;
