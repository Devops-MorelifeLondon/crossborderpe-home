import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fromCurrency, toCurrency, amount } = body;

    if (!fromCurrency || !toCurrency || !amount) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Validate amount
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount provided." },
        { status: 400 }
      );
    }

    // --- XFlow API Integration ---
    const quoteResponse = await axios.get("https://api.xflowpay.com/v1/quotes", {
      headers: {
        Authorization: `Bearer ${process.env.XFLOW_API_KEY}`,
      },
      params: {
        type: "payout_fx",
        "sell.currency": fromCurrency,
        "buy.currency": toCurrency,
        "sell.amount": numericAmount.toFixed(2),
      },
    });

    const quoteData = quoteResponse.data;

    // Extract relevant data from the response
    const marketRate = quoteData?.rate?.user;
    const convertedAmount = quoteData?.buy?.amount;

    if (!marketRate || !convertedAmount) {
      return NextResponse.json(
        { error: "Could not retrieve a valid quote from the provider." },
        { status: 404 }
      );
    }

    // --- Mock Bank Rate Comparison ---
    const mockBankSpread = 0.02; // 2% spread
    const bankRate = marketRate * (1 - mockBankSpread);
    const bankConvertedAmount = numericAmount * bankRate;
    const savings = convertedAmount - bankConvertedAmount;

    return NextResponse.json({
      ourRate: marketRate,
      bankRate,
      convertedAmount,
      savings,
      lastUpdated: new Date(quoteData.created_at || Date.now()).toISOString(),
    });
  } catch (error) {
    console.error("FX Quote API Error:", error);

    if (error.response) {
      console.error("API Error Details:", error.response.data);
      return NextResponse.json(
        {
          error: "Failed to fetch quote from the payment provider.",
          details: error.response.data.message || "No additional details available.",
        },
        { status: error.response.status }
      );
    }

    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}
