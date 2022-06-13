import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import imgLogoFull from "../img/svg/LogoFull.svg";

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  InformationCircleIcon,
  AnnotationIcon,
  ShoppingBagIcon,
  ChatIcon,
} from "@heroicons/react/outline";

const nav = [
  { name: "Info", href: "#", icon: InformationCircleIcon },
  { name: "Actueel", href: "#", icon: AnnotationIcon },
  { name: "Producten", href: "#", icon: ShoppingBagIcon },
  { name: "Contact", href: "#", icon: ChatIcon },
];

export default function Header() {
  return (
    <header className="h-[55px] sm:h-[75px] lg:h-[95px] flex items-center justify-between mx-5 sm:mx-20">
      <img src={imgLogoFull} alt="Logo" className="h-[40px] sm:h-[60px]" />
      <MobileMenu navigation={nav} classes="lg:hidden" />
      <DesktopMenu
        navigation={nav}
        classes="hidden uppercase font-bold text-xl text-black lg:block lg:flex lg:space-x-7 3xl:space-x-[90px]"
      />
    </header>
  );
}
