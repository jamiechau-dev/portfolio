import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
    return (
        <div className="max-w-auto gap-6 grid grid-cols-12 justify-between mt-5 sm-grid-cols-12">
            <Card className="w-full h-[300px] col-span-12 sm:col-span-4 border-solid border-1 border-white">
                <CardHeader className="absolute z-10 top-1 flex-col items-start p-2">
                    <p className="text-lg text-white uppercase font-bold">Front End Developer</p>
                    <h4 className="text-[#65A8B2] font-semibold text-lg">UI/UX Designer</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Front End Developer Photo"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover brightness-50 hover:scale-150 duration-500"
                    src="images/front_end_developer.png"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                    <div>
                        <p className="text-black text-sm w-[200px] text-wrap md:w-[100px] lg:w-[200px] xl:w-[250px] 2xl:w-[340px]">Elevate your website into a seamless and visually stunning user experience with development expertise.</p>
                    </div>
                    <Link  href={"projects"}>
                        <Button className="text-tiny rounded-full p-2 border text-white bg-[#5956B8] hover:bg-[#383158] duration-300" color="primary" radius="full" size="sm">
                            Design Tools
                        </Button>
                    </Link>
                </CardFooter>
            </Card>

            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 border-solid border-1 border-white">
                <CardHeader className="absolute z-10 top-1 flex-col items-start p-2">
                    <p className="text-lg text-white uppercase font-bold">Back End Developer</p>
                    <h4 className="text-[#65A8B2] font-semibold text-lg">| Next.js | React | Ruby on Rails |</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Back End Developer Photo"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover brightness-50 hover:scale-150 duration-500"
                    src="images/back_end_developer.png"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                    <div>
                        <p className="text-black text-sm w-[200px] text-wrap md:w-[100px] lg:w-[200px] xl:w-[250px] 2xl:w-[340px]">Enhance your website&apos;s functionality and performance with clean code that runs smooth and efficiently.</p>
                    </div>
                    <Link  href={"techstack"}>
                        <Button className="text-tiny rounded-full p-2 border text-white bg-[#5956B8] hover:bg-[#383158] duration-300" color="primary" radius="full" size="sm">
                            Tech Stack
                        </Button>
                    </Link>
                </CardFooter>
            </Card>

            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4 border-solid border-1 border-white">
                <CardHeader className="absolute z-10 top-1 flex-col items-start p-2">
                    <p className="text-lg text-white uppercase font-bold">Project Manager</p>
                    <h4 className="text-[#65A8B2] font-semibold text-lg">| Trello | Jira | Monday |</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Project Manager Photo"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover brightness-50 hover:scale-150 duration-500"
                    src="images/project_manager.png"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                    <div>
                        <p className="text-black text-sm w-[200px] text-wrap md:w-[100px] lg:w-[200px] xl:w-[250px] 2xl:w-[340px]"> Ensures timely delivery, efficient resource allocation, and clear communication. Successful projects. </p>
                    </div>
                    <Link  href={"mailto:jamiechau.dev@gmail.com"}>
                        <Button className="text-tiny rounded-full p-2 border text-white bg-[#5956B8] hover:bg-[#383158] duration-300" color="primary" radius="full" size="sm">
                            Let&apos;s Chat!
                        </Button>
                    </Link>
                </CardFooter>
            </Card>




        </div>
    );
}