"use server";
import { getResearchByResearchId } from "@/app/helpers/research/getById";

export async function GET(request, { params }) {
  try {
    // Get the researchId from the URL path params
    const researchId = params.id;

    if (!researchId) {
      return Response.json(
        { success: false, message: "Research ID is required" },
        { status: 400 }
      );
    }

    const result = await getResearchByResearchId(researchId);

    if (!result.success) {
      return Response.json(
        { success: false, message: result.error },
        { status: 404 }
      );
    }

    return Response.json(result);
  } catch (error) {
    console.error("Error in GET /api/research: by id", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
