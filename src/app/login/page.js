"use client";
import Image from "next/image";
import logo from "./../../assets/logo.png";
import men from "../,,/../../assets/Login/character.png";
import blob1 from "../,,/../../assets/Login/blob1.png";
import blob2 from "../,,/../../assets/Login/blob2.png";
import blob3 from "../,,/../../assets/Login/blob3.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full lg:h-screen px-5 lg:px-20 py-3 lg:py-6 w-full bg-whiteOrange">
      {/* blob */}

      <div>
        <Image
          className="absolute left-0 bottom-0 w-ful h-ful"
          src={blob1}
          height={10}
          width={355}
        />

        <Image
          className="absolute translate-[360deg] right-[290px] top-10 w-ful h-ful"
          src={blob2}
          height={120}
          width={95}
        />

        <Image
          className="absolute  bottom-10 right-1 w-ful h-ful"
          src={blob3}
          height={120}
          width={110}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="py-4 lg:py-8">
          <div className="flex flex-col items-center lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-[50vw]  order-2 mb-8 lg:mb-0 lg:order-1 z-50  h-full">
              <div className="pb-5 flex justify-center gap-1 items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1 border-2 border-orange rounded-lg">
                    <Image
                      className="mx-auto "
                      src={logo}
                      height={18}
                      width={22}
                      alt="logo"
                    />
                  </div>
                  <h3 className="font-medium text-[20px] text-left text-dark">
                    eProfiles
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-300 h-full w-full p-10">
                <h1 className="font-bold text-dark text-[22px]">Login</h1>
                <h3 className="font-normal text-dark text-[17px]">
                  to get started
                </h3>

                <div className="mt-3 md:mt-4 lg:mt-6">
                  <form className="relative">
                    {/* Email Input field */}
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="px-3 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                    />

                    {/* Pass Input field */}

                    <input
                      type={open ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className="px-3 relative py-3 rounded-md w-full border-2 mb-2 text-dark placeholder:text-slate-700 border-slate-200 outline-blue-500"
                    />

                    {/* eye icon */}
                    <span
                      onClick={() => setOpen(!open)}
                      className="absolute text-[18px] right-3 top-20"
                    >
                      {open ? <FaEye /> : <FaRegEyeSlash />}
                    </span>

                    <Link
                      href="/forgot-password"
                      className="text-lightDark pt-4 pl-1 font-bold text-[13px]"
                    >
                      Forgot Password ?
                    </Link>

                    <div className="mt-5 md:mt-6 lg:mt-8">
                      <button
                        className="py-3 w-full font-medium bg-orange text-white rounded-lg"
                        type="submit"
                      >
                        Continue
                      </button>

                      <h3 className="text-lightDark my-2 font-normal pt-4 text-center text-[15px]">
                        New User?{" "}
                        <Link
                          className="font-semibold text-orange"
                          href="/signup"
                        >
                          Register
                        </Link>{" "}
                      </h3>

                      <div className="flex w-full items-center gap-3 py-2 text-[15px] text-slate-500">
                        <div className="h-[1px] w-full bg-dark"></div>
                        or
                        <div className="h-[1px] w-full bg-dark"></div>
                      </div>

                      {/* social icon */}

                      <div className="flex items-center gap-4 justify-center mt-2 flex-wrap">
                        <button
                          href="#"
                          className="hover:scale-105 bg-white rounded-xl ease-in-out duration-300 shadow-lg px-3 py-[10px] border border-slate-200 m-1"
                        >
                          <img
                            className="max-w-[30px]"
                            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                            alt="Google"
                          />
                        </button>
                        <button
                          href="#"
                          className="hover:scale-105 bg-white rounded-xl ease-in-out duration-300 shadow-lg px-3 py-[10px] border border-slate-200 m-1"
                        >
                          <img
                            className="max-w-[30px]"
                            src="https://i.ibb.co/RzBSCDk/5ed01d297ac58-removebg-preview.png"
                            alt="Facebook"
                          />
                        </button>
                        <button
                          href="#"
                          className="hover:scale-105 bg-white rounded-xl ease-in-out duration-300 shadow-lg px-3 py-[10px] border border-slate-200 m-1"
                        >
                          <img
                            className="max-w-[28px]"
                            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                            alt="Google"
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full order-1 lg:order-2 mt-20  h-full p-4">
              <Image height={450} width={474} src={men} />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
