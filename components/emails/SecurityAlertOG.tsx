import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SecurityAlertOG = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="/api/placeholder/40/40" alt="IT Security Team" />
          <AvatarFallback>IT</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">IT Security Team</h3>
          <p className="text-sm text-gray-500">security@university.edu</p>
        </div>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold">
        Urgent: Security Vulnerability in Campus Network
      </h2>
      <p className="text-sm text-gray-500">To: all-staff@university.edu</p>
    </div>
    <div className="prose max-w-none">
      <p>Dear University Staff,</p>
      <p>
        We have identified a critical security vulnerability affecting our
        campus network. Immediate action is required to mitigate potential
        risks.
      </p>
      <p>Affected Systems:</p>
      <ul>
        <li>Student Portal</li>
        <li>Faculty Email</li>
        <li>Library Database</li>
      </ul>
      <p>Required Actions:</p>
      <ol>
        <li>Change your password immediately on all university accounts.</li>
        <li>
          Do not click on any suspicious links or download unexpected
          attachments.
        </li>
        <li>
          Report any unusual activity to the IT Security Team immediately.
        </li>
      </ol>
      <p>
        Our team is working diligently to patch this vulnerability. We will
        provide updates as they become available.
      </p>
      <p>
        If you have any questions or concerns, please contact the IT Help Desk
        at ext. 5555 or helpdesk@university.edu.
      </p>
      <p>
        Thank you for your cooperation in maintaining the security of our
        network.
      </p>
      <p>
        Best regards,
        <br />
        IT Security Team
      </p>
    </div>
  </div>
);

export default SecurityAlertOG;
