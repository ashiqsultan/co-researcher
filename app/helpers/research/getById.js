import { table } from "./airtable_config.js";

export async function getResearchByResearchId(researchId) {
  try {
    const records = await table
      .select({
        filterByFormula: `{researchId} = '${researchId}'`,
      })
      .firstPage();

    if (records.length === 0) {
      return {
        success: false,
        error: "Research not found",
      };
    }

    const record = records[0];
    console.log("Record found by researchId:", record);

    return {
      success: true,
      data: records.map((record) => {
        if (record.fields) return record.fields;
      }),
    };
  } catch (error) {
    console.error("Error getting record by researchId:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
