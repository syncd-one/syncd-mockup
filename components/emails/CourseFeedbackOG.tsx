import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CourseFeedbackOG = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage
            src="/api/placeholder/40/40"
            alt="Student Experience Team"
          />
          <AvatarFallback>SE</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Student Experience Team</h3>
          <p className="text-sm text-gray-500">feedback@university.edu</p>
        </div>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold">Interactive Course Feedback Results</h2>
      <p className="text-sm text-gray-500">To: faculty@university.edu</p>
    </div>
    <div className="prose max-w-none">
      <p>Dear Faculty Members,</p>
      <p>
        We are pleased to share the results of our recent course feedback survey
        for the Spring 2023 semester. The feedback provided by our students is
        invaluable in our ongoing efforts to enhance the quality of education at
        our university.
      </p>
      <p>Key Highlights:</p>
      <ul>
        <li>Overall satisfaction rate: 87%</li>
        <li>Highest rated aspect: Quality of teaching (4.5/5)</li>
        <li>Area for improvement: Timely feedback on assignments (3.8/5)</li>
        <li>Student participation rate: 76%</li>
      </ul>
      <p>
        We&apos;ve prepared an interactive dashboard where you can explore the
        feedback in more detail. This includes course-specific breakdowns, trend
        analysis, and student comments.
      </p>
      <p>
        To access the dashboard, please click on the &ldquo;View Interactive
        Results&ldquo; button in your email client. If you&apos;re viewing this
        in a standard email client, you can access the results at:
        https://university.edu/feedback-results
      </p>
      <p>
        We encourage you to review these results and consider how they might
        inform your teaching practices. The Student Experience Team is available
        to discuss the feedback and provide support in implementing any changes
        you deem necessary.
      </p>
      <p>
        Thank you for your continued commitment to providing an excellent
        educational experience for our students.
      </p>
      <p>
        Best regards,
        <br />
        The Student Experience Team
      </p>
    </div>
  </div>
);

export default CourseFeedbackOG;
