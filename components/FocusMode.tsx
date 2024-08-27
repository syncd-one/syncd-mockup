import React, { useState } from "react";
import { Moon, X, Clock } from "lucide-react";

const FocusMode = () => {
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
    <div className="flex justify-center">
      {" "}
      {/* Added this wrapper div */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-gray-800 text-white rounded-full px-3 py-2 font-semibold hover:bg-gray-700 transition-colors flex items-center"
      >
        <Moon className="mr-2" size={20} />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-3xl p-6 overflow-auto max-w-md w-full max-h-[90vh]">
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
        </div>
      )}
    </div>
  );
};

export default FocusMode;
