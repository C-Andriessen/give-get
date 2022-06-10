import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

import imgLogoFull from "../img/svg/LogoFull.svg";

export default function Header() {
  return (
    <header className="h-[55px] sm:h-[75px] lg:h-[95px] flex items-center justify-between mx-5">
      <img src={imgLogoFull} alt="Logo" className="h-[40px] sm:h-[60px]" />
      <MobileMenu classes="lg:hidden" />
      <DesktopMenu classes="hidden uppercase font-bold text-xl text-black lg:block lg:flex lg:space-x-7 3xl:space-x-[90px]" />
    </header>
  );
}
