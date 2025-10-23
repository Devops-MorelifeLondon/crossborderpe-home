import axios from 'axios';

export default async function handler(req, res) {
  // Ensure the request method is POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { fromCurrency, toCurrency, amount } = req.body;

    console.log(req.body);

    if (!fromCurrency || !toCurrency || !amount) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
    
    // Ensure the amount is a valid number
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
        return res.status(400).json({ error: 'Invalid amount provided.' });
    }

    // --- XFlow API Integration using the Quotes Endpoint ---
    // This endpoint provides a guaranteed rate for a transaction.
    const quoteResponse = await axios.get("https://api.xflowpay.com/v1/quotes", {
      headers: { 
        'Authorization': `Bearer ${process.env.XFLOW_API_KEY}` 
      },
      params: {
        type: "payout_fx",
        "sell.currency": fromCurrency, // The currency you are selling (e.g., USD)
        "buy.currency": toCurrency,   // The currency you are buying (e.g., INR)
        "sell.amount": numericAmount.toFixed(2), // The amount you are selling
      },
    });

    const quoteData = quoteResponse.data;
    console.log(quoteData);

    // Extract the relevant data from the XFlow quote response
    // Note: Adjust these based on the actual API response structure from XFlow
    const marketRate = quoteData.rate.user; 
    const convertedAmount = quoteData.buy.amount; 

    if (!marketRate || !convertedAmount) {
        return res.status(404).json({ error: 'Could not retrieve a valid quote from the provider.' });
    }
    
    // --- Mock Bank Rate for Comparison ---
    // You can adjust the spread to reflect typical bank margins
    const mockBankSpread = 0.02; // 2% spread
    const bankRate = marketRate * (1 - mockBankSpread);
    const bankConvertedAmount = numericAmount * bankRate;
    const savings = convertedAmount - bankConvertedAmount;

    // Return the structured data to the frontend
    return res.status(200).json({
      ourRate: marketRate,
      bankRate: bankRate,
      convertedAmount: convertedAmount,
      savings: savings,
      lastUpdated: new Date(quoteData.created_at || Date.now()).toISOString(),
    });

  } catch (error) {
    console.error('FX Quote API Error:', error);

    // Handle API-specific errors from XFlow/Axios
    if (error.response) {
      console.error('API Error Details:', error.response.data);
      return res.status(error.response.status).json({ 
        error: 'Failed to fetch quote from the payment provider.',
        details: error.response.data.message || 'No additional details available.'
      });
    }

    // Handle generic server errors
    return res.status(500).json({ error: 'An internal server error occurred.' });
  }
}
