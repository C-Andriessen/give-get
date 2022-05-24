import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

import Feed from "./feed";
import ButtonPrimary from "./common/ButtonPrimary";

import imgLogoFull from "./img/svg/LogoFull.svg";
import imgPuzzle from "./img/svg/Puzzle.svg";

export default function Home() {
  return (
    <>
      <header className="h-[55px] flex items-center justify-between mx-5">
        <img src={imgLogoFull} alt="Logo" className="h-[40px]" />
        <MobileMenu />
      </header>

      {/* Welcome section */}
      <section className="grid grid-flow-row auto-rows-max text-center">
        <div className="mb-1">
          <img
            src={imgPuzzle}
            className="w-3/4 mx-auto"
            alt="Building a puzzle together"
          />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-futura text-white font-bold text-[26.5px]">
            WELKOM BIJ
          </h1>
          <img src={imgLogoFull} className="ml-5 h-[55px]" alt="Logo" />
        </div>
        <div>
          <p className="font-roboto text-s">
            De plek voor studenten, door studenten.
          </p>
        </div>
      </section>

      {/* Trending section */}
      <section className="grid auto-rows-max text-center place-items-center">
        <h2 className="font-futura font-bold text-xl mt-[80px] mb-[30px] text-center">
          ACTUEEL
        </h2>
        <Feed />
        <ButtonPrimary link="#" text="BEKIJK ALLES" />
      </section>
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuIcon
        className="h-[35px] text-baby-barf-red"
        onClick={() => setOpen(true)}
      />

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon
                            className="h-6 w-6 text-baby-barf-red"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-baby-barf-green-200 py-6 shadow-xl">
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6 text-center text-4xl font-roboto">
                          <h1 className="my-4">Info</h1>
                          <h1 className="my-4">Actueel</h1>
                          <h1 className="my-4">Producten</h1>
                          <h1 className="my-4">Contact</h1>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
