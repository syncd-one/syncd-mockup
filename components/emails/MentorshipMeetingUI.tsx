import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CheckCircle,
  XCircle,
  Clock,
  Calendar as CalendarIcon,
  Users,
  Book,
  Lightbulb,
} from "lucide-react";

const MentorshipMeetingUI = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  const discussionTopics = [
    "Challenges in AI ethics",
    "Methodologies for quantifying and mitigating bias",
    "Structuring research for meaningful contributions",
    "Collaboration opportunities",
  ];

  const handleAccept = () => {
    // Logic to accept and schedule the meeting
    console.log("Meeting accepted for:", selectedDate);
  };

  const handleDecline = () => {
    // Logic to decline the meeting request
    console.log("Meeting declined");
  };

  return (
    <div className="h-full bg-gray-100 p-6 rounded-lg shadow-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-6"
      >
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/api/placeholder/32/32" alt="Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Sarah Johnson</h2>
            <p className="text-gray-600">PhD Candidate - Computer Science</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">sj9xk@virginia.edu</p>
          <p className="text-sm text-gray-500">Second-year PhD</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Book className="mr-2 h-5 w-5 text-blue-500" />
            Research Focus
          </h3>
          <p className="text-sm text-gray-600">
            AI ethics and bias in machine learning models
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-4 rounded-lg shadow"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-blue-500" />
            Requested Duration
          </h3>
          <p className="text-sm text-gray-600">30 minutes</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 bg-white p-4 rounded-lg shadow"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-blue-500" />
          Discussion Topics
        </h3>
        <ul className="space-y-2">
          {discussionTopics.map((topic, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              {topic}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 flex justify-between items-center"
      >
        <Button
          variant="outline"
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex items-center"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {showCalendar ? "Hide Calendar" : "Show Calendar"}
        </Button>
        <div className="space-y-2">
          <Button
            variant="destructive"
            onClick={handleDecline}
            className="flex items-center"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Decline
          </Button>
          <Button
            variant="default"
            onClick={handleAccept}
            className="bg-green-500 hover:bg-green-600 flex items-center"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Accept & Schedule
          </Button>
        </div>
      </motion.div>

      {showCalendar && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6 bg-white p-4 rounded-lg shadow"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </motion.div>
      )}
    </div>
  );
};

export default MentorshipMeetingUI;
