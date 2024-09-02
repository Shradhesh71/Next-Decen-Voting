import { useNotification } from "web3uikit";
import React from "react";

export default function CandidateName({
  name,
  slogan,
  partyname,
}: {
  name: string;
  slogan: string;
  partyname: string;
}) {
  // const dispatch = useNotification();

  return (
    <div>
      <div className="flex flex-row mt-5">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div className=" flex-col ml-11 ">
          <div className="ms-2 text-xl font-medium text-gray-900 dark:text-gray-300">
            {name} - <span className=" text-blue-400">{partyname}</span>
          </div>
          <div className=" text-sm text-blue-200"> {slogan} </div>
        </div>
      </div>
    </div>
  );
}
