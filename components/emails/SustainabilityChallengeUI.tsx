import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Zap, Bike, Calendar, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SustainabilityChallengeUI = () => {
  const [activeMetric, setActiveMetric] = useState(null);
  const [overallProgress, setOverallProgress] = useState(0);

  const metrics = [
    {
      name: "Energy",
      icon: Zap,
      color: "#FFA500",
      current: 15,
      goal: 20,
      unit: "% reduction",
    },
    {
      name: "Waste",
      icon: Leaf,
      color: "#4CAF50",
      current: 30,
      goal: 40,
      unit: "% recycled",
    },
    {
      name: "Water",
      icon: Droplet,
      color: "#2196F3",
      current: 10,
      goal: 15,
      unit: "% saved",
    },
    {
      name: "Transport",
      icon: Bike,
      color: "#9C27B0",
      current: 25,
      goal: 30,
      unit: "% biked",
    },
  ];

  const events = [
    {
      name: "Sustainability Fair",
      date: "This Saturday",
      time: "10 AM - 4 PM",
      location: "Main Quad",
    },
    {
      name: "Green Tech Workshop",
      date: "Next Tuesday",
      time: "2 PM",
      location: "Engineering Building",
    },
    {
      name: "Campus Clean-up Day",
      date: "Next Friday",
      time: "1 PM - 5 PM",
      location: "Student Center",
    },
  ];

  const leaderboard = [
    { name: "Engineering", score: 2500 },
    { name: "Liberal Arts", score: 2300 },
    { name: "Sciences", score: 2100 },
    { name: "Business", score: 1900 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverallProgress(80);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-green-800">
          Campus Sustainability Challenge
        </h2>
        <p className="text-lg text-green-600">
          Together, we're making a difference!
        </p>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  {overallProgress}%
                </span>
              </div>
            </div>
            <Progress
              value={overallProgress}
              className="h-2 bg-green-200"
              indicatorClassName="bg-green-500"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className="cursor-pointer h-full"
              onClick={() =>
                setActiveMetric(
                  activeMetric === metric.name ? null : metric.name,
                )
              }
            >
              <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                <metric.icon
                  className="w-8 h-8 mb-2"
                  style={{ color: metric.color }}
                />
                <CardTitle className="text-lg mb-1">{metric.name}</CardTitle>
                <p
                  className="text-2xl font-bold"
                  style={{ color: metric.color }}
                >
                  {metric.current}%
                </p>
                <p className="text-sm text-gray-500">{metric.unit}</p>
                {activeMetric === metric.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2"
                  >
                    <p className="text-sm">Goal: {metric.goal}%</p>
                    <Progress
                      value={(metric.current / metric.goal) * 100}
                      className="mt-1"
                    />
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" /> Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {events.map((event, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                >
                  <div>
                    <h3 className="font-semibold">{event.name}</h3>
                    <p className="text-sm text-gray-500">
                      {event.date}, {event.time}
                    </p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    RSVP
                  </Button>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="mr-2" /> Faculty Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {leaderboard.map((faculty, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
                >
                  <div className="flex items-center">
                    <Badge
                      variant={index === 0 ? "default" : "secondary"}
                      className="mr-3"
                    >
                      #{index + 1}
                    </Badge>
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={`/api/placeholder/32/32`}
                        alt={faculty.name}
                      />
                      <AvatarFallback>{faculty.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="ml-3 font-semibold">{faculty.name}</span>
                  </div>
                  <span className="font-bold text-green-600">
                    {faculty.score}
                  </span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button className="w-full md:w-auto bg-green-600 hover:bg-green-700">
          View Full Sustainability Dashboard
        </Button>
      </div>
    </div>
  );
};

export default SustainabilityChallengeUI;
