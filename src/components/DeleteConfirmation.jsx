import { useEffect } from "react";
import ProgressBar from "./utils/ProgressBar";

const TIMER = 5000;

export default function DeleteConfirmation({ onCancel, onConfirm }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div className="p-4">
      <h2 className="font-raleway text-2xl m-0 p-0 text-[#3d7394]">
        Are you sure?
      </h2>
      <p className="my-2 text-lg max-w-[38ch] text-[#f7c9ee]">
        Do you really want to remove this place?
      </p>
      <ProgressBar timer={TIMER} />
      <div className="mt-4 flex justify-end gap-4">
        <button
          className="bg-transparent border-none p-0 font-raleway text-lg text-[#ecc8c8] cursor-pointer"
          onClick={onCancel}
        >
          No
        </button>
        <button
          className="font-raleway text-lg py-2 px-6 border-none rounded bg-[#5d0909] hover:bg-[#3e0505] focus:bg-[#3e0505] cursor-pointer shadow-custom-black text-white"
          onClick={onConfirm}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
