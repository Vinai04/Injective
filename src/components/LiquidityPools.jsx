import React from "react";
import { MdOutlineLaunch } from "react-icons/md";

const LiquidityPools = (props) => {
  return (
    <button
      className="transform max-w-sm p-6 transition duration-500 hover:scale-110 bg-white border
     border-gray-200 rounded-lg shadow text-left hover:shadow-black hover:shadow-lg"
    >
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {props.info.mode}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {props.info.desc}
      </p>
      <div className="inline-flex items-center text-blue-600">
        View All Fixed Rates
        <div className="mt-0.5 ml-1">
          <MdOutlineLaunch />
        </div>
      </div>
    </button>
  );
};

export default LiquidityPools;
