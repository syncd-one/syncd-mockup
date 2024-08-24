import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const StanfordResearchOG: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src="/api/placeholder/32/32" alt="Prof. Lisa Wong" />
            <AvatarFallback>LW</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Prof. Lisa Wong</h2>
            <p className="text-sm text-gray-600">lwong@stanford.edu</p>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          Collaborative Research Opportunity with Stanford
        </h1>
        <p className="text-sm text-gray-500">To: Professor John McCarthy</p>
      </div>
      <div className="p-4">
        <p className="mb-4">Dear Professor McCarthy,</p>

        <p className="mb-4">
          I hope this email finds you well. I&apos;m reaching out to explore a
          potential collaborative research opportunity between our institutions
          in the field of Artificial Intelligence and its applications in
          healthcare.
        </p>

        <p className="mb-4">
          Our team at Stanford has been working on developing AI models for
          early detection of neurodegenerative diseases, and we&apos;ve made
          some exciting progress. However, we believe that combining our
          expertise with your groundbreaking work in AI ethics and bias
          mitigation could lead to a more robust and ethically sound system.
        </p>

        <p className="mb-4">
          Here&apos;s a brief overview of what we envision for this
          collaboration:
        </p>

        <ul className="list-disc pl-5 mb-4">
          <li>Joint development of AI models for disease detection</li>
          <li>
            Integration of ethical considerations and bias mitigation techniques
          </li>
          <li>
            Clinical trials in partnership with both Stanford and UVA Medical
            Centers
          </li>
          <li>Co-authored publications and joint grant applications</li>
        </ul>

        <p className="mb-4">
          We&apos;re particularly interested in your recent work on ensuring
          fairness in medical AI systems across diverse populations. We believe
          this could be crucial in developing a system that&apos;s not only
          accurate but also equitable.
        </p>

        <p className="mb-4">
          If you&apos;re interested, I&apos;d love to set up a video call to
          discuss this further. We&apos;re also planning a workshop next month
          where we&apos;ll be presenting our current findings. It would be
          wonderful if you could attend and perhaps give a talk on ethical
          considerations in medical AI.
        </p>

        <p className="mb-4">
          Please let me know your thoughts on this potential collaboration and
          if you&apos;d be available for a call next week. I&apos;m excited
          about the possibilities this partnership could bring to both our
          institutions and, more importantly, to the field of medical AI.
        </p>

        <p className="mb-4">Looking forward to hearing from you.</p>

        <p>Best regards,</p>
        <p>Prof. Lisa Wong</p>
        <p>Department of Computer Science</p>
        <p>Stanford University</p>
      </div>
    </div>
  );
};

export default StanfordResearchOG;
