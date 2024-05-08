
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

export const receptionist_links = [
  {
    title: "Overview",
    path: "/receptionist/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Patients",
    path: "/receptionist/patients",
    icon: PersonIcon,
  },
  {
    title: "Appointments",
    path: "/receptionist/appointments",
    icon: EditCalendarIcon,
  },
  {
    title: "Profile",
    path: "/receptionist/profile",
    icon: "",
    hidden:true
  }
];

export const admin_links = [
  {
    title: "Admin",
    path: "/admin",
    icon: DashboardIcon,
  },
  {
    title: "Admin Recepionists",
    path: "/adminreceptionists",
    icon: PersonIcon,
  },
  {
    title: "Profile",
    path: "/admin/profile",
    icon: "",
    hidden:true
  }
];

export const doctor_links = [
  {
    title: "Doctor Dashboard",
    path: "/doctor",
    icon: DashboardIcon,
  },
  {
    title: "Patient",
    path: "/patient",
    icon: "",
    hidden:true
  },
  {
    title: "Profile",
    path: "/doctor/profile",
    icon: "",
    hidden:true
  }
];


export const links_mapping = [
    { type: "receptionist", links: receptionist_links },
    { type: "admin", links: admin_links },
    { type: "doctor", links: doctor_links },
  ];