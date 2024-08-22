import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ShieldAlert,
  Server,
  Mail,
  Book,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const SecurityAlertUI = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    "Change Password",
    "Review Recent Activity",
    "Update Security Settings",
  ];

  return (
    <div className="bg-red-50 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-red-700">
          CRITICAL SECURITY ALERT
        </h2>
        <div className="animate-pulse">
          <ShieldAlert className="h-8 w-8 text-red-600" />
        </div>
      </div>

      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Security vulnerability detected. Immediate action required.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2 flex items-center">
            <Server className="h-4 w-4 text-red-500 mr-2" />
            Student Portal
          </h3>
          <p className="text-sm text-gray-600">Access restricted</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2 flex items-center">
            <Mail className="h-4 w-4 text-red-500 mr-2" />
            Faculty Email
          </h3>
          <p className="text-sm text-gray-600">Temporarily disabled</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2 flex items-center">
            <Book className="h-4 w-4 text-red-500 mr-2" />
            Library Database
          </h3>
          <p className="text-sm text-gray-600">Read-only mode</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Security Checklist</h3>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <Button
                variant={index === currentStep ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setCurrentStep(index)}
              >
                {index < currentStep ? (
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                ) : (
                  <div className="h-4 w-4 mr-2 rounded-full border border-gray-300" />
                )}
                {step}
                {index === currentStep && (
                  <ArrowRight className="ml-auto h-4 w-4" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold flex items-center">
            <Clock className="h-4 w-4 text-blue-500 mr-2" />
            Patch Status
          </h3>
          <span className="text-sm text-gray-600">ETA: 1h 30m</span>
        </div>
        <Progress value={33} className="mb-2" />
        <p className="text-sm text-gray-600">
          Security team is working on resolving the issue
        </p>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-2 flex items-center">
          <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
          Important Notice
        </h3>
        <p className="text-sm text-gray-700">
          If you notice any suspicious activity, please contact the IT Security
          Team immediately at{" "}
          <span className="font-semibold">security@university.edu</span> or ext.
          5555.
        </p>
      </div>
    </div>
  );
};

export default SecurityAlertUI;
