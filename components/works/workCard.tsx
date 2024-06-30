import React from "react";
import WorkIcons from "./workIcons";
import Image from "next/image";
import { FaExternalLinkSquareAlt as ExternalLinkIcon } from "react-icons/fa";
import { IoLogoVercel as VercelIcon } from "react-icons/io5";
import { SiNetlify as NetlifyIcon } from "react-icons/si";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import Link from "next/link";
import { workCardType } from "@/types";

const WorkCard = ({ title, language, description, image }: workCardType) => {
  return (
    <div className="flex flex-row w-[70%] h-[300px] border border-gray-600 border-opacity-35 p-8 group mx-auto rounded-2xl relative hover:scale-105 hover:bg-gray-300 hover:dark:bg-slate-700 hover:dark:bg-opacity-30">
      {/* <Image src={image} fill alt="bg" className=" object-cover absolute opacity-15 dark:opacity-20 blur-md rounded-2xl "/> */}

      <div className="w-1/2  flex flex-col items-center justify-start space-y-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex flex-col items-center text-2xl font-semibold opacity-70">
            {title}
          </h1>
          <div className="flex flex-row justify-center items-center opacity-70">
            <p className="text-base">Implemented in </p>
            <WorkIcons icon={language} />
          </div>
        </div>

        <p className="indent-6 text-base text-justify opacity-70 transition-opacity duration-500">
          {description}
        </p>
        <Link
          className="text-cyan-700 dark:text-cyan-500 opacity-80 font-bold underline"
          href={"#"}
        >
          Read More
        </Link>
      </div>

      <div className="w-1/2 flex flex-col justify-start items-center -space-y-2 ">
        <div className=" relative w-[280px] h-[200px] p-4 group-hover:scale-50 origin-top-right transition-transform duration-500 rounded-2xl overflow-hidden">
          <Image
            src={image}
            fill
            alt="project image"
            className=" object-cover"
          />
        </div>
        <div className="absolute flex flex-row justify-end items-center top-[60%] opacity-0 group-hover:opacity-70 transition-opacity duration-500 space-x-4">
          <p className="font-bold">Links:</p>
          <Link href={"#"}>
            <ExternalLinkIcon />
          </Link>
          <Link href={"#"}>
            <VercelIcon />
          </Link>
          <Link href={"#"}>
            <NetlifyIcon />
          </Link>
          <Link href={"#"}>
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
