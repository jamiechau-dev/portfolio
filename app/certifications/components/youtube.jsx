// YouTubeEmbed.js
import React from "react";

const YouTubeEmbed = ({ src }) => {
    return (
        <div>
            <div className="p-8 text-4xl font-bold text-center">
                Le Wagon Demo Day Presentation
            </div>
            <div className="relative pb-[40%] h-0 overflow-hidden max-w-full bg-black mx-auto sm:max-w-[900px]">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default YouTubeEmbed;