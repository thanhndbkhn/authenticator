/** @format */

import { CountDown } from "./common/count-down";

export const MFACard = () => {
  return (
    <div className="grow">
      <div className="w-full flex max-w-xl p-10 items-center justify-between mx-auto border-b  bg-gray-50">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          className="w-50 h-50 rounded-full cursor-pointer mr-5"
          alt=""
        />
        <div className="p-6 flex-1">
          <h2 className="text-gray-500 text-lg mb-2 leading-tight">
            Epic Games
          </h2>
          <p className="text-gray-600 text-semibold text-4xl">634 888</p>
        </div>
        <CountDown />
      </div>

      <div className="w-full flex max-w-xl p-10 items-center justify-between  mx-auto border-b  bg-gray-50">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          className="w-50 h-50 rounded-full cursor-pointer mr-5"
          alt=""
        />
        <div className="p-6 flex-1">
          <h2 className="text-gray-500 text-lg mb-2 leading-tight">
            Epic Games
          </h2>
          <p className="text-gray-600 text-semibold text-4xl">634 888</p>
        </div>
        <CountDown />
      </div>
    </div>
  );
};
