/** @format */

import { useEffect, useState } from "react";
import {
  L_CIRCLE,
  R_CIRCLE,
  STROKE_WIDTH,
  TIME_DURATION,
  X_Y_CIRCLE,
} from "../../shared/constant";

interface ICountDown {
  durationTimeLeft: number;
}

export const CountDown = (props: ICountDown) => {
  const [counter, setCounter] = useState(props.durationTimeLeft);
  useEffect(() => {
    setCounter(props.durationTimeLeft);
  }, [props.durationTimeLeft]);

  const strokeDasharray = `${(counter / TIME_DURATION) * L_CIRCLE} ${L_CIRCLE}`;

  return (
    <div className={`w-40 h-40 relative text-gray-500`}>
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
