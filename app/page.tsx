"use client";
import { useState } from "react";
import Loader from "./utils/Loader/Loader";
import DeviceCategories from "./components/DeviceCategories/DeviceCategories";
import ConnectionFormModal from "./components/modals/ConnectionFormModal";

export default function Home() {
  const [isConnectionFormOpen, setIsConnectionFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return <DeviceCategories />;
  }
  return loading ? (
    <Loader />
  ) : (
    // Home Page Layout
    <div className="relative h-screen">
      <div className="space-y-8 flex flex-col items-center">
        <h1 className="text-white font-semibold text-4xl sm:text-6xl font-sans mt-40 sm:mt-52">
          Modo
        </h1>
        <p className="text-gray-300 font-mono mt-1 ml-[1px] sm:text-xl">
          Not the means, but the mode to technology.
        </p>
        <button
          type="submit"
          className="block bg-indigo-600 text-white mt-4 p-2 rounded-lg font-semibold mb-2"
          onClick={() => setIsConnectionFormOpen(true)}
        >
          Connect to Miniserver
        </button>
      </div>
      {isConnectionFormOpen && (
        <ConnectionFormModal
          setLoading={setLoading}
          setSuccess={setSuccess}
          setIsConnectionFormOpen={setIsConnectionFormOpen}
        />
      )}
    </div>
  );
}
