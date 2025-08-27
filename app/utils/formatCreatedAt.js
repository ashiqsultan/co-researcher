import { format, parseISO } from "date-fns";

/**
 * Formats an ISO date string to 'MMM d, yyyy'.
 * @param {string} isoDate - The ISO date string (e.g., '2025-08-24T12:52:16.000Z').
 * @returns {string} Formatted date string (e.g., 'Aug 24, 2025').
 */
export function formatCreatedAt(isoDate) {
  if (!isoDate) return "";
  try {
    return format(parseISO(isoDate), "MMM d, yyyy");
  } catch {
    return "";
  }
}
