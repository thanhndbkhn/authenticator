/** @format */
import { BsDatabaseFillLock } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
export const Footer = () => {
  return (
    <footer className="p-10 flex w-full items-center justify-between flex-none border">
      <div className="text-center">
        <BsDatabaseFillLock className="text-3xl text-red-500 cursor-pointer mx-auto" />
        <p className="text-sm text-red-500 mt-2">Tokens</p>
      </div>
      <div>
        <IoSettingsOutline className="text-3xl text-gray-500 cursor-pointer  mx-auto" />
        <p className="text-sm text-gray-500  mt-2">Settings</p>
      </div>
    </footer>
  );
};
