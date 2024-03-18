import Image from "next/image";
import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        className="px-3 py-3 rounded-md w-full border-slate-300 outline-blue-500"
      />
     

      <Image />
    </div>
  );
};

export default home;
