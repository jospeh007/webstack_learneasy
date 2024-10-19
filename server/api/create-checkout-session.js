import Stripe from 'stripe';
import process from 'process';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize CORS middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// Configure CORS
const corsMiddleware = cors({
  origin: '*',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, corsMiddleware);

  if (req.method === 'POST') {
    try {
      const { planName, price } = req.body;

      if (!planName || typeof price !== 'number' || isNaN(price)) {
        return res.status(400).json({ error: 'Invalid plan or price' });
      }

      console.log('Creating checkout session with:', { planName, price });

      const unitAmount = Math.round(price * 100);

      if (isNaN(unitAmount) || unitAmount <= 0) {
        return res.status(400).json({ error: 'Invalid price' });
      }

      // Create a Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: planName,
                description: `Access to LearnEasy ${planName} features`,
              },
              unit_amount: unitAmount,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_URL}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
      });

      console.log('Checkout session created:', session.id);
      res.status(200).json({ sessionId: session.id });
    } catch (err) {
      console.error('Error creating checkout session:', err);
      res.status(500).json({
        error: 'Error creating checkout session',
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
      });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
