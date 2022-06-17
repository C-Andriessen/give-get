import imgPuzzle from "../img/svg/Puzzle.svg";
import imgLogoFull from "../img/svg/LogoFull.svg";
import { ReactComponent as YourSvg } from "../img/svg/LogoFull.svg";

export default function HomeHero() {
  return (
    <main>
      <div>
        <div className="relative">
          <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div className="relative sm:overflow-hidden">
              <img
                className="w-full object-cover"
                src={imgPuzzle}
                alt="Give and Get"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
