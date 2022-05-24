import MobileMenu from "./MobileMenu";

import imgLogoFull from "../img/svg/LogoFull.svg";

export default function Header() {
  return (
    <header className="h-[55px] flex items-center justify-between mx-5">
      <img src={imgLogoFull} alt="Logo" className="h-[40px]" />
      <MobileMenu />
    </header>
  );
}
