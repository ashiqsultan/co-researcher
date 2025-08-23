export default function ResearchItem({ research }) {
  return (
    <div
      key={research.id}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
    >
      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
        {research.title}
      </h4>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {research.description}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{research.date}</span>
        <button className="text-teal-600 hover:text-teal-800 font-medium">
          View Results →
        </button>
      </div>
    </div>
  );
}
