"use client";
import MusicIcon from "@/app/assets/music-icon.png";
import LightIcon from "@/app/assets/light-on-icon.png";
import Image from "next/image";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import LightingController from "../LightingController/LightingController";

export default function DeviceCategories() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  const getCurrentTime = () => {
    const time = new Date();

    return time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  return (
    <div className="relative h-screen w-screen">
      {/* Navbar Section */}
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute top-20 sm:top-5 left-3 sm:left-8">
          {isCategorySelected && (
            <IoMdArrowRoundBack
              className="text-3xl sm:text-4xl text-white cursor-pointer rounded-full bg-gray-800 bg-opacity-80 p-1"
              onClick={() => setIsCategorySelected(false)}
            />
          )}
        </div>
        <h1 className="text-indigo-500 font-semibold text-3xl sm:text-4xl p-5 mx-auto">
          Modo
        </h1>
        <span className="text-gray-300 font-mono text-xl sm:text-2xl pr-10">
          {getCurrentTime()}
        </span>
      </div>
      {/* Controller Section */}

      <div className="px-8 sm:px-24 space-y-10 mt-14 sm:mt-5">
        <div className="space-y-2">
          <h2 className="text-gray-400 text-base sm:text-xl font-semibold">
            SMART HOME EXOP - MS
          </h2>
          <h3 className="text-white font-bold text-2xl sm:text-4xl">
            {isCategorySelected ? "Lighting" : "Music"}
          </h3>
        </div>
        {!isCategorySelected ? (
          <div className="flex items-center gap-10">
            <div className="flex flex-col space-y-3 items-center p-5 cursor-pointer">
              <Image src={MusicIcon} alt="Music Icon" width={60} height={60} />
              <h3 className="text-white font-bold text-xl sm:text-2xl">
                Music
              </h3>
            </div>
            <span className="border border-r border-l-gray-300 h-28 rounded-md" />

            <div
              className="flex flex-col space-y-3 items-center p-5 cursor-pointer"
              onClick={() => setIsCategorySelected(true)}
            >
              <Image src={LightIcon} alt="Light Icon" width={60} height={60} />
              <h3 className="text-white font-bold text-xl sm:text-2xl">
                Lighting
              </h3>
            </div>
          </div>
        ) : (
          <LightingController />
        )}
      </div>
    </div>
  );
}
