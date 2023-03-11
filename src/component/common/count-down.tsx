/** @format */

import { useEffect, useState } from "react";
import {
  L_CIRCLE,
  R_CIRCLE,
  STROKE_WIDTH,
  TIME_DURATION,
  X_Y_CIRCLE,
} from "../../shared/constant";

export const CountDown = () => {
  const [counter, setCounter] = useState(TIME_DURATION);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 && setCounter(TIME_DURATION);
  }, [counter]);

  const strokeDasharray = `${(counter / TIME_DURATION) * L_CIRCLE} ${L_CIRCLE}`;

  return (
    <div
      id="countdown"
      className={`w-40 h-40 relative text-gray-500`}
    >
      <svg width={X_Y_CIRCLE * 2} height={X_Y_CIRCLE * 2}>
        <circle
          className="-rotate-90 origin-center"
          fill="none"
          cx={X_Y_CIRCLE}
          cy={X_Y_CIRCLE}
          r={R_CIRCLE}
          stroke="grey"
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={strokeDasharray}
        />
      </svg>
      <span className="absolute top-p50 left-p50 transform -translate-x-1/2 -translate-y-1/2 ">
        {counter}
      </span>
    </div>
  );
};
