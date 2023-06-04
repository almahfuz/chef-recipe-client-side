import React from 'react';
import Banner2 from "../images/Banner2.jpg";
import SocialLogSign from '../SocialLogSign/SocialLogSign';
const SignUp = () => {
    return (
        <div>
             <div
        className="bg-no-repeat bg-cover bg-center relative pt-4 pb-4"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <div className="absolute bg-gradient-to-b from-neutral-200  to-neutral-300  opacity-75 md:inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              {/* <img src="#" className="mb-3"> */}
              <h1 className="mb-3 font-bold text-5xl text-neutral-700">
               Started Kabab House
              </h1>
              <p className="pr-3 text-neutral-700">
              Marinate, thread, grill, serve. Only for the best kebab!
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center md:z-10 z-[1]">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-neutral-700">
                  Sign In{" "}
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Photo URL
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="Photo link"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-neutral-600 hover:text-neutral-800">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-neutral-300 hover:bg-neutral-400 text-neutral-700 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              <div>
               <SocialLogSign></SocialLogSign>
              </div>
             
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;