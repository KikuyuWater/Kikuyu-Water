import technicalPortrait from "./assets/department-heads/Paul Gichuki, Technical manager.jpg";
import commercialPortrait from "./assets/department-heads/Mary Mbugua, Commercial Manager.jpg";
import financePortrait from "./assets/department-heads/David Kimani, Finance Manager.jpg";
import procurementPortrait from "./assets/department-heads/Stephen Nderi, Procurement Officer.jpg";
import auditPortrait from "./assets/department-heads/Jenifer Chebet, Internal Auditor.jpg";

const Departments = [
  {
    id: "technical",
    title: "Technical Department",
    description:
      "Responsible for water supply infrastructure, maintenance, repairs, and ensuring reliable service delivery to all customers.",
    theme: {
      color: "primary",
      border: "border-primary",
      iconBg: "bg-primary/10",
      iconHoverBg: "bg-primary",
    },
    icon: "fa-wrench",
    photo: technicalPortrait,
    features: [
      "Water distribution network",
      "Infrastructure maintenance",
      "Emergency repairs",
      "Quality assurance",
    ],
    head: "Paul Gichuki",
  },
  {
    id: "commercial",
    title: "Commercial Department",
    description:
      "Manages customer relations, billing, collections, new connections, and ensures excellent customer service experience.",
    theme: {
      color: "green-500",
      border: "border-green-500",
      iconBg: "bg-green-500/10",
      iconHoverBg: "bg-green-500",
    },
    icon: "fa-briefcase",
    photo: commercialPortrait,
    features: [
      "Customer service",
      "Billing & collections",
      "New connections",
      "Meter reading",
    ],
    head: "Mary Mbugua",
  },
  {
    id: "finance",
    title: "Finance Department",
    description:
      "Oversees financial planning, budgeting, accounting, financial reporting, and ensures fiscal responsibility and transparency.",
    theme: {
      color: "purple-500",
      border: "border-purple-500",
      iconBg: "bg-purple-500/10",
      iconHoverBg: "bg-purple-500",
    },
    icon: "fa-chart-line",
    photo: financePortrait,
    features: [
      "Financial planning",
      "Budget management",
      "Accounting & reporting",
      "Revenue management",
    ],
    head: "David Kimani",
  },
  {
    id: "procurement",
    title: "Procurement Department",
    description:
      "Manages procurement processes, supplier relations, contract management, and ensures value for money in all purchases.",
    theme: {
      color: "orange-500",
      border: "border-orange-500",
      iconBg: "bg-orange-500/10",
      iconHoverBg: "bg-orange-500",
    },
    icon: "fa-shopping-cart",
    photo: procurementPortrait,
    features: [
      "Tender management",
      "Supplier relations",
      "Contract management",
      "Inventory control",
    ],
    head: "Stephen Nderi",
  },
  {
    id: "hr",
    title: "Human Resource",
    description:
      "Handles recruitment, employee welfare, training, performance management, and fostering a positive work environment.",
    theme: {
      color: "blue-500",
      border: "border-blue-500",
      iconBg: "bg-blue-500/10",
      iconHoverBg: "bg-blue-500",
    },
    icon: "fa-users",
    features: [
      "Recruitment & staffing",
      "Training & development",
      "Employee welfare",
      "Performance management",
    ],
    head: "Florence Wanjohi",
  },

  {
    id: "nrw",
    title: "Non-Revenue Water",
    description:
      "Focuses on reducing water losses, leak detection, meter accuracy, and improving operational efficiency across the network.",
    theme: {
      color: "red-500",
      border: "border-red-500",
      iconBg: "bg-red-500/10",
      iconHoverBg: "bg-red-500",
    },
    icon: "fa-tint-slash",
    features: [
      "Leak detection",
      "Water loss management",
      "Meter management",
      "Network optimization",
    ],
    head: "Stephen Mwaniki",
  },
  {
    id: "audit",
    title: "Internal Audit",
    description:
      "Ensures compliance, risk management, internal controls, and provides independent assurance on governance and operations.",
    theme: {
      color: "indigo-500",
      border: "border-indigo-500",
      iconBg: "bg-indigo-500/10",
      iconHoverBg: "bg-indigo-500",
    },
    icon: "fa-shield-halved",
    photo: auditPortrait,
    features: [
      "Compliance monitoring",
      "Risk assessment",
      "Internal controls",
      "Audit reporting",
    ],
    head: "Jenifer Chebet",
  },
];

export { Departments };
