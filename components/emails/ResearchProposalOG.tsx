import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ResearchProposalOG = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/api/placeholder/40/40" alt="Dr. Emily Smith" />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Dr. Emily Smith</h3>
          <p className="text-sm text-gray-500">dr.smith@university.edu</p>
        </div>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold">
        Request for Approval: Research Proposal
      </h2>
      <p className="text-sm text-gray-500">To: you@university.edu</p>
    </div>
    <div className="prose max-w-none">
      <p>Dear Colleague,</p>
      <p>
        I am writing to seek your approval for a research proposal on the impact
        of climate change on urban agriculture.
      </p>
      <p>Key details:</p>
      <ul>
        <li>Focus: Effects of climate change on urban farming crop yields</li>
        <li>
          Methodology: Field studies and data analysis from 10 major cities
        </li>
        <li>Timeline: 6 months for data collection, 3 months for analysis</li>
        <li>Budget: $25,000 for equipment and research assistant stipends</li>
      </ul>
      <p>
        I've attached a detailed proposal document for your review. Your
        approval is needed to proceed with the data collection phase.
      </p>
      <p>Thank you for your consideration.</p>
      <p>
        Best regards,
        <br />
        Dr. Emily Smith
      </p>
    </div>
  </div>
);

export default ResearchProposalOG;
