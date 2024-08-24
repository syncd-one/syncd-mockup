import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const DeptBudgetMeetingOG: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src="/api/placeholder/32/32" alt="Dr. Robert Taylor" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">
              Dr. Robert Taylor, Department Chair
            </h2>
            <p className="text-sm text-gray-600">rt3b@virginia.edu</p>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          Department Budget Meeting - Agenda
        </h1>
        <p className="text-sm text-gray-500">To: All Faculty Members</p>
      </div>
      <div className="p-4">
        <p className="mb-4">Dear Colleagues,</p>

        <p className="mb-4">
          I hope this email finds you well. Our annual Department Budget Meeting
          is scheduled for next week, and I wanted to share the agenda with you
          in advance. Please review the items below and come prepared with any
          questions or concerns you may have.
        </p>

        <h3 className="font-bold mb-2">Meeting Details:</h3>
        <p className="mb-4">
          Date: Tuesday, September 5, 2024
          <br />
          Time: 2:00 PM - 4:00 PM
          <br />
          Location: Department Conference Room (Room 301)
        </p>

        <h3 className="font-bold mb-2">Agenda:</h3>
        <ol className="list-decimal pl-5 mb-4">
          <li>Welcome and Introduction (5 minutes)</li>
          <li>
            Review of Last Year&apos;s Budget Performance (20 minutes)
            <ul className="list-disc pl-5">
              <li>Expenditure breakdown</li>
              <li>Comparison with projections</li>
            </ul>
          </li>
          <li>
            Presentation of Next Year&apos;s Budget Proposal (30 minutes)
            <ul className="list-disc pl-5">
              <li>Overview of expected funding</li>
              <li>Proposed allocation by category</li>
            </ul>
          </li>
          <li>Discussion of Research Fund Allocation (25 minutes)</li>
          <li>Equipment and Technology Upgrades (20 minutes)</li>
          <li>Faculty Development and Conference Travel Budget (15 minutes)</li>
          <li>Open Floor for Questions and Concerns (30 minutes)</li>
          <li>Next Steps and Action Items (5 minutes)</li>
        </ol>

        <p className="mb-4">
          Please note that we will be distributing a detailed budget report at
          the start of the meeting. If you have any specific items you would
          like to discuss that are not covered in the agenda, please email me by
          Friday, September 1st, so we can consider adding them to the
          discussion.
        </p>

        <p className="mb-4">
          Your input is crucial in ensuring that our departmental resources are
          allocated effectively to support our teaching, research, and community
          engagement initiatives. I look forward to a productive meeting and
          your valuable contributions.
        </p>

        <p className="mb-4">Best regards,</p>
        <p>Dr. Robert Taylor</p>
        <p>Department Chair</p>
        <p>Computer Science Department</p>
        <p>University of Virginia</p>
      </div>
    </div>
  );
};

export default DeptBudgetMeetingOG;
