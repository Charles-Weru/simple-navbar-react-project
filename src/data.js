import { FaHome, FaCamera } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiMessageCircle } from "react-icons/fi";

const data = [
  {
    title: "Home",
    icon: <FaHome />,
    position: 0,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    position: 70,
  },
  {
    title: "Message",
    icon: <FiMessageCircle />,
    position: 140,
  },
  {
    title: "Photos",
    icon: <FaCamera />,
    position: 210,
  },
  {
    title: "Settings",
    icon: <CiSettings />,
    position: 280,
  },
];
export default data;
