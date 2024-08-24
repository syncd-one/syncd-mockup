import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const CourseFeedbackUI = () => {
  const [activeDonutSlice, setActiveDonutSlice] = useState<number | null>(null);

  const overallData = [
    { name: "Very Satisfied", value: 45, color: "#4CAF50" },
    { name: "Satisfied", value: 30, color: "#8BC34A" },
    { name: "Neutral", value: 15, color: "#FFC107" },
    { name: "Dissatisfied", value: 7, color: "#FF9800" },
    { name: "Very Dissatisfied", value: 3, color: "#F44336" },
  ];

  const aspectScores = [
    { aspect: "Teaching Quality", score: 4.5 },
    { aspect: "Course Content", score: 4.2 },
    { aspect: "Learning Resources", score: 4.0 },
    { aspect: "Assessment Methods", score: 3.8 },
    { aspect: "Feedback Timeliness", score: 3.5 },
  ];

  const trendData = [
    { semester: "Fall 2021", satisfaction: 3.8 },
    { semester: "Spring 2022", satisfaction: 4.0 },
    { semester: "Fall 2022", satisfaction: 4.1 },
    { semester: "Spring 2023", satisfaction: 4.3 },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Course Feedback</h1>
        <p className="text-gray-600">Spring 2023 Semester</p>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Overall Satisfaction</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-full h-64 flex justify-center items-center">
              <PieChart width={200} height={200}>
                <Pie
                  data={overallData}
                  cx={100}
                  cy={100}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveDonutSlice(index)}
                  onMouseLeave={() => setActiveDonutSlice(null)}
                >
                  {overallData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke={activeDonutSlice === index ? "#000" : "none"}
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
            {activeDonutSlice !== null && (
              <div className="text-center mt-4">
                <p className="font-semibold">
                  {overallData[activeDonutSlice].name}
                </p>
                <p>{overallData[activeDonutSlice].value}%</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Aspect Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={aspectScores}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="aspect" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="comments">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="comments">Student Comments</TabsTrigger>
          <TabsTrigger value="trends">Satisfaction Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="comments">
          <Card>
            <CardHeader>
              <CardTitle>Recent Student Comments</CardTitle>
              <CardDescription>
                A sample of the latest feedback from students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Badge>Positive</Badge>
                  <p className="mt-1">
                    &ldquo;The professor&apos;s enthusiasm made complex topics
                    easy to understand.&ldquo;
                  </p>
                </li>
                <li>
                  <Badge variant="secondary">Neutral</Badge>
                  <p className="mt-1">
                    &ldquo;Course content was informative, but more real-world
                    applications would be helpful.&ldquo;
                  </p>
                </li>
                <li>
                  <Badge variant="destructive">Negative</Badge>
                  <p className="mt-1">
                    &ldquo;Assignments often felt rushed. More time for
                    completion would be appreciated.&ldquo;
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Satisfaction Trend</CardTitle>
              <CardDescription>
                Overall satisfaction scores over recent semesters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="semester" />
                    <YAxis domain={[3, 5]} />
                    <Tooltip />
                    <Bar dataKey="satisfaction" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Student Participation Rate</p>
            <Progress value={76} className="mt-2" />
            <p className="text-right text-sm text-gray-500 mt-1">76%</p>
          </div>
          <div>
            <p className="text-sm font-medium">Courses Evaluated</p>
            <Progress value={92} className="mt-2" />
            <p className="text-right text-sm text-gray-500 mt-1">92%</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseFeedbackUI;
