"use client";
import React from "react";
import { cleanMarkdownString } from "../../utils/cleanmarkdown.js";
import "github-markdown-css/github-markdown-light.css";
import markdownit from "markdown-it";
import useApiQuery from "../../hooks/useApiQuery";
import ResultMarkdown from "../../components/ResultMarkdown";
import ErrorCard from "../../components/ErrorCard";
import ProcessingCard from "../../components/ProcessingCard.jsx";

function removeStrongTags(text) {
  // Replace both opening and closing <strong> tags with empty strings
  return text.replace(/<\/?strong>/g, "");
}

const SingleResearch = ({ params }) => {
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const {
    data: responseData,
    isLoading,
    error,
  } = useApiQuery(`/api/research/${id}`);

  const md = markdownit();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="px-12 py-16">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="ml-3">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="px-12 py-16">
          <div className="flex items-center justify-center">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <p className="mt-2 text-sm text-red-700">
              An error occurred while fetching the research document.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const status = responseData?.data?.[0]?.status || "";
  const isValid = responseData?.data?.[0]?.isValid || false;

  if (status === "processing") {
    return <ProcessingCard />;
  }

  if (status === "completed" && !isValid) {
    return (
      <ErrorCard
        title="Invalid Research Description"
        message="The research description is marked as invalid. Please keep your research topic related to Healthcare or Medicine or Pharmaceutical domain"
      />
    );
  }

  // Clean the markdown responseData if it exists
  let cleanedResult = responseData?.data?.[0]?.result
    ? cleanMarkdownString(responseData.data[0].result)
    : "";

  const markdown = md.renderInline(cleanedResult);

  const markdownreplaced = removeStrongTags(markdown);

  return <ResultMarkdown markdownContent={markdownreplaced} researchId={id} />;
};

export default SingleResearch;
