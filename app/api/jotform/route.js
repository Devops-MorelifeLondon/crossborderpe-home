// api/jotform/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { fullName, contactNumber, email, message, captcha } = await req.json();

    // 🔐 Validate fields
    if (!fullName || !contactNumber || !email || !message)
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });

    // ✅ Verify reCAPTCHA
    // ... your reCAPTCHA code is perfect, no changes needed ...
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const captchaVerify = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: captcha,
      }),
    }).then((r) => r.json());

    if (!captchaVerify.success)
      return NextResponse.json({ error: "Failed CAPTCHA verification." }, { status: 400 });

    // 🧾 JotForm Integration
    const formId = process.env.JOTFORM_SERVICE_PAGE_FORM_ID;

    if (!formId)
      return NextResponse.json({ error: "JotForm configuration missing." }, { status: 500 });

    const params = new URLSearchParams();

    // CHANGED #1: Use the REAL field names you found in Step 1.
    // These are EXAMPLES. You MUST replace them with your own.
    params.append("q7_fullName", fullName); // e.g., name="q7_fullName"
    params.append("q4_email", email); // e.g., name="q4_email"
    params.append("q5_message", message); // e.g., name="q5_message"
    params.append("q6_contactNumber", contactNumber); // e.g., name="q6_contactNumber"

    // CHANGED #2: You MUST include the formID in the body as well.
    params.append("formID", formId); 

    // CHANGED #3: Use the Web Submit URL. The API key is not needed.
    const jotRes = await fetch(
      `https://submit.jotform.com/submit/${formId}`, 
      { method: "POST", body: params }
    );

    // CHANGED #4: The Web Submit URL does not return JSON.
    // We only check if the request was successful (status 200).
    if (jotRes.ok) {
      
      return NextResponse.json({
        success: true,
        submissionID: null, // Note: The web submit URL does not return the submission ID
      });
    } else {
      return NextResponse.json(
        { error: "Failed to submit form.", details: "Jotform server error." },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    return NextResponse.json(
      { error: "Internal server error", details: err.message },
      { status: 500 }
    );
  }
}