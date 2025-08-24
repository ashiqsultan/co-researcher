'use server'
export async function POST(request) {
  try {
    const body = await request.json();
    const { researchDescription } = body;
    
    console.log("Received research submission:", {
      researchDescription,
      timestamp: new Date().toISOString()
    });
    
    return Response.json({ 
      success: true, 
      message: "Research submission received successfully" 
    });
  } catch (error) {
    console.error("Error processing research submission:", error);
    return Response.json(
      { success: false, message: "Failed to process research submission" },
      { status: 500 }
    );
  }
}
