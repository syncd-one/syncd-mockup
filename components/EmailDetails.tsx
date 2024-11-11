import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResearchProposalUI from "./emails/ResearchProposalUI";
import ResearchProposalOG from "./emails/ResearchProposalOG";
import SecurityAlertOG from "./emails/SecurityAlertOG";
import SecurityAlertUI from "./emails/SecurityAlertUI";
import CourseFeedbackOG from "./emails/CourseFeedbackOG";
import CourseFeedbackUI from "./emails/CourseFeedbackUI";
import SustainabilityChallengeOG from "./emails/SustainabilityChallengeOG";
import SustainabilityChallengeUI from "./emails/SustainabilityChallengeUI";
import VirtualLabUI from "./emails/VirtualLabUI";
import VirtualLabOG from "./emails/VirtualLabOG";
import GradingCommitteeOG from "./emails/GradingCommitteeOG";
import GradingCommitteeUI from "./emails/GradingCommitteeUI";
import StanfordResearchOG from "./emails/StanfordResearchOG";
import StanfordResearchUI from "./emails/StanfordResearchUI";
import ResearchAssistantAppUI from "./emails/ResearchAssistantAppUI";
import ResearchAssistantAppOG from "./emails/ResearchAssistantAppOG";
import MentorshipMeetingOG from "./emails/MentorshipMeetingOG";
import MentorshipMeetingUI from "./emails/MentorshipMeetingUI";
import DeptBudgetMeetingOG from "./emails/DeptBudgetMeetingOG";
import DeptBudgetMeetingUI from "./emails/DeptBudgetMeetingUI";
import PanelDiscussionInviteOG from "./emails/PanelDiscussionInviteOG";
import PanelDiscussionInviteUI from "./emails/PanelDiscussionInviteUI";
import { Command } from "lucide-react";

const EmailDetail = ({ email, onNextEmail }: { email: any; onNextEmail: () => void }) => {
  const [selectedTab, setSelectedTab] = useState("original");

  const renderCustomInterface = () => {
    switch (email.type) {
      case "research":
        return <ResearchProposalUI />;
      case "security":
        return <SecurityAlertUI />;
      case "feedback":
        return <CourseFeedbackUI />;
      case "sustainability":
        return <SustainabilityChallengeUI />;
      case "virtual_lab":
        return <VirtualLabUI />;
      case "grading_committee":
        return <GradingCommitteeUI />;
      case "stanford_research":
        return <StanfordResearchUI />;
      case "research_assistant_app":
        return <ResearchAssistantAppUI />;
      case "meeting_request":
        return <MentorshipMeetingUI />;
      case "dept_budget_meeting":
        return <DeptBudgetMeetingUI />;
      case "panel_discussion":
        return <PanelDiscussionInviteUI />;
      default:
        return <p>Something Went Wrong.</p>;
    }
  };

  const renderOriginalEmail = () => {
    switch (email.type) {
      case "research":
        return <ResearchProposalOG />;
      case "security":
        return <SecurityAlertOG />;
      case "feedback":
        return <CourseFeedbackOG />;
      case "sustainability":
        return <SustainabilityChallengeOG />;
      case "virtual_lab":
        return <VirtualLabOG />;
      case "grading_committee":
        return <GradingCommitteeOG />;
      case "stanford_research":
        return <StanfordResearchOG />;
      case "research_assistant_app":
        return <ResearchAssistantAppOG />;
      case "meeting_request":
        return <MentorshipMeetingOG />;
      case "dept_budget_meeting":
        return <DeptBudgetMeetingOG />;
      case "panel_discussion":
        return <PanelDiscussionInviteOG />;
      default:
        return <p>Something Went Wrong.</p>;
    }
  };

  const getEmailActions = () => {
    switch (email.type) {
      case "research":
        return [
          "Forward to research team",
          "Star for follow-up",
          "Move to Research folder"
        ];
      case "security":
        return [
          "Mark as important",
          "Move to Security folder"
        ];
      case "feedback":
        return [
          "Forward to TAs",
          "Move to Course folder",
          "Star for review"
        ];
      case "sustainability":
        return [
          "Add to calendar",
          "Star for follow-up"
        ];
      case "virtual_lab":
        return [
          "Forward to TAs",
          "Star message",
          "Move to Labs folder"
        ];
      case "grading_committee":
        return [
          "Add to calendar",
          "Star for follow-up"
        ];
      case "stanford_research":
        return [
          "Forward to department",
          "Star message",
          "Move to Collaborations folder"
        ];
      case "research_assistant_app":
        return [
          "Move to Applications folder",
          "Star for review",
          "Forward to committee"
        ];
      case "meeting_request":
        return [
          "Add to calendar",
          "Snooze until tomorrow"
        ];
      case "dept_budget_meeting":
        return [
          "Add to calendar",
          "Star for preparation",
          "Move to Department folder"
        ];
      case "panel_discussion":
        return [
          "Add to calendar",
          "Forward to assistant",
          "Star for follow-up"
        ];
      default:
        return ["Archive", "Mark as read", "Star message"];
    }
  };

  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto relative">
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="custom">Generated Page</TabsTrigger>
            <TabsTrigger value="original">Original Email</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="custom">
          <div className="flex flex-col h-full">
            {renderCustomInterface()}
            
            {/* Action Toolbar */}
            <div className="sticky bottom-0 left-0 right-0 bg-gray-50 border-t p-4 mt-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">Suggested Actions</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Command className="h-4 w-4 mr-1" />
                  <span>+ Enter to accept</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {getEmailActions().map((action, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="original">{renderOriginalEmail()}</TabsContent>
      </Tabs>
    </div>
  );
};

export default EmailDetail;
