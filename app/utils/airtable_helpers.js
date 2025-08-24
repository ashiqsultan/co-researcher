import airtable from "airtable";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

const BASE_ID = "appi3yUWs2ImoeWm2";

// Configure Airtable
airtable.configure({
  apiKey: AIRTABLE_API_KEY,
});

const base = airtable.base(BASE_ID);
const table = base("research-table");

const tempFields = {
  description: "This is a test description",
  status: "processing",
  isValid: true,
};

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
