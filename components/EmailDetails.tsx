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

const EmailDetail = ({ email }: { email: any }) => {
  const [selectedTab, setSelectedTab] = useState("custom");

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
            <TabsTrigger value="custom">Custom Interface</TabsTrigger>
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
