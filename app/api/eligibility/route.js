import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const name = data.name || data.fullName || `${data.firstName || ""} ${data.lastName || ""}`.trim();
    const email = data.email;
    const countryOfResidence = data.countryOfResidence || data.country || "Not specified";
    const hasUkCompany = data.hasUkCompany !== undefined ? data.hasUkCompany : "Not specified";
    const businessType = data.businessType || data.primaryBusinessType || "Not specified";
    const monthlyTurnover = data.monthlyTurnover || data.expectedMonthlyTurnover || "Not specified";
    const message = data.message || "None";

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Please provide your name and email address." },
        { status: 400 }
      );
    }

    console.log("New UK Business Bank Account Pre-Assessment Eligibility Submission:", {
      name,
      email,
      countryOfResidence,
      hasUkCompany,
      businessType,
      monthlyTurnover,
      message,
      phone: data.phone || "Not provided",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your eligibility pre-assessment inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Error processing eligibility submission:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
