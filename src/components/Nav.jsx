import React from "react";

export const Nav = () => {
  return (
    <>
      <nav className="bg-yellow-300 flex justify-between items-center gap-5 h-[7vh]">
        <h1 className="p-5 uppercase font-bold">Logo</h1>
        <ul className="flex justify-between border border-black w-[30vw] mr-5 cursor-pointer">
          <li>1er list</li>
          <li>2nd list</li>
          <li>3th list</li>
          <li>4th list</li>
        </ul>
      </nav>
    </>
  );
};
