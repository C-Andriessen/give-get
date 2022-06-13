import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import imgLogoFull from "../img/svg/LogoFull.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={props.classes}>
      <MenuIcon
        className="h-[35px] sm:h-[40px] text-baby-barf-red hover:cursor-pointer"
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
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative w-screen max-w-md pointer-events-auto">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon
                            className="w-6 h-6 text-baby-barf-red"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-baby-barf-green-200 overflow-y-auto h-screen">
                      <div className="flex items-center flex-shrink-0 px-4">
                        <img
                          className="h-10 w-auto"
                          src={imgLogoFull}
                          alt="Give and get"
                        />
                      </div>
                      <div className="mt-5 flex-grow flex flex-col">
                        <nav
                          className="flex-1 px-2 space-y-8 bg-baby-barf-green-200"
                          aria-label="Sidebar"
                        >
                          <div className="space-y-1">
                            {props.navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-gray-500"
                                      : "text-gray-400 group-hover:text-gray-500",
                                    "mr-3 flex-shrink-0 h-6 w-6"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </nav>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
