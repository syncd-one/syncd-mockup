import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Brain,
  Activity,
  FileText,
  Users,
  Video,
  Calendar,
} from "lucide-react";

const StanfordResearchUI = () => {
  const [interestLevel, setInterestLevel] = useState(50);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const collaborationAreas = [
    { name: "AI Models", value: 80, icon: Brain },
    { name: "Ethics & Bias", value: 90, icon: Users },
    { name: "Clinical Trials", value: 70, icon: Activity },
    { name: "Publications", value: 85, icon: FileText },
  ];

  const meetingDates = [
    "Mon, July 10",
    "Tue, July 11",
    "Wed, July 12",
    "Thu, July 13",
    "Fri, July 14",
  ];

  const handleInterestChange = (value: number[]) => {
    setInterestLevel(value[0]);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-lg">
      <div className="w-2/3 pr-6">
        <h2 className="text-2xl font-bold mb-6 text-indigo-800">
          Stanford-UVA AI Collaboration
        </h2>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="font-semibold text-lg text-indigo-700 mb-3">
            Collaboration Synergy
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={collaborationAreas}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="font-semibold text-lg text-indigo-700 mb-3">
            Key Focus Areas
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {collaborationAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-indigo-50 p-3 rounded-lg"
              >
                <area.icon className="h-8 w-8 text-indigo-600" />
                <div>
                  <p className="font-medium text-indigo-800">{area.name}</p>
                  <p className="text-sm text-indigo-600">
                    Synergy: {area.value}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-indigo-700 mb-3">
            Potential Outcomes
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-500" />
              <span>
                Improved early detection of neurodegenerative diseases
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>More equitable AI systems in healthcare</span>
            </li>
            <li className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-purple-500" />
              <span>Joint publications in top-tier journals</span>
            </li>
            <li className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-red-500" />
              <span>Advancement in AI ethics and bias mitigation</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-1/3 pl-6 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-indigo-700 mb-3">
            Your Interest Level
          </h3>
          <Slider
            value={[interestLevel]}
            onValueChange={handleInterestChange}
            max={100}
            step={1}
            className="mb-2"
          />
          <p className="text-center text-indigo-600 font-medium">
            {interestLevel}% Interested
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-indigo-700 mb-3">
            Schedule a Call
          </h3>
          <ScrollArea className="h-40 w-full rounded-md border p-4">
            {meetingDates.map((date, index) => (
              <Button
                key={index}
                onClick={() => handleDateSelect(date)}
                variant={selectedDate === date ? "default" : "outline"}
                className="w-full mb-2"
              >
                <Calendar className="h-4 w-4 mr-2" />
                {date}
              </Button>
            ))}
          </ScrollArea>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg text-indigo-700 mb-3">
            Next Steps
          </h3>
          <div className="space-y-3">
            <Button className="w-full bg-green-500 hover:bg-green-600">
              <Video className="h-4 w-4 mr-2" />
              Schedule Video Call
            </Button>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              <FileText className="h-4 w-4 mr-2" />
              Request More Info
            </Button>
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              <Calendar className="h-4 w-4 mr-2" />
              RSVP to Workshop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StanfordResearchUI;
