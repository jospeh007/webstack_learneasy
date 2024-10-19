import { useState } from 'react'
import { Check, Loader } from 'lucide-react'
import { Link } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51NfenPSEy77A1WNH5fXH6aUD1ul3B6TO5CvdlCM3XzE8UOLh4VFQE9GwhkH4rGRLUFyoLTpFC0UAzkH89hSzsLPT00bCIXlrat")

const PaymentAndPlans = () => {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async ({planName, price}) => {
    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
      console.error('Invalid price:', price);
      // You might want to show an error message to the user here
      return;
    }

    setLoading(true)

    try {
      const stripe = await stripePromise;
      const response = await fetch("https://test-backend-gamma-smoky.vercel.app/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ planName, price })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({sessionId: session.sessionId});

      if (result.error) {
        console.error(result.error);
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // You might want to show an error message to the user here
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen">
        <div className="relative h-96 font-bold flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(https://cutesolution.com/html/techvio/assets/img/page-title-bg-3.jpg)] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-950 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-300"><Link className='hover:text-purple-500 transition-all duration-300' to="/">Home</Link> • Pricing</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PlanCard
            title="Basic"
            price="$9.99"
            period="Per month"
            features={[
              "Access to all basic courses",
              "Limited quizzes and exercises",
              "Email support",
              "Mobile app access",
              "Progress tracking",
              "1 learning path"
            ]}
            checkout={()=>{handleCheckout({planName: "Basic", price: 9.99})}}
            loading={loading}
          />
          <PlanCard
            title="Pro"
            price="$19.99"
            period="Per month"
            features={[
              "Access to all courses",
              "Unlimited quizzes and exercises",
              "Priority email support",
              "Mobile app access",
              "Advanced progress tracking",
              "3 learning paths"
            ]}
            checkout={()=>{handleCheckout({planName: "Pro", price: 19.99})}}
            loading={loading}
          />
          <PlanCard
            title="Premium"
            price="$29.99"
            period="Per month"
            features={[
              "Access to all courses and exclusive content",
              "Unlimited quizzes and exercises",
              "24/7 priority support",
              "Mobile app access with offline mode",
              "Personalized learning recommendations",
            ]}
            checkout={()=>{handleCheckout({planName: "Premium", price: 29.99})}}
            loading={loading}
          />
        </div>
      </div>
    </section>
  )
}

const PlanCard = ({ title, price, period, features, checkout, loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="mb-4">
          <div className={`text-white px-3 py-1 rounded-full text-sm font-semibold inline-block ${
            title === 'Startup' ? 'bg-purple-500' :
            title === 'Standard' ? 'bg-blue-500' :
            'bg-indigo-500'
          }`}>
            {title}
          </div>
        </div>
        <div className="text-4xl font-bold text-purple-600 mb-2">
          {price}
        </div>
        <div className="text-sm text-gray-500 mb-6">
          {period}
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
          onClick={checkout}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader className="animate-spin mr-2" size={20} />
              Processing...
            </>
          ) : (
            'Get Started'
          )}
        </button>
      </div>
    </div>
  )
}

export default PaymentAndPlans
