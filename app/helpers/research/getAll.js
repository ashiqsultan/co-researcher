import { table } from "./airtable_config.js";

export async function getAllResearch() {
  try {
    const sortBy = "createdAt";
    const sortDirection = "desc";
    const maxRecords = 100;

    let query = table.select({
      sort: [{ field: sortBy, direction: sortDirection }],
      maxRecords: maxRecords,
    });

    const records = await query.all();

    console.log(`Found ${records.length} records`);

    return {
      success: true,
      count: records.length,
      data: records.map((record) => {
        if (record.fields) return record.fields;
      }),
    };
  } catch (error) {
    console.error("Error getting all research records:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getResearchByStatus(status) {
  try {
    const records = await table
      .select({
        filterByFormula: `{status} = '${status}'`,
        sort: [{ field: "createdAt", direction: "desc" }],
      })
      .all();

    console.log(`Found ${records.length} records with status: ${status}`);

    return {
      success: true,
      count: records.length,
      data: records.map((record) => {
        if (record.fields) return record.fields;
      }),
    };
  } catch (error) {
    console.error("Error getting research by status:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function getValidResearch() {
  return getResearchByStatus("valid");
}

export async function getCompletedResearch() {
  return getResearchByStatus("completed");
}
