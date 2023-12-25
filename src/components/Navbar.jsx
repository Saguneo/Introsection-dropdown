import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <header className="p-6 mx-auto min-w-[1150px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center pr-10 gap-16">
          <div className="flex shrink-0">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="flex">
            <Menu as="div" className="relative text-right">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  Features
                  <ChevronUpIcon
                    className="-mr-1 ml-0.5 h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-3 w-[170px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-4 py-3 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          <img
                            className="w-3.5 mr-3"
                            src="/images/icon-todo.svg"
                          />
                          Todo List
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          <img
                            className="w-3.5 mr-3"
                            src="/images/icon-calendar.svg"
                          />
                          Calendar
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          <img
                            className="w-3.5 mr-3"
                            src="/images/icon-reminders.svg"
                          />
                          Reminders
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          <img
                            className="w-3.5 mr-3"
                            src="/images/icon-planning.svg"
                          />
                          Planning
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative text-right">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  Company
                  <ChevronUpIcon
                    className="-mr-1 ml-0.5 h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-3 w-[125px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-4 py-3 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          History
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          Our Team
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-slate-100 text-black"
                              : " text-medium-gray"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-white`}
                        >
                          Blog
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu>
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  Careers
                </Menu.Button>
              </div>
            </Menu>
            <Menu>
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  About
                </Menu.Button>
              </div>
            </Menu>
          </div>
        </div>
        <div className="">
          <ul className="flex items-center gap-9 text-sm">
            <li className="text-black">
              <a href="">Login</a>
            </li>
            <li className="text-black">
              <button className="w-full border-black bg-white">
                Register
                <a href=""></a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
