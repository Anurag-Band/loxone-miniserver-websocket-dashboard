import RGBIcon from "@/app/assets/rgb-icon.png";
import Image from "next/image";
import { useState } from "react";
import LightingMoodsModal from "../modals/LightingMoodsModal";

export default function LightingController() {
  const [isLightMoodsModalOpen, setIsLightMoodsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      <div
        className="flex flex-col space-y-3 items-center p-5 mt-5 cursor-pointer border border-slate-50 border-opacity-25 rounded-sm shadow-sm shadow-gray-50"
        onClick={() => setIsLightMoodsModalOpen(true)}
      >
        <Image src={RGBIcon} alt="RGB Icon" width={60} height={60} />
        <h3 className="text-white font-semibold text-xl">RGB Spot RGBW Tree</h3>
        <p className="text-sm font-mono">Living Room</p>
      </div>
      {isLightMoodsModalOpen && (
        <LightingMoodsModal
          setIsLightMoodsModalOpen={setIsLightMoodsModalOpen}
        />
      )}
    </div>
  );
}

