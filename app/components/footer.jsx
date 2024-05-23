import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoLogoLinkedin, IoLogoGithub, IoMail, IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#070707] border-t-1 border-[#181818]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href={"/"}>
                            <Image
                                src="/images/favicon.png"
                                alt="hero image"
                                className=""
                                width={95}
                                height={95}
                            />

                            <span className="self-center text-md font-semibold whitespace-nowrap dark:text-white">Jamie Chau</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-16 sm:gap-12 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href={"projects"} className="hover:underline hover:text-[#5658B6]">
                                        Projects
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href={"techstack"} className="hover:underline hover:text-[#5658B6]">
                                        Tech Stack
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"certifications"} className="hover:underline hover:text-[#5658B6]">
                                        Certifications
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Jamie Chau</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href={"about"} className="hover:underline hover:text-[#5658B6]">
                                        About Me
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"contact"} className="hover:underline hover:text-[#5658B6]">
                                        Contact Me
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved. © 2024 Built by {" "}
                        <Link href={"/"}>
                            <span className="hover:underline hover:text-[#5856B8]">Jamie Chau</span>.
                        </Link>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
                        <div>
                            <Link target="_blank" href={"https://linkedin.com/in/jamiechau-"}>
                                <IoLogoLinkedin size={25} className="text-[#5956B8] hover:text-white duration-300" />

                            </Link>
                        </div>
                        <div>
                            <Link target="_blank" href={"https://github.com/jamiechau-dev"}>
                                <IoLogoGithub size={25} className="text-[#5956B8] hover:text-white duration-300 " />
                            </Link>
                        </div>
                        <div>
                            <Link href={"mailto:jamiechau.dev@gmail.com"}>
                                <IoMail size={25} className="text-[#5956B8] hover:text-white duration-300" />
                            </Link>
                        </div>
                        <div>
                            <Link target="_blank" href={"https://youtu.be/0eKgUN9csFw?si=dkDyLxVS412Qt9Qy&t=610"}>
                                <IoLogoYoutube size={25} className="text-[#5956B8] hover:text-white duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;