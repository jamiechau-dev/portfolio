"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../components/nav-link";
import { Button } from "@nextui-org/react";
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menu-overlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Tech Stack",
    path: "techstack",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Certifications",
    path: "certifications",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className="fixed top-0 w-full border-b border-[#181818] dark:bg-[#070707] z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/">

            <Image
              src="/images/favicon.png"
              alt="hero image"
              className="mx-4"
              width={55}
              height={55}
            />

        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link target="_blank" href="https://calendly.com/j-chau905/30min">

              <Button
                type="button"
                className="text-white bg-[#5956B8] hover:bg-[#383158] font-medium rounded-full border-white border px-4 py-2 text-center dark:bg-[#5956B8] dark:hover:bg-[#383158] dark:focus:ring-blue-800"
              >
                Book a Call
              </Button>

          </Link>
          <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
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
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;