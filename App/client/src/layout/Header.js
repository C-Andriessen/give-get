import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import imgLogoFull from "../img/svg/LogoFull.svg";

import {
  InformationCircleIcon,
  AnnotationIcon,
  ShoppingBagIcon,
  ChatIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const nav = [
  { name: "Info", href: "#", icon: InformationCircleIcon },
  { name: "Actueel", href: "#", icon: AnnotationIcon },
  { name: "Producten", href: "#", icon: ShoppingBagIcon },
  { name: "Contact", href: "#", icon: ChatIcon },
  { name: "Login", href: "/login", icon: UserIcon },
];

export default function Header() {
  return (
    <header className="h-[55px] sm:h-[75px] lg:h-[95px] flex items-center justify-between mx-5 sm:mx-20">
      <Link to="/">
        <img src={imgLogoFull} alt="Logo" className="h-[40px] sm:h-[60px]" />
      </Link>
      <MobileMenu navigation={nav} classes="lg:hidden" />
      <DesktopMenu
        navigation={nav}
        classes="hidden uppercase font-bold text-xl text-black lg:block lg:flex lg:space-x-7 3xl:space-x-[90px]"
      />
    </header>
  );
}
