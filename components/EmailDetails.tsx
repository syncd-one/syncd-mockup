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

const EmailDetail = ({ email }: { email: any }) => {
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

  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto">
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
        <TabsContent value="custom">{renderCustomInterface()}</TabsContent>
        <TabsContent value="original">{renderOriginalEmail()}</TabsContent>
      </Tabs>
    </div>
  );
};

export default EmailDetail;
