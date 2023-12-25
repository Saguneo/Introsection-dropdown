import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Sidebar({ toggle, toggler }) {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between md:hidden">
          <div className="">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div onClick={toggler} className="">
            <img src="/images/icon-menu.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={`${toggle ? "fixed top-0 right-0" : "hidden"}`}>
        <div className="h-screen w-[250px] bg-white p-2 overflow-y-scroll">
          <div onClick={toggler}>
            <img
              className="absolute right-4 top-5"
              src="/images/icon-close-menu.svg"
              alt=""
            />
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full gap-3 rounded-lg px-4 py-2 mt-14 text-left text-sm font-medium hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>Features</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-medium-gray`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <ul className="flex flex-col gap-3 pl-8 py-4 text-sm text-gray-500">
                    <li className="flex items-center gap-3">
                      <img
                        className="w-4"
                        src="/images/icon-todo.svg"
                        alt=""
                        srcSet=""
                      />
                      Todo List
                    </li>
                    <li className="flex items-center gap-3">
                      <img
                        className="w-4"
                        src="/images/icon-calendar.svg"
                        alt=""
                        srcset=""
                      />
                      Calender
                    </li>
                    <li className="flex items-center gap-3">
                      <img
                        className="w-4"
                        src="/images/icon-reminders.svg"
                        alt=""
                        srcset=""
                      />
                      Reminders
                    </li>
                    <li className="flex items-center gap-3">
                      <img
                        className="w-4"
                        src="/images/icon-planning.svg"
                        alt=""
                        srcset=""
                      />
                      Planning
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full gap-3 rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>Company</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-medium-gray`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <ul className="flex flex-col gap-3 pl-8 pb-2 pt-2 text-start text-sm text-gray-500">
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="px-4 py-2 ">
            <ul className="text-left text-sm font-medium text-black">
              <li className="pb-4">
                <a className="" href="">
                  Careers
                </a>
              </li>
              <li>
                <a className="" href="">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="py-12 p-4 text-center">
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <button className="w-full border-black bg-white">
                  Register
                  <a href=""></a>
                </button>
              </li>
            </ul>
          </div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[-1]"></div>
        </div>
      </div>
    </>
  );
}
