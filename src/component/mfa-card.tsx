/** @format */

import { observer } from "mobx-react";
import { CountDown } from "./common/count-down";
import { useContext, useEffect, useState } from "react";
import { MFAContext } from "../shared/context";

export const MFACard = observer(() => {
  const [isCopied, setIsCopied] = useState(false);

  const mFAContext = useContext(MFAContext);

  useEffect(() => {
    isCopied && setTimeout(() => setIsCopied(false), 1000);
  }, [isCopied]);

  const displayTokenNumber = (token: number) => {
    return (
      token.toString().substring(0, 3) + " " + token.toString().substring(3, 6)
    );
  };

  const handleCopyClipboard = (id: number) => {
    navigator.clipboard.writeText(id.toString());
    setIsCopied(true);
  };

  return (
    <div className="grow">
      {mFAContext.listMFA.map((mFA, id) => {
        return (
          <div
            key={id}
            className="w-full flex max-w-xl p-10 items-center justify-between mx-auto border-b  bg-gray-50 cursor-pointer"
            onClick={() => handleCopyClipboard(mFA.token)}
          >
            <img
              src={mFA.logo}
              className="w-50 h-50 rounded-full cursor-pointer mr-10"
              alt={mFA.name}
            />
            <div className="p-6 flex-1">
              <h2 className="text-gray-500 text-lg mb-2 leading-tight">
                {mFA.name}
              </h2>
              <p className="text-gray-600 text-semibold text-4xl">
                {displayTokenNumber(mFA.token)}
              </p>
            </div>
            <CountDown durationTimeLeft={mFA.durationTimeLeft} />
          </div>
        );
      })}
      {isCopied && (
        <div className="w-full text-center">
          <span className="text-white  bg-black">Token is copied</span>
        </div>
      )}
    </div>
  );
});
