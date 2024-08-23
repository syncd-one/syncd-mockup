import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const GradingCommitteeOG: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src="/api/placeholder/32/32" alt="Academic Affairs" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Academic Affairs</h2>
            <p className="text-sm text-gray-600">academics@virginia.edu</p>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          CS 2102 Midterm Grading Committee
        </h1>
        <p className="text-sm text-gray-500">To: Professor John McCarthy</p>
      </div>
      <div className="p-4">
        <p className="mb-4">Dear Professor McCarthy,</p>

        <p className="mb-4">
          I hope this email finds you well. As we approach the midterm period
          for CS 2102, we are forming the grading committee for the midterm
          examination. Given your expertise in the subject matter, we would like
          to invite you to be a part of this committee.
        </p>

        <p className="mb-4">
          The responsibilities of the grading committee include:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Reviewing and finalizing the midterm exam questions</li>
          <li>Establishing a comprehensive grading rubric</li>
          <li>Overseeing the grading process to ensure consistency</li>
          <li>
            Addressing any grading disputes or concerns raised by students
          </li>
        </ul>

        <p className="mb-4">
          The tentative schedule for the grading committee is as follows:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Exam Review Meeting: October 10th, 2:00 PM - 4:00 PM</li>
          <li>Grading Rubric Finalization: October 12th, 1:00 PM - 3:00 PM</li>
          <li>Grading Period: October 15th - October 20th</li>
          <li>
            Grading Review and Dispute Resolution: October 22nd - October 24th
          </li>
        </ul>

        <p className="mb-4">
          Your participation in this committee is crucial for maintaining the
          high academic standards of our department. Please confirm your
          availability and willingness to serve on this committee by responding
          to this email by the end of this week.
        </p>

        <p className="mb-4">
          If you have any questions or concerns, please don't hesitate to reach
          out.
        </p>

        <p className="mb-4">
          Thank you for your continued dedication to our students' education.
        </p>

        <p>Best regards,</p>
        <p>Dr. Emily Carter</p>
        <p>Director of Academic Affairs</p>
        <p>University of Virginia</p>
      </div>
    </div>
  );
};

export default GradingCommitteeOG;
