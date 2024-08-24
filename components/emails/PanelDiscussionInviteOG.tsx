import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const PanelDiscussionInviteOG: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage
              src="/api/placeholder/32/32"
              alt="UVA Media Relations"
            />
            <AvatarFallback>UMR</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">UVA Media Relations</h2>
            <p className="text-sm text-gray-600">media@virginia.edu</p>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          Invitation: Panel Discussion on AI in Healthcare
        </h1>
        <p className="text-sm text-gray-500">To: Professor John McCarthy</p>
      </div>
      <div className="p-4">
        <p className="mb-4">Dear Professor McCarthy,</p>

        <p className="mb-4">
          On behalf of the University of Virginia Media Relations Department, I
          am pleased to invite you to participate as a panelist in our upcoming
          discussion on &ldquo;The Role of AI in Shaping the Future of
          Healthcare.&ldquo; Your expertise in AI ethics and recent work on bias
          mitigation in healthcare AI systems makes you an ideal contributor to
          this timely and important conversation.
        </p>

        <p className="mb-4">Event Details:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Date: Thursday, September 15, 2024</li>
          <li>Time: 2:00 PM - 4:00 PM EDT</li>
          <li>Location: Rotunda Dome Room, University of Virginia</li>
          <li>Format: Panel discussion followed by Q&A session</li>
        </ul>

        <p className="mb-4">
          The panel will explore various aspects of AI in healthcare, including:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Current applications of AI in medical diagnosis and treatment</li>
          <li>
            Ethical considerations and challenges in implementing AI in
            healthcare systems
          </li>
          <li>The future of AI-driven personalized medicine</li>
          <li>Ensuring equity and avoiding bias in healthcare AI</li>
        </ul>

        <p className="mb-4">Other invited panelists include:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Dr. Sarah Chen, Chief of AI Research at UVA Health</li>
          <li>Prof. Michael Dawson, Department of Biomedical Engineering</li>
          <li>
            Dr. Alicia Thompson, Director of Ethics at the National Institute of
            Health
          </li>
        </ul>

        <p className="mb-4">
          The event will be open to the university community and will also be
          live-streamed for the general public. We anticipate significant media
          coverage, offering an excellent opportunity to showcase UVA&apos;s
          leadership in this critical field.
        </p>

        <p className="mb-4">
          If you accept this invitation, our team will provide you with more
          detailed information, including potential discussion topics and
          logistical details. We would also be happy to work with you on any
          specific points or research you&apos;d like to highlight during the
          panel.
        </p>

        <p className="mb-4">
          Please let us know if you can participate by responding to this email
          or contacting our event coordinator, James Wilson, at
          jwilson@virginia.edu or (434) 924-1234.
        </p>

        <p className="mb-4">
          We sincerely hope you can join us for this exciting event. Your
          insights would be invaluable to the discussion and greatly appreciated
          by our audience.
        </p>

        <p>Best regards,</p>
        <p>Emma Roberts</p>
        <p>Director of Media Relations</p>
        <p>University of Virginia</p>
      </div>
    </div>
  );
};

export default PanelDiscussionInviteOG;
