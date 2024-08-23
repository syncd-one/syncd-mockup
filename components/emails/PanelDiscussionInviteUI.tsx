import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  MessagesSquare,
  Check,
  X,
} from "lucide-react";
import { format } from "date-fns";

const PanelDiscussionInviteUI = () => {
  const [response, setResponse] = useState<"accept" | "decline" | null>(null);
  const eventDate = new Date(2024, 8, 15, 14, 0); // September 15, 2024, 2:00 PM

  const panelists = [
    { name: "Dr. Sarah Chen", role: "Chief of AI Research at UVA Health" },
    {
      name: "Prof. Michael Roberts",
      role: "Department of Biomedical Engineering",
    },
    { name: "Dr. Emily Tanner", role: "Healthcare Ethics Specialist" },
  ];

  const topics = [
    "Current applications of AI in healthcare",
    "Potential future developments and their impact on patient care",
    "Ethical considerations and challenges in implementing AI in healthcare settings",
    "Strategies for ensuring equitable access and preventing bias in AI-driven healthcare solutions",
  ];

  const handleResponse = (action: "accept" | "decline") => {
    setResponse(action);
    // Here you would typically send the response to the server
    console.log(`Response: ${action}`);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-4 rounded-lg shadow mb-6"
      >
        <h2 className="text-2xl font-bold text-indigo-800 mb-2">
          AI in Healthcare: Panel Discussion
        </h2>
        <p className="text-indigo-600 mb-4">
          Invitation from UVA Media Relations
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-indigo-500" />
            {format(eventDate, "MMMM d, yyyy")}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-indigo-500" />
            {format(eventDate, "h:mm a")} -{" "}
            {format(
              new Date(eventDate.getTime() + 2 * 60 * 60 * 1000),
              "h:mm a",
            )}{" "}
            EDT
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
            Rotunda Dome Room, UVA
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-indigo-500" />
            Expected Audience: 200
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            Other Panelists
          </h3>
          <ul className="space-y-2">
            {panelists.map((panelist, index) => (
              <li key={index} className="flex items-start">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback>
                    {panelist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-800">{panelist.name}</p>
                  <p className="text-sm text-gray-600">{panelist.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            Discussion Topics
          </h3>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center">
                <MessagesSquare className="h-5 w-5 mr-2 text-indigo-500" />
                <span className="text-sm text-gray-700">{topic}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 flex justify-center space-x-4"
      >
        <Button
          onClick={() => handleResponse("accept")}
          className={`flex items-center ${response === "accept" ? "bg-green-500 hover:bg-green-600" : "bg-indigo-500 hover:bg-indigo-600"}`}
        >
          <Check className="mr-2 h-4 w-4" />
          Accept Invitation
        </Button>
        <Button
          onClick={() => handleResponse("decline")}
          variant="outline"
          className={`flex items-center ${response === "decline" ? "bg-red-100 text-red-600 hover:bg-red-200" : ""}`}
        >
          <X className="mr-2 h-4 w-4" />
          Decline
        </Button>
      </motion.div>

      {response && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-sm"
        >
          {response === "accept" ? (
            <p className="text-green-600">
              You have accepted the invitation. The organizer will contact you
              with further details.
            </p>
          ) : (
            <p className="text-red-600">
              You have declined the invitation. The organizer will be notified.
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default PanelDiscussionInviteUI;
