import { getResearchByResearchId } from "../../helpers/research/getById.js";
import { cleanMarkdownString } from "../../utils/cleanmarkdown.js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";

const SingleResearch = async ({ params }) => {
  const { id } = params;
  const result = await getResearchByResearchId(id);

  // Clean the markdown result if it exists
  let cleanedResult = result?.data?.[0]?.result
    ? cleanMarkdownString(result.data[0].result)
    : "";

  return (
    <div className="max-w-4xl mx-auto p-6">
      {result?.success && result?.data?.[0] ? (
        <div className="space-y-6">
          {cleanedResult && (
            <div className="bg-white border rounded-lg p-6 prose">
              <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {cleanedResult}
                </ReactMarkdown>
              </div>
            </div>
          )}
          <footer className="mt-12 pt-2 border-t border-gray-200">
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex flex-wrap gap-6">
                <div>
                  <span className="font-medium text-gray-700">
                    Research ID:
                  </span>
                  <span className="ml-2 font-mono text-gray-600">
                    {result.data[0].researchId}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Status:</span>
                  <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full capitalize">
                    {result.data[0].status}
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">
            No research data found or error occurred.
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleResearch;
