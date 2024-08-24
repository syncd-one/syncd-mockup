import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Users,
  FileText,
  HelpCircle,
} from "lucide-react";

const GradingCommitteeUI = () => {
  const [response, setResponse] = useState<"accept" | "decline" | null>(null);
  const [conflicts, setConflicts] = useState<Date[]>([]);

  const scheduleEvents = [
    { date: new Date(2024, 9, 10), event: "Exam Review", icon: FileText },
    {
      date: new Date(2024, 9, 12),
      event: "Rubric Finalization",
      icon: CheckCircle,
    },
    { date: new Date(2024, 9, 15), event: "Grading Starts", icon: Clock },
    { date: new Date(2024, 9, 20), event: "Grading Ends", icon: Clock },
    {
      date: new Date(2024, 9, 22),
      event: "Review & Disputes",
      icon: HelpCircle,
    },
    {
      date: new Date(2024, 9, 24),
      event: "Review & Disputes End",
      icon: CheckCircle,
    },
  ];

  const handleDateSelect = (date: Date) => {
    setConflicts((prev) =>
      prev.some((d) => d.toDateString() === date.toDateString())
        ? prev.filter((d) => d.toDateString() !== date.toDateString())
        : [...prev, date],
    );
  };

  const handleResponse = (action: "accept" | "decline") => {
    setResponse(action);
    console.log(
      `Response: ${action}, Conflicts: ${conflicts.map((d) => d.toDateString())}`,
    );
  };

  return (
    <div className="flex h-full bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-lg shadow-lg">
      <div className="w-1/2 pr-6 border-r border-purple-200">
        <h2 className="text-2xl font-bold mb-6 text-purple-800">
          CS 2102 Midterm Grading Committee
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-purple-700 mb-3">
              Key Responsibilities:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-purple-500" />
                <span>Review exam questions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-purple-500" />
                <span>Establish grading rubric</span>
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-500" />
                <span>Oversee grading process</span>
              </li>
              <li className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-purple-500" />
                <span>Address grading disputes</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg text-purple-700 mb-3">
              Schedule:
            </h3>
            <ScrollArea className="h-48 w-full rounded-md">
              {scheduleEvents.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mb-3 bg-purple-50 p-2 rounded"
                >
                  <item.icon className="h-5 w-5 mr-3 text-purple-600" />
                  <span className="flex-grow">{item.event}</span>
                  <span className="text-sm text-purple-600">
                    {item.date.toLocaleDateString()}
                  </span>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-6">
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="font-semibold text-lg text-purple-700 mb-3">
            Select any conflicting dates:
          </h3>
          <Calendar
            mode="multiple"
            selected={conflicts}
            onSelect={(date) => date instanceof Date && handleDateSelect(date)}
            className="rounded-md border"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-purple-700 mb-3">
            Your Response:
          </h3>
          <div className="flex justify-between items-center mb-4">
            <Button
              onClick={() => handleResponse("accept")}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Accept</span>
            </Button>
            <Button
              onClick={() => handleResponse("decline")}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600"
            >
              <XCircle className="h-5 w-5" />
              <span>Decline</span>
            </Button>
          </div>
          {response && (
            <div
              className={`p-3 rounded-md ${response === "accept" ? "bg-green-100" : "bg-red-100"}`}
            >
              <p className="flex items-center space-x-2 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>
                  {response === "accept"
                    ? `Accepted. ${conflicts.length ? `Conflicts noted on ${conflicts.length} date(s).` : "No conflicts noted."}`
                    : "Declined. A response will be sent to the committee."}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-lg text-purple-700 mb-2">
            Committee Formation Progress:
          </h3>
          <Progress
            value={66}
            className="h-2 bg-purple-200 [&>div]:bg-purple-600"
          />
          <p className="text-sm text-purple-600 mt-1">
            4 out of 6 members confirmed
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradingCommitteeUI;
