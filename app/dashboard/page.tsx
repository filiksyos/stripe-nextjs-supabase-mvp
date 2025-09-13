'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [subscriptionPlan, setSubscriptionPlan] = useState<string | null>(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('subscriptionPlan');
    setSubscriptionPlan(storedPlan || 'No plan selected');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Dashboard
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Welcome to your dashboard. Here's your current subscription status.
          </p>
          <Link href="/" className="mt-4 text-xl text-blue-600">
            Go back
          </Link>
        </div>

        <div className="mt-12 text-center">
          <div className="p-8 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold">Subscription Status</h2>
            <p className="mt-4 text-3xl font-extrabold text-blue-600">
              {subscriptionPlan}
            </p>
            <Link href="/pricing" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
                Change Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
