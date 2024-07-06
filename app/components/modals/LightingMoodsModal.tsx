import TextInput from "@/app/utils/TextInput/TextInput";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { IoClose } from "react-icons/io5";
import RGBIcon from "@/app/assets/rgb-icon.png";

interface IProps {
  setIsLightMoodsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const LIGHT_MOODS_LIST = [
  { label: "Bright", value: "Bright" },
  { label: "Off", value: "Off" },
  { label: "Dim", value: "Dim" },
];

export default function LightingMoodsModal({
  setIsLightMoodsModalOpen,
}: IProps) {
  const [selectedMood, setSelectedMood] = useState(LIGHT_MOODS_LIST[0].value);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onMoodChange = async (selectedMood: string) => {
    setLoading(true);
    try {
      await axios.post("/api/mood-change", {
        body: {
          selectedMood,
        },
      });
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full absolute top-0 left-0 flex justify-center bg-black overflow-hidden">
      <div className="flex absolute top-14 right-36">
        <IoClose
          className="text-4xl text-red-500 cursor-pointer"
          onClick={() => setIsLightMoodsModalOpen(false)}
        />
      </div>
      <div className="sm:mt-32 space-y-5 flex flex-col items-center">
        <div className="flex items-center justify-center rounded-full p-5 bg-gray-900">
          <Image src={RGBIcon} alt="RGB Icon" width={60} height={60} />
        </div>
        <p className="text-xl font-mono font-semibold">Living Room</p>
        {/* Selected Mood */}
        <p className="text-lg text-slate-500">{selectedMood}</p>
        <div className="flex items-center justify-center flex-col space-y-3">
          {LIGHT_MOODS_LIST.map((mood, index) => {
            return (
              <div
                key={index}
                className={`p-4 text-white rounded-sm cursor-pointer w-80 ${
                  selectedMood === mood.value ? "bg-slate-500" : "bg-slate-700"
                }`}
                onClick={() => {
                  setSelectedMood(mood.value);
                  onMoodChange(mood.value);
                }}
              >
                {mood.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

