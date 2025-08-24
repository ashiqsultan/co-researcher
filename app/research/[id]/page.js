import { getResearchByResearchId } from "../../helpers/research/getById.js";
import { cleanMarkdownString } from "../../utils/cleanmarkdown.js";
import ReactMarkdown from "react-markdown";

const SingleResearch = async ({ params }) => {
  const { id } = params;
  console.log({ id });
  const result = await getResearchByResearchId(id);

  // Clean the markdown result if it exists
  const cleanedResult = result?.data?.[0]?.result
    ? cleanMarkdownString(result.data[0].result)
    : "";

  // Custom components to apply markdown styles without className prop
  const markdownComponents = {
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginTop: "2rem",
          marginBottom: "1rem",
          color: "#111827",
          borderBottom: "2px solid #e5e7eb",
          paddingBottom: "0.5rem",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginTop: "1.5rem",
          marginBottom: "0.75rem",
          color: "#111827",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          marginTop: "1.25rem",
          marginBottom: "0.5rem",
          color: "#111827",
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          marginTop: "1rem",
          marginBottom: "0.5rem",
          color: "#111827",
        }}
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p
        style={{
          marginBottom: "1rem",
          lineHeight: "1.7",
          color: "#374151",
        }}
      >
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul
        style={{
          marginBottom: "1rem",
          paddingLeft: "1.5rem",
        }}
      >
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol
        style={{
          marginBottom: "1rem",
          paddingLeft: "1.5rem",
        }}
      >
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li
        style={{
          marginBottom: "0.5rem",
          lineHeight: "1.6",
        }}
      >
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong
        style={{
          fontWeight: "600",
          color: "#111827",
        }}
      >
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em
        style={{
          fontStyle: "italic",
        }}
      >
        {children}
      </em>
    ),
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "#f3f4f6",
          padding: "0.125rem 0.25rem",
          borderRadius: "0.25rem",
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "0.875rem",
        }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          backgroundColor: "#f3f4f6",
          padding: "1rem",
          borderRadius: "0.5rem",
          overflowX: "auto",
          marginBottom: "1rem",
        }}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #e5e7eb",
          paddingLeft: "1rem",
          margin: "1rem 0",
          fontStyle: "italic",
          color: "#6b7280",
        }}
      >
        {children}
      </blockquote>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        style={{
          color: "#2563eb",
          textDecoration: "underline",
        }}
      >
        {children}
      </a>
    ),
    table: ({ children }) => (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "1rem",
        }}
      >
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th
        style={{
          border: "1px solid #e5e7eb",
          padding: "0.5rem",
          textAlign: "left",
          backgroundColor: "#f9fafb",
          fontWeight: "600",
        }}
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td
        style={{
          border: "1px solid #e5e7eb",
          padding: "0.5rem",
          textAlign: "left",
        }}
      >
        {children}
      </td>
    ),
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {result?.success && result?.data?.[0] ? (
        <div className="space-y-6">
          {cleanedResult && (
            <div className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Research Results</h2>
              <div
                style={{
                  lineHeight: "1.6",
                  color: "#374151",
                }}
              >
                <ReactMarkdown components={markdownComponents}>
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
