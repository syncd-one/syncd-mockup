import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Brain,
  Code,
  FileText,
  GraduationCap,
  Clock,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const ResearchAssistantAppUI = () => {
  const [evaluation, setEvaluation] = useState({
    technicalSkills: false,
    researchExperience: false,
    ethicsKnowledge: false,
    availability: false,
  });

  const updateEvaluation = (key: string, value: boolean) => {
    setEvaluation((prev) => ({ ...prev, [key]: value }));
  };

  const getEvaluationProgress = () => {
    const completedItems = Object.values(evaluation).filter(Boolean).length;
    return (completedItems / Object.keys(evaluation).length) * 100;
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
            <AvatarImage src="/api/placeholder/32/32" alt="Alex Patel" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Alex Patel</h2>
            <p className="text-gray-600">Research Assistant Applicant</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">ap7yz@virginia.edu</p>
          <p className="text-sm text-gray-500">CS Major, Class of 2025</p>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Key Points
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                Third-year Computer Science major
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-blue-500" />
                Available 15-20 hours per week
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Brain className="h-4 w-4 mr-2 text-blue-500" />
                Interested in AI ethics and bias mitigation
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Technical Skills
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Python, TensorFlow, scikit-learn
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Relevant Coursework
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Machine Learning, Data Structures, Ethics in CS
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Projects
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Research on gender bias in NLP models</li>
              <li>AI-driven sustainability app (UVA Hackathon)</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Attached Documents
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Resume</span>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Transcript</span>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Writing Sample: AI Ethics in Autonomous Vehicles
                </span>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 bg-white p-4 rounded-lg shadow"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Quick Evaluation
        </h3>
        <div className="space-y-2">
          {Object.entries(evaluation).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <Checkbox
                id={key}
                checked={value}
                onCheckedChange={(checked) =>
                  updateEvaluation(key, checked as boolean)
                }
              />
              <label htmlFor={key} className="ml-2 text-sm text-gray-600">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-1">Evaluation Progress</p>
          <Progress value={getEvaluationProgress()} className="w-full" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 flex justify-end space-x-4"
      >
        <Button variant="outline" className="flex items-center">
          <Clock className="mr-2 h-4 w-4" />
          Schedule Interview
        </Button>
        <Button variant="default" className="bg-green-500 hover:bg-green-600">
          <ThumbsUp className="mr-2 h-4 w-4" />
          Accept
        </Button>
        <Button variant="destructive">
          <ThumbsDown className="mr-2 h-4 w-4" />
          Decline
        </Button>
      </motion.div>
    </div>
  );
};

export default ResearchAssistantAppUI;
