import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  MapPin,
  BarChart,
  FileText,
  Users,
  Laptop,
  Plane,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

interface AgendaItemProps {
  item: string;
  duration: number;
  icon: React.ElementType;
}
const AgendaItem = ({ item, duration, icon: Icon }: AgendaItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
  >
    <Icon className="h-6 w-6 text-blue-500" />
    <div className="flex-grow">
      <p className="font-medium text-gray-700">{item}</p>
      <p className="text-sm text-gray-500">{duration} minutes</p>
    </div>
  </motion.div>
);

const DeptBudgetMeetingUI = () => {
  const [attending, setAttending] = useState<boolean | null>(null);

  const agenda = [
    { item: "Welcome and Introduction", duration: 5, icon: Users },
    { item: "Review of Last Year's Budget", duration: 20, icon: BarChart },
    { item: "Next Year's Budget Proposal", duration: 30, icon: FileText },
    { item: "Research Fund Allocation", duration: 25, icon: Laptop },
    { item: "Equipment and Technology Upgrades", duration: 20, icon: Laptop },
    { item: "Faculty Development and Travel", duration: 15, icon: Plane },
    { item: "Open Floor for Questions", duration: 30, icon: HelpCircle },
    { item: "Next Steps and Action Items", duration: 5, icon: CheckCircle },
  ];

  const totalDuration = agenda.reduce(
    (total, item) => total + item.duration,
    0,
  );

  return (
    <div className="h-full bg-white p-6 rounded-lg shadow-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-6"
      >
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/api/placeholder/32/32" alt="Dr. Robert Taylor" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Department Budget Meeting
            </h2>
            <p className="text-gray-600">Dr. Robert Taylor, Department Chair</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">rt3b@virginia.edu</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg"
        >
          <Calendar className="h-5 w-5 text-blue-500" />
          <div>
            <p className="font-medium text-gray-700">Date</p>
            <p className="text-sm text-gray-500">September 5, 2024</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg"
        >
          <Clock className="h-5 w-5 text-green-500" />
          <div>
            <p className="font-medium text-gray-700">Time</p>
            <p className="text-sm text-gray-500">2:00 PM - 4:00 PM</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-2 bg-purple-50 p-3 rounded-lg"
        >
          <MapPin className="h-5 w-5 text-purple-500" />
          <div>
            <p className="font-medium text-gray-700">Location</p>
            <p className="text-sm text-gray-500">Room 301</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Agenda</h3>
        <div className="space-y-2">
          {agenda.map((item, index) => (
            <AgendaItem key={index} {...item} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Meeting Duration
        </h3>
        <Progress value={(totalDuration / 120) * 100} className="h-2" />
        <p className="text-sm text-gray-500 mt-1">
          {totalDuration} minutes total
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <p className="text-sm text-gray-600 mb-1">Will you attend?</p>
          <div className="space-x-2">
            <Button
              variant={attending === true ? "default" : "outline"}
              onClick={() => setAttending(true)}
            >
              Yes
            </Button>
            <Button
              variant={attending === false ? "default" : "outline"}
              onClick={() => setAttending(false)}
            >
              No
            </Button>
          </div>
        </div>
        <Button>Add to Calendar</Button>
      </motion.div>
    </div>
  );
};

export default DeptBudgetMeetingUI;
