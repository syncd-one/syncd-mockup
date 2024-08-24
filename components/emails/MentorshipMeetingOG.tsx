import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const MentorshipMeetingOG: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src="/api/placeholder/32/32" alt="Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Sarah Johnson</h2>
            <p className="text-sm text-gray-600">sj9xk@virginia.edu</p>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          Mentorship Meeting Request - PhD Candidate
        </h1>
        <p className="text-sm text-gray-500">To: Professor John McCarthy</p>
      </div>
      <div className="p-4">
        <p className="mb-4">Dear Professor McCarthy,</p>

        <p className="mb-4">
          I hope this email finds you well. My name is Sarah Johnson, and
          I&apos;m a second-year PhD candidate in the Computer Science
          department at the University of Virginia. I&apos;m reaching out to
          request a mentorship meeting with you to discuss my research direction
          and seek your guidance on some challenges I&apos;m facing in my work
          on AI ethics and bias in machine learning models.
        </p>

        <p className="mb-4">
          I&apos;ve been following your groundbreaking work in this field,
          particularly your recent publication on mitigating algorithmic bias in
          healthcare applications. Your insights have been instrumental in
          shaping my research questions, and I believe your mentorship would be
          invaluable as I progress in my doctoral studies.
        </p>

        <p className="mb-4">Specifically, I would like to discuss:</p>

        <ul className="list-disc pl-5 mb-4">
          <li>
            Your perspective on the most pressing challenges in AI ethics today
          </li>
          <li>
            Potential methodologies for quantifying and mitigating bias in large
            language models
          </li>
          <li>
            Advice on structuring my research to make meaningful contributions
            to the field
          </li>
          <li>
            Opportunities for collaboration or involvement in ongoing projects
            in your lab
          </li>
        </ul>

        <p className="mb-4">
          I understand that your schedule is likely very busy, but I would be
          incredibly grateful for the opportunity to meet with you for 30
          minutes at your convenience. I&apos;m generally available on Monday
          and Wednesday afternoons, but I&apos;m happy to accommodate your
          schedule.
        </p>

        <p className="mb-4">
          Thank you for considering my request. I look forward to the
          possibility of learning from your expertise and insights.
        </p>

        <p>Sincerely,</p>
        <p>Sarah Johnson</p>
        <p>PhD Candidate, Computer Science</p>
        <p>University of Virginia</p>
      </div>
    </div>
  );
};

export default MentorshipMeetingOG;
