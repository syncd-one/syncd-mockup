import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ResearchAssistantAppOG: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src="/api/placeholder/32/32" alt="Alex Patel" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Alex Patel</h2>
            <p className="text-sm text-gray-600">ap7yz@virginia.edu</p>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">
          Undergraduate Research Assistant Application
        </h1>
        <p className="text-sm text-gray-500">To: Professor John McCarthy</p>
      </div>
      <div className="p-4">
        <p className="mb-4">Dear Professor McCarthy,</p>

        <p className="mb-4">
          I hope this email finds you well. My name is Alex Patel, and I am a
          third-year Computer Science major at the University of Virginia. I am
          writing to express my strong interest in the Undergraduate Research
          Assistant position in your AI Ethics lab.
        </p>

        <p className="mb-4">
          I have been following your work on ethical considerations in AI
          systems with great interest, and I am particularly fascinated by your
          recent publication on mitigating bias in machine learning models for
          healthcare applications. The intersection of AI and ethics is an area
          I'm deeply passionate about, and I believe working in your lab would
          be an invaluable opportunity to contribute to this critical field.
        </p>

        <p className="mb-4">Here are a few highlights of my qualifications:</p>

        <ul className="list-disc pl-5 mb-4">
          <li>
            Completed coursework in Machine Learning, Data Structures, and
            Ethics in Computer Science
          </li>
          <li>Proficient in Python, TensorFlow, and scikit-learn</li>
          <li>
            Conducted a small-scale research project on gender bias in natural
            language processing models
          </li>
          <li>
            Participated in the UVA Hackathon, where our team developed an
            AI-driven app to promote sustainable practices on campus
          </li>
        </ul>

        <p className="mb-4">
          I am eager to apply my skills and learn from you and your team. I am
          available to start immediately and can commit 15-20 hours per week to
          this position.
        </p>

        <p className="mb-4">
          Attached to this email, you will find my resume, transcript, and a
          brief writing sample on the ethical implications of AI in autonomous
          vehicles.
        </p>

        <p className="mb-4">
          Thank you for considering my application. I look forward to the
          possibility of discussing how I can contribute to your research team.
        </p>

        <p>Sincerely,</p>
        <p>Alex Patel</p>
        <p>Bachelor of Science in Computer Science, Class of 2025</p>
        <p>University of Virginia</p>
      </div>
    </div>
  );
};

export default ResearchAssistantAppOG;
