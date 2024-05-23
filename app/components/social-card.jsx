import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";
import Link from "next/link";

const SocialCard = () => {
    return (
        <div className="bg-[#181818] p-4 w-full flex justify-around ">

            <div>
                <Link target="_blank" href={"https://linkedin.com/in/jamiechau-"}>
                    <IoLogoLinkedin size={65} className="text-[#5956B8] hover:text-white duration-300" />
                    <div className="flex justify-center">
                        <Button className="mt-2 text-tiny text-white bg-[#5956B8] hover:text-[#5956B8] hover:bg-white duration-300" variant="flat" color="default" radius="lg" size="sm">
                            LinkedIn
                        </Button>
                    </div>
                </Link>
            </div>
            <div>
                <Link target="_blank" href={"https://github.com/jamiechau-dev"}>
                    <IoLogoGithub size={65} className="text-[#5956B8] hover:text-white duration-300 " />
                    <div className="flex justify-center">
                        <Button className="mt-2 text-tiny text-white bg-[#5956B8] hover:text-[#5956B8] hover:bg-white duration-300" variant="flat" color="default" radius="lg" size="sm">
                            Github
                        </Button>
                    </div>
                </Link>
            </div>
            <div>
                <Link href={"mailto:jamiechau.dev@gmail.com"}>
                    <IoMail size={65} className="text-[#5956B8] hover:text-white duration-300" />
                    <div className="flex justify-center">
                        <Button className="mt-2 text-tiny text-white bg-[#5956B8] hover:text-[#5956B8] hover:bg-white duration-300" variant="flat" color="default" radius="lg" size="sm">
                            Email
                        </Button>
                    </div>
                </Link>
            </div>




        </div>
    );
};

export default SocialCard;