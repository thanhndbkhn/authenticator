/** @format */
import { IoIosAdd } from "react-icons/io";

export const Header = () => {
  return (
    <div className="p-10 flex w-full  items-center justify-between flex-none">
      <span className="text-xl text-red-600">Edit</span>
      <span className="text-3xl text-semibold">Tokens</span>
      <IoIosAdd className="text-3xl text-red-600 cursor-pointer" />
    </div>
  );
};