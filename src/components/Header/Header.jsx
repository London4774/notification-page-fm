import React from "react";

export default function Header({ unreadMsg, onMarkAll }) {
  return (
    <div className="flex flex-row justify-between items-center mx-10 pt-5">
      <div className="flex gap-3 justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold">Notifications</h1>
        <span className="bg-blue-950 px-2 text-white rounded text-sm">
          {unreadMsg}
        </span>
      </div>

      <button
        className="text-[12px] md:text-base text-gray-500 border-none hover:text-blue-950"
        onClick={onMarkAll}
      >
        Mark all as read
      </button>
    </div>
  );
}
