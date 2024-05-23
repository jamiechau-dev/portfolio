"use client"

import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const list = [
    { title: "HTML", labels: ["language"], img: "/images/icons/html5.svg" },
    { title: "CSS", labels: ["language"], img: "/images/icons/css.svg" },
    { title: "Javascript", labels: ["language"], img: "/images/icons/javascript.svg" },
    { title: "Tailwind", labels: ["framework"], img: "/images/icons/tailwindcss.svg" },
    { title: "Sass", labels: ["framework"], img: "/images/icons/sass.svg" },
    { title: "Bootstrap", labels: ["framework"], img: "/images/icons/bootstrap.svg" },
    { title: "Next.js", labels: ["framework"], img: "/images/icons/nextjs.svg" },
    { title: "Ruby", labels: ["language"], img: "/images/icons/ruby.svg" },
    { title: "Python", labels: ["language"], img: "/images/icons/python.svg" },
    { title: "React", labels: ["framework"], img: "/images/icons/react.svg" },
    { title: "Ruby on Rails", labels: ["framework"], img: "/images/icons/rubyonrails.svg" },
    { title: "Typescript", labels: ["language"], img: "/images/icons/typescript.svg" },
    { title: "Node.js", labels: ["framework"], img: "/images/icons/nodejs.svg" },
    { title: "Prisma", labels: ["framework"], img: "/images/icons/prisma.svg" },
    { title: "Shopify", labels: ["framework"], img: "/images/icons/shopify.svg" },
    { title: "MySQL", labels: ["database"], img: "/images/icons/mysql.svg" },
    { title: "PostgreSQL", labels: ["database"], img: "/images/icons/postgresql.svg" },
    { title: "AWS", labels: ["framework"], img: "/images/icons/aws.svg" },
    { title: "Figma", labels: ["design"], img: "/images/icons/figma.svg" },
    { title: "Canva", labels: ["design"], img: "/images/icons/canva.svg" },
    { title: "Adobe CC", labels: ["design"], img: "/images/icons/adobecc.svg" },
    { title: "Webflow", labels: ["design"], img: "/images/icons/webflow.svg" },
    { title: "Wix", labels: ["design"], img: "/images/icons/wix.svg" },
    { title: "Wordpress", labels: ["design"], img: "/images/icons/wordpress.svg" },
];

const TechCard = () => {
    const [selectedTab, setSelectedTab] = useState("all");
    const handleTabClick = (label) => {
        setSelectedTab(label);
    };

    const filteredList = selectedTab === "all" ? list : list.filter(item => item.labels.includes(selectedTab));

    return (
        <>
            <div className="container flex justify-center">
                <h1 className="text-4xl font-extrabold p-6 mb-6">My Skills & Tools</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 mb-12">
                <button onClick={() => handleTabClick("language")} className={`px-4 py-2 rounded-full ${selectedTab === "language" ? "bg-[#5956B8] border border-white" : "bg-gray-200 text-black hover:bg-[#5956B8] hover:text-white hover:border duration-300"}`}>Languages</button>
                <button onClick={() => handleTabClick("framework")} className={`px-4 py-2 rounded-full ${selectedTab === "framework" ? "bg-[#5956B8] border border-white" : "bg-gray-200 text-black hover:bg-[#5956B8] hover:text-white hover:border duration-300"}`}>Frameworks</button>
                <button onClick={() => handleTabClick("database")} className={`px-4 py-2 rounded-full ${selectedTab === "database" ? "bg-[#5956B8] border border-white" : "bg-gray-200 text-black hover:bg-[#5956B8] hover:text-white hover:border duration-300"}`}>Databases</button>
                <button onClick={() => handleTabClick("design")} className={`px-4 py-2 rounded-full ${selectedTab === "design" ? "bg-[#5956B8] border border-white" : "bg-gray-200 text-black hover:bg-[#5956B8] hover:text-white hover:border duration-300"}`}>Design</button>
                <button onClick={() => handleTabClick("all")} className={`px-4 py-2 rounded-full ${selectedTab === "all" ? "bg-[#5956B8] border border-white" : "bg-gray-200 text-black hover:bg-[#5956B8] hover:text-white hover:border duration-300"}`}>All</button>
            </div>
            <div className="gap-6 grid grid-cols-2 sm:grid-cols-3">
                {filteredList.map((item, index) => (
                    <Card shadow="sm" key={index}>
                        <CardBody className="overflow-visible p-3 bg-[#181818] ">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full h-[140px] object-contain"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-md text-white justify-center bg-[#111111] p-3">
                            <b>{item.title}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default TechCard;