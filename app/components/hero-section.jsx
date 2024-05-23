"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@nextui-org/react";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 mt-10 mb-10 ">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-2 text-4xl sm:text-5xl font-extrabold">
                        <span className="hidden sm:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">Hello, I&apos;m{" "}</span>
                        <span className="hover:bg-clip-text hover:bg-gradient-to-r from-teal-600 to-purple-600 hover:text-transparent">Jamie Chau</span>
                        <span className="hidden sm:inline">{" "}👋</span>
                    </h1>

                    <TypeAnimation
                        className="mb-4 placeholder:text-2xl sm:text-4xl font-extrabold hover:bg-clip-text hover:bg-gradient-to-r from-teal-600 to-purple-600 hover:text-transparent"
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Full Stack Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            1000,
                            'Project Manager',
                            1000,
                        ]}
                    />
                    
                    <p className="beige text-base sm:text-lg  text-justify mb-6 first-line:lg:text-xl">
                        I’m a Full Stack Developer based in Montreal, Canada, with a business administration background. I specialize in Next.js, React, and Ruby on Rails. My expertise are in both front-end and back-end development, focusing on creating robust, user-friendly applications. I am passionate about using technology to solve complex problems and always eager to tackle new challenges that contribute to team and organizational success.
                    </p>

                    <div className="flex items-center">
                        <Link href={"mailto:jamiechau.dev@gmail.com"}>
                            <Button
                                className="p-6 rounded-full mr-4 text-white bg-[#5956B8] hover:bg-[#383158] border border-white duration-300"
                            >
                                Let&apos;s connect!
                            </Button>
                        </Link>
                        <Link target="_blank" href={"https://drive.google.com/uc?export=download&id=18nLIQSXWeHYmwtWHee8abisvnhPn6BqZ"}>
                            <Button className="p-6 rounded-full bg-transparent hover:bg-[#383158] border border-white duration-300 text-white">
                                <div className="flex items-center">
                                    <IoMdDownload />
                                    Resume
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="col-span-5 place-self-center mt-8 lg:mt-0 ">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative opacity-90">
                        <Link href="about">
                            <Image
                                src="/images/avatar.png"
                                alt="hero image"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full hover:bg-[#070707] duration-500 "
                                width={300}
                                height={300}
                                />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;  