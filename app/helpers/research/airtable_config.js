import airtable from "airtable";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = "appi3yUWs2ImoeWm2";

// Configure Airtable
airtable.configure({
  apiKey: AIRTABLE_API_KEY,
});

const base = airtable.base(BASE_ID);
const table = base("research-table");

export { base, table };
