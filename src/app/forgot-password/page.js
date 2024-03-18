import Image from "next/image";
import logo from "./../../assets/logo.png";
import men from "../,,/../../assets/Login/character.png";
import blob1 from "../,,/../../assets/Login/blob1.png";
import blob2 from "../,,/../../assets/Login/blob2.png";
import blob3 from "../,,/../../assets/Login/blob3.png";

const ForgotPassword = () => {
  return (
    <div className="h-ful  px-5 lg:px-20 py-3 lg:py-6 w-full bg-whiteOrange">
      {/* blob */}

      <div className="hidden lg:block">
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

      <div className="max-w-5xl flex justify-center items-center mx-auto">
        <div className="py-4 lg:py-8">
          <div className="flex  flex-col items-center lg:flex-row justify-between gap-10">
            <div className="w-full   order-2 mb-8 lg:mb-0 lg:order-1 z-50 mt-20  h-full">
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

              <div className="rounded-xl h-[540px] w-full p-10">
                <h1 className="font-bold text-dark text-center text-[22px]">
                  Forgot Password
                </h1>

                <div className="mt-3 md:mt-4 lg:mt-6">
                  <form className="relative">
                    {/* Email Input field */}
                    <label
                      className="text-center text-dark font-medium text-[15px] mx-auto block mb-2"
                      htmlFor="email"
                    >
                      Enter your registered Email
                    </label>
                    <input
                      type="email"
                      placeholder="Mymail@example.com"
                      name="email"
                      className="px-3 py-3 rounded-md w-full border-2 mb-3 text-dark placeholder:text-slate-300 border-slate-200 outline-blue-500"
                    />

                    {/* Pass Input field */}

                    <div className="mt-5 md:mt-6 lg:mt-8">
                      <button
                        className="py-3 w-full font-medium bg-orange text-white rounded-lg"
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full order-1 lg:order-2 mt-20 h-full p-4">
              <Image height={450} width={474} src={men} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
