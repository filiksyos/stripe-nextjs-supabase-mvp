'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const plans = [
  { name: 'Basic', price: '10', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
  { name: 'Pro', price: '25', features: ['All Basic features', 'Feature 4', 'Feature 5'] },
  { name: 'Enterprise', price: 'Contact us', features: ['All Pro features', '24/7 Support', 'Custom Integrations'] },
];

export default function PricingPage() {
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('subscriptionPlan');
    if (storedPlan) {
      setCurrentPlan(storedPlan);
    }
  }, []);

  const handleSelectPlan = (planName: string) => {
    localStorage.setItem('subscriptionPlan', planName);
    setCurrentPlan(planName);
    alert(`You have selected the ${planName} plan!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Pricing Plans
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the best plan for your needs.
          </p>
           <Link href="/" className="mt-4 text-xl text-blue-600">
            Go back
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`border rounded-lg shadow-lg p-8 flex flex-col ${currentPlan === plan.name ? 'border-blue-500' : 'border-gray-200'}`}>
              <h2 className="text-2xl font-bold text-center">{plan.name}</h2>
              <div className="mt-4 text-center text-gray-900">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className="text-base font-medium text-gray-500">/mo</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <button 
                  onClick={() => handleSelectPlan(plan.name)}
                  disabled={currentPlan === plan.name}
                  className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {currentPlan === plan.name ? 'Current Plan' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
