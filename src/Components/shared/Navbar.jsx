"use client";

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";

import logo from "../../assets/logo.png";
import Image from "next/image";
import Container from "../Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link href="/" className="lg:ml-4">
        Companies
      </Link>
      <Link href="/" className="lg:ml-4">
        Profiles
      </Link>
      <Link href="/" className="lg:ml-4">
        Services
      </Link>
      <Link href="/" className="lg:ml-4">
        Press
      </Link>
    </>
  );

  return (
    <div className="border- shadow-md">
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <Container>
        {/* blur screen  */}

        <div className="flex   justify-between items-center">
          {/* <div className="block lg:hidden">cart</div> */}
          <div className="logo p-1 border-2 rounded-lg border-orange">
            <Image src={logo} height={22} width={25} alt="logo" />
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg  transform h-full w-[350px] bg-white text-black absolute top-0 left-0`}
          >
            <button
              className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <RxCross1 />
            </button>

            <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>
          </div>

          <div className="flex gap-9 items-center">
            {/* Desktop menu */}
            <div className="hidden  lg:block">
              <ul className="lg:flex text-[16px] font-medium lg:gap-4">
                {navList}
              </ul>
            </div>

            <Link href="/login" className="ml-10">
              {" "}
              <button className="hidden lg:flex text-[15px] items-center gap-2 lg:ml-4 py-[7px] px-5 bg-orange text-white rounded-md font-normal ">
                Sign in <FiUserPlus className="text-[18px] mb-1" />
              </button>
            </Link>

            {/* mobile toggle menu */}

            <IoMdMenu
              className="text-2xl cursor-pointer lg:hidden ml-4"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
