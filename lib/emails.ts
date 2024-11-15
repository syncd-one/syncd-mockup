export interface Email {
  id: number;
  subject: string;
  sender: string;
  email: string;
  avatar: string;
  unread: boolean;
  selected?: boolean;
  type: string;
  view: string[];
}

export const viewCodes = {
  Courses: "course",
  "Active Research": "research",
  "Student Mentorship": "mentorship",
  "Department Matters": "dept",
  "Media and Outreach": "outreach",
};

export const allEmails: Email[] = [
  {
    id: 1,
    subject: "Request for Approval: Research Proposal",
    sender: "Dr. Emily Smith",
    email: "dr.smith@university.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    selected: true,
    type: "research",
    view: ["research"],
  },
  {
    id: 2,
    subject: "Urgent: Security Vulnerability in Campus Network",
    sender: "IT Security Team",
    email: "security@university.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    type: "security",
    view: ["dept"],
  },
  {
    id: 3,
    subject: "Course Feedback Results",
    sender: "Student Experience Team",
    email: "feedback@university.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    type: "feedback",
    view: ["course"],
  },
  {
    id: 4,
    subject: "Campus Sustainability Challenge: Real-time Update",
    sender: "Green Campus Initiative",
    email: "sustainability@university.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    type: "sustainability",
    view: ["dept", "media"],
  },
  {
    id: 5,
    subject: "Virtual Lab Experiment: Quantum Entanglement Simulation",
    sender: "Department of Physics",
    email: "physics.lab@university.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    type: "virtual_lab",
    view: ["research", "student"],
  },
  {
    id: 6,
    subject: "Mentorship Meeting Request - PhD Candidate",
    sender: "Sarah Johnson",
    email: "sj9xk@virginia.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    selected: false,
    type: "meeting_request",
    view: ["mentorship"],
  },
  {
    id: 7,
    subject: "Department Budget Meeting - Agenda",
    sender: "Dr. Robert Taylor, Department Chair",
    email: "rt3b@virginia.edu",
    avatar: "/api/placeholder/32/32",
    unread: false,
    selected: false,
    type: "dept_budget_meeting",
    view: ["dept"],
  },
  {
    id: 8,
    subject: "Invitation: Panel Discussion on AI in Healthcare",
    sender: "UVA Media Relations",
    email: "media@virginia.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    selected: false,
    type: "panel_discussion",
    view: ["outreach"],
  },
  {
    id: 9,
    subject: "Collaborative Research Opportunity with Stanford",
    sender: "Prof. Lisa Wong",
    email: "lwong@stanford.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    selected: false,
    type: "stanford_research",
    view: ["research", "outreach"],
  },
  {
    id: 10,
    subject: "CS 2102 Midterm Grading Committee",
    sender: "Academic Affairs",
    email: "academics@virginia.edu",
    avatar: "/api/placeholder/32/32",
    unread: false,
    selected: false,
    type: "grading_committee",
    view: ["course"],
  },
  {
    id: 11,
    subject: "Undergraduate Research Assistant Application",
    sender: "Alex Patel",
    email: "ap7yz@virginia.edu",
    avatar: "/api/placeholder/32/32",
    unread: true,
    selected: false,
    type: "research_assistant_app",
    view: ["mentorship", "research"],
  },
];
