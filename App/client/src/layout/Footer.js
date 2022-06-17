import { ReactComponent as YourSvg } from "../img/svg/LogoFull.svg";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:flex md:items-center sm:place-content-center lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <YourSvg className="w-40" />
        </div>
      </div>
    </footer>
  );
}
