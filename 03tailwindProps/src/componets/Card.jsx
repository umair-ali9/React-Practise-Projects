import React from "react";
function Card({username, btnText}) {
  return (
    <div className="relative h-[367px] w-[367px] rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1752041295563-8320edcc0025?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Person"
        className="h-full w-full rounded-xl object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="text-sm text-gray-300">
          Human resources executive with 8+ years of experience.
        </p>
        <div className="mt-2 inline-flex items-center rounded-full bg-white/30 px-3 py-1 text-xs font-semibold text-white">
          {btnText}
        </div>
      </div>
    </div>
  );
}

export default Card;