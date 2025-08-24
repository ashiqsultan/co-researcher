import { table } from "./airtable_config.js";



export async function createRecord(researchId, description) {
  try {
    const record = await table.create([
      {
        fields: {
          researchId,
          description,
          status: "processing",
          isValid: false,
        },
      },
    ]);

    console.log("Record created:", record);
    console.log("Record created parsed:", JSON.stringify(record));

    return {
      success: true,
      record: record[0],
      id: record[0].id,
    };
  } catch (error) {
    console.error("Error creating record:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
