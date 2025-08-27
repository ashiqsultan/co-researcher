import Link from "next/link";
import { formatCreatedAt } from "../utils/formatCreatedAt";

export default function ResearchItem({ research }) {
  return (
    <Link href={`/research/${research.researchId}`} className="block">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer">
        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {research.title || "No Title"}
        </h4>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {research.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{formatCreatedAt(research.createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}
