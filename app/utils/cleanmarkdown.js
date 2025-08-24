/**
 * Cleans a markdown string by converting escaped characters back to their proper format
 * @param {string} markdownString - The raw markdown string from database with escaped characters
 * @returns {string} - Clean markdown string ready for rendering
 */
function cleanMarkdownString(markdownString) {
  if (!markdownString || typeof markdownString !== "string") {
    return "";
  }

  return (
    markdownString
      // Convert \n to actual newlines
      .replace(/\\n/g, "\n")
      // Convert \r to actual carriage returns
      .replace(/\\r/g, "\r")
      // Convert \t to actual tabs
      .replace(/\\t/g, "\t")
      // Convert escaped quotes
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      // Convert escaped backslashes (this should be last)
      .replace(/\\\\/g, "\\")
      // Trim any extra whitespace at the beginning and end
      .trim()
  );
}

// Example usage:
const fromDb =
  "# Latest Methodologies in Oncology and Cancer Cures\n\nThe landscape of oncology research is rapidly evolving, with significant advancements in methodologies aimed at more effectively treating and potentially curing cancer. These cutting-edge approaches leverage a combination of genomics, immunology, nanotechnology, and artificial intelligence to develop highly personalized and less toxic treatments.\n\n## Key Research Methodologies and Advancements:\n\n### 1. Immunotherapy Advancements\nImmunotherapy continues to be a cornerstone of modern oncology, focusing on harnessing the body's immune system to fight cancer.\n* **Personalized mRNA Cancer Vaccines:** Similar to COVID-19 vaccine technology, these vaccines train the patient's immune system to recognize and attack specific cancer cells, aiming to reduce recurrence.\n* **CAR T-cell Therapy Expansion:** While initially successful for leukemias, research is expanding CAR T-cell therapy to target solid tumors, such as in pancreatic cancer and melanoma.\n* **Tumor-Infiltrating Lymphocyte (TIL) Therapy:** This involves isolating TILs from a patient's tumor, expanding them in a lab, and re-infusing them to combat cancer,";

const cleanedMarkdown = cleanMarkdownString(fromDb);
console.log(cleanedMarkdown);

// Export for use in other modules
export { cleanMarkdownString };
