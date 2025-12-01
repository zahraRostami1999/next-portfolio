"use client";

import { useState } from "react";
import Image from "next/image";
import Banner from "../../assets/images/banner.webp";

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Zahra_Rostami_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <div className="w-full bg-(--bg-container) lg:py-0 sm:py-10 py-3 flex flex-wrap items-center p-5 h-[90vh] rounded-xl shadow-md border border-(--border)">
      <div className="lg:px-2 w-full flex lg:justify-between sm:flex-wrap-reverse justify-center flex-wrap-reverse">
        <div className="lg:w-3/5 md:w-3/5 sm:w-4/5 w-11/12 lg:px-5 md:px-14">
          <div className="w-full h-full flex flex-wrap justify-start items-center sm:py-10 py-6 text-(--text-main)">
            <div className="lg:text-5xl md:text-3xl sm:text-2xl text-2xl w-full my-5">
              <div className="w-full">
                Hello I'm{" "}
                <span className="font-extrabold text-(--text-secondary)">
                  Zahra Rostami
                </span>
              </div>
            </div>

            <div className="lg:text-xl md:text-lg sm:text-base text-sm py-5 md:py-0">
              <div>
                I'm a{" "}
                <span className="font-extrabold text-(--text-secondary)">
                  Frontend Developer
                </span>{" "}
                who loves crafting awesome web experiences using React, Next.js,
                Redux, and Tailwind CSS. I’m all about creating user-friendly,
                visually stunning, and high-performing web apps that make a
                difference. Check out my portfolio to see the cool stuff I’ve
                been working on!
              </div>
            </div>

            <div className="w-full lg:text-base md:text-base sm:text-base text-sm font-semibold lg:mx-auto mx-0 my-10 md:my-6">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className={`bg-(--bg-main) hover:bg-rose-400 text-(--text-main) hover:text-neutral-900 py-3 rounded-xl px-5 drop-shadow-lg transition-all ${
                  downloading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {downloading ? "Downloading..." : "Download Resume"}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 md:w-2/5 sm:w-4/5 w-4/5 flex justify-center items-center md:items-start md:py-20">
          {!imgLoaded && (
            <div className="w-2/3 lg:h-[350px] md:h-[350px] sm:[h-370px] h-[200px] rounded animate-pulse bg-gray-200" />
          )}
          <Image
            src={Banner}
            alt="Zahra Rostami"
            className="w-2/3 mx-auto lg:h-[350px] md:h-[350px] sm:[h-370px]"
            onLoad={() => setImgLoaded(true)}
            style={{ display: imgLoaded ? "block" : "none" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
