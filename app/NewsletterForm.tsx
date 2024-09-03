"use client";

import React, { useState, FormEvent } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://app.loops.so/api/newsletter-form/clz3mcbqb00qs6uwn72pes6zx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        const data = await response.json();
        throw new Error(data.message || 'An error occurred');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm md:max-w-lg text-center">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Be the first to use Syncd</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Stay updated with the latest news and updates about our development.
      </p>

      {status === 'idle' && (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
  className="p-2 border border-gray-300 rounded-lg mb-4 w-full text-black placeholder-gray-400"          />
          <button
            type="submit"
            className="bg-purple-600 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Join Waitlist
          </button>
        </form>
      )}

      {status === 'loading' && (
        <p className="text-gray-600">Please wait...</p>
      )}

      {status === 'success' && (
        <div>
          <p className="text-green-600">Thanks! We will be in touch!</p>
          <button
            onClick={resetForm}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            ← Back
          </button>
        </div>
      )}

      {status === 'error' && (
        <div>
          <p className="text-red-600">{errorMessage}</p>
          <button
            onClick={resetForm}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            ← Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;