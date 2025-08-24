"use client";
import { useRef, useState } from "react";
import { IconSearch } from "@tabler/icons-react";

export default function NewResearchForm() {
  const researchDescriptionRef = useRef("");
  const [validationError, setValidationError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateDescription = (description) => {
    if (description.length < 100) {
      return "Research Description must be at least 100 characters long";
    }
    if (description.length > 1000) {
      return "Description cannot be more than 1000 characters long";
    }
    return "";
  };

  const handleDescriptionChange = (e) => {
    researchDescriptionRef.current = e.target.value;
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submitting
    const error = validateDescription(researchDescriptionRef.current);
    if (error) {
      setValidationError(error);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          researchDescription: researchDescriptionRef.current,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Research submitted successfully:", data.message);
        // TODO: Navigate to results page or show success message
        researchDescriptionRef.current = ""; // Clear the form
        setValidationError(""); // Clear any validation errors
      } else {
        console.error("Failed to submit research:", data.message);
      }
    } catch (error) {
      console.error("Error submitting research:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const characterCount = researchDescriptionRef.current.length;
  const isDescriptionValid = characterCount >= 100 && characterCount <= 1000;
  const isDescriptionTooShort = characterCount > 0 && characterCount < 100;
  const isDescriptionTooLong = characterCount > 1000;

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <IconSearch className="h-6 w-6 text-teal-600 mr-3" />
        What you want to research ?
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          {/* Gradient shadow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg blur-md opacity-30 translate-x-1 translate-y-1"></div>
          <textarea
            id="research-description"
            rows={6}
            className={`relative w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none placeholder:text-gray-400 text-gray-700 ${
              validationError || isDescriptionTooShort || isDescriptionTooLong
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200"
            }`}
            placeholder="Describe your research topic, hypothesis, or area of interest in pharmaceutical or biotechnology..."
            defaultValue={researchDescriptionRef.current}
            onChange={handleDescriptionChange}
            required
          />
        </div>

        {/* Validation error message */}
        {validationError && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            {validationError}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600"></div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg transform ${
              !isSubmitting
                ? "bg-gradient-to-r from-teal-600 to-sky-600 text-white hover:from-teal-700 hover:to-sky-700 hover:shadow-xl hover:-translate-y-0.5"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Start Research"}
          </button>
        </div>
      </form>
    </div>
  );
}
