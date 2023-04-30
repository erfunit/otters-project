import { BiHomeAlt2 } from "react-icons/bi";
import { IoMdPaper } from "react-icons/io";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { TbRoute } from "react-icons/tb";

export const navbarItems = [
  {
    id: 111,
    text: "خانه",
    icon: BiHomeAlt2,
    route: "/",
  },
  {
    id: 112,
    text: "تمارین",
    icon: IoMdPaper,
    route: "/trains",
  },
  {
    id: 113,
    text: "مسیرهای یادگیری",
    icon: TbRoute,
    route: "/roadmaps",
  },
  {
    id: 114,
    text: "تماس با ما",
    icon: HiOutlineChatBubbleOvalLeft,
    route: "/contact-us",
  },
];
