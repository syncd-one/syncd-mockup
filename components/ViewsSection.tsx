import React from "react";
import { MoreHorizontal } from "lucide-react";
import { viewCodes } from "@/lib/emails";

type VSType = {
  openModal: (view: string) => void;
  selectedViews: string[];
  toggleView: (view: string) => void;
};

const ViewsSection = ({ openModal, selectedViews, toggleView }: VSType) => {
  return (
    <div className="mt-8">
      <h2 className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
        Views
      </h2>
      <ul className="space-y-1">
        {Object.keys(viewCodes).map((view) => (
          <li key={view} className="flex items-center px-4 py-2 text-sm">
            <button
              onClick={() => toggleView(view)}
              className="flex items-center space-x-3 text-gray-300 hover:text-white focus:outline-none"
            >
              <span
                className={`flex h-3 w-3 items-center justify-center rounded-full border ${
                  selectedViews.includes(
                    viewCodes[view as keyof typeof viewCodes],
                  )
                    ? "bg-purple-500 border-purple-500"
                    : "border-gray-500"
                }`}
              >
                {selectedViews.includes(
                  viewCodes[view as keyof typeof viewCodes],
                ) && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                )}
              </span>
              <span>{view}</span>
            </button>
            <button
              onClick={() => openModal(view)}
              className="ml-auto text-gray-400 hover:text-white focus:outline-none"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewsSection;
