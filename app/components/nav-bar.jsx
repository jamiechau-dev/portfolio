"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../components/nav-link";
import { Button } from "@nextui-org/react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Tech Stack",
    path: "techstack",
  },
];

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-[#181818] dark:bg-[#070707] z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" passHref>

            <Image
              src="/images/favicon.png"
              alt="hero image"
              className="mx-4"
              width={55}
              height={55}
            />

        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link target="_blank" href="https://calendly.com/j-chau905/30min" passHref>

              <Button
                type="button"
                className="text-white bg-[#5956B8] hover:bg-[#383158] font-medium rounded-full border-white border px-4 py-2 text-center dark:bg-[#5956B8] dark:hover:bg-[#383158] dark:focus:ring-blue-800"
              >
                Book a Call
              </Button>

          </Link>

          {/* PUT LANGUAGE BUTTON HERE */}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;