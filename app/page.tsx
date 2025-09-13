'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
          SaaS Starter Kit MVP
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          This is a simplified, functional MVP of a SaaS application built with Next.js and Tailwind CSS. All data is stored in your browser's localStorage.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/pricing" className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View Pricing
          </Link>
          <Link href="/dashboard" className="px-8 py-3 text-lg font-semibold text-gray-700 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
