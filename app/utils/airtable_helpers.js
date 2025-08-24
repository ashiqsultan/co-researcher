import airtable from "airtable";
import { v4 as uuidv4 } from "uuid";

const AIRTABLE_API_KEY =
  "patLdOkRITEyu76dy.049bab9f22775e845f7a9d4e8d28ca107fb02d1b3ace2ebf1da2ee6193297dd9";
const BASE_ID = "appi3yUWs2ImoeWm2";

// Configure Airtable
airtable.configure({
  apiKey: AIRTABLE_API_KEY,
});

const base = airtable.base(BASE_ID);
const table = base("research-table");

const tempFields = {
  researchId: uuidv4(),
  description: "This is a test description",
  status: "processing",
};

/**
 * Create a new record in the specified Airtable table
 * @param {string} tableName - The name of the table to create the record in
 * @param {Object} fields - The fields and values for the new record
 * @returns {Promise<Object>} - The created record
 */
export async function createRecord(fields) {
  try {
    const record = await table.create([
      {
        fields: tempFields,
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
