import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { fullName, contactNumber, email, message } = await req.json();
    console.log(fullName, contactNumber, email, message);

    const formId = process.env.JOTFORM_SERVICE_PAGE_FORM_ID;
    const apiKey = process.env.JOTFORM_SERVICE_PAGE_KEY;

    if (!formId || !apiKey) {
      return NextResponse.json(
        { error: "Missing JotForm configuration" },
        { status: 500 }
      );
    }

    if (!fullName || !email || !message || !contactNumber) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const params = new URLSearchParams();
    params.append("submission[7]", fullName);
    params.append("submission[4]", email);
    params.append("submission[5]", message);
    params.append("submission[6]", contactNumber);

    const jotformResponse = await fetch(
      `https://api.jotform.com/form/${formId}/submissions?apiKey=${apiKey}`,
      {
        method: "POST",
        body: params,
      }
    );

    // Log the full response for debugging
    console.log('JotForm HTTP Status:', jotformResponse.status);
    
    if (!jotformResponse.ok) {
      const errorText = await jotformResponse.text();
      console.log('JotForm Error Response:', errorText);
      throw new Error(`JotForm API error: ${jotformResponse.status} - ${errorText}`);
    }
    
    const result = await jotformResponse.json();
    console.log("JotForm Result:", result);

    // Check the responseCode in the JSON response body, not the HTTP status
    if (result.responseCode === 200) {
      console.log('Submission successful:', result.content.submissionID);
      return NextResponse.json({ 
        success: true, 
        message: "Form submitted successfully",
        submissionID: result.content.submissionID 
      });
    } else {
      console.log('JotForm API returned error:', result);
      return NextResponse.json(
        { 
          error: "Failed to submit form", 
          details: result.message || result,
          responseCode: result.responseCode 
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("JotForm submission error:", error);
    return NextResponse.json({ 
      error: "Internal server error",
      details: error.message 
    }, { status: 500 });
  }
}
