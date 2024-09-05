"use client";

import React, { useState } from "react";
import { Clock, Coffee, Snowflake, ListChecks, Moon, X } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const SaaSLandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const focusModes = [
    { time: "Morning", rule: "Non-emergency work emails are disabled" },
    { time: "Work Hours", rule: "Personal emails are turned off" },
    {
      time: "Fantasy Football",
      rule: "Fantasy football emails are disabled until 1 hour before kickoff",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold text-purple-600 flex items-center">
          <Coffee className="mr-2 h-6 w-6" /> Syncd
        </div>
      </nav>

      <main className="container mx-auto text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">Purpose-Built Microsites for your Emails</h1>
        <p className="text-gray-400 mb-8">
          Cut the time spent managing to emails in half
        </p>
        <form action="/demo" method="get">
          <button
            type="submit"
            className="bg-purple-600 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            View Demo
          </button>
        </form>

        <div className="mt-16 flex justify-center">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/ui.png" alt="UI Preview" />
          </div>
        </div>
      </main>

      <section className="container mx-auto mt-20 flex justify-between items-center">
        <div className="w-1/2">
          <FeatureItem
            icon={<Snowflake className="text-blue-400" size={40} />}
            title="A webpage for every email"
            description="Each interface created to help you get through your inbox faster"
          />
          <FeatureItem
            icon={<ListChecks className="text-purple-400" size={40} />}
            title="Customize Views"
            description="Filter, Sort, and Tag your email with natural language instructions"
          />
          <FeatureItem
            icon={<Moon className="text-yellow-400" size={40} />}
            title="Focus Mode"
            description="Decide what types of emails are worth a ping and which are not"
          />
        </div>
        <div className="w-1/2 bg-blue-100 rounded-3xl p-8">
          <div className="bg-blue-100 rounded-3xl p-8 relative h-[400px] flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-800 text-white rounded-full px-6 py-3 font-semibold hover:bg-gray-700 transition-colors flex items-center"
            >
              <Moon className="mr-2" size={20} />
              View Focus Modes
            </button>

            {isModalOpen && (
              <div className="absolute inset-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-3xl p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Focus Modes</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors rounded-full p-1 hover:bg-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>
                <ul className="space-y-4">
                  {focusModes.map((mode, index) => (
                    <li
                      key={index}
                      className="bg-gray-700 bg-opacity-50 p-4 rounded-xl border border-gray-600 hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-center mb-2">
                        <Clock className="text-blue-400 mr-2" size={18} />
                        <h3 className="font-semibold text-white text-lg">
                          {mode.time}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-300 ml-6">{mode.rule}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="container mx-auto mt-20 flex justify-center">
        <NewsletterForm />
      </section>

      <footer className="mt-20 pb-10 text-center text-gray-400">
        <p>&copy; 2024 Syncd. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default SaaSLandingPage;