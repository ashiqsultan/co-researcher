"use server";
import { v4 as uuidv4 } from "uuid";
import { createRecord } from "@/app/helpers/research/create";
import { getCompletedResearch } from "@/app/helpers/research/getAll";

export async function POST(request) {
  try {
    const body = await request.json();
    const { researchDescription } = body;

    console.log("Received research submission:", {
      researchDescription,
      timestamp: new Date().toISOString(),
    });

    const researchId = uuidv4();
    const description = researchDescription;
    await createRecord(researchId, description);

    return Response.json({
      success: true,
      message: "Research submission received",
      researchDescription,
      researchId,
    });
  } catch (error) {
    console.error("Error processing research submission:", error);
    return Response.json(
      { success: false, message: "Failed to process research submission" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await getCompletedResearch();

    if (result.success) {
      return Response.json({
        success: true,
        count: result.count,
        data: result.data,
      });
    } else {
      return Response.json(
        {
          success: false,
          message: "Failed to fetch completed research",
          error: result.error,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error fetching completed research:", error);
    return Response.json(
      { success: false, message: "Failed to fetch completed research" },
      { status: 500 }
    );
  }
}
