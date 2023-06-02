import React from "react";
import Banner2 from "../images/Banner2.jpg";

const ChefBanner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-opacity-0.8 "
        style={{ backgroundImage: `url(${Banner2})` }}
      > <div className="container mx-auto py-9 md:py-12 px-4 md:px-6 ">
      <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 ">
        <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded">
          <div className="flex flex-col justify-center md:w-1/2 rounded">
            <h1 className="text-3xl  font-semibold text-gray-800 dark:text-white md:p-4">
            Chef Name
            </h1>
            <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
            <div className="grid items-center justify-between leading-tight  md:p-4">
            
              <div className=" text-black pt-1">Years of experience :10</div>
              <div className=" text-black pt-1">Numbers of recipes:1000000</div>
              <div className=" text-black pt-1">Number of recipes:20</div>
              <div className=" text-black pt-1">Likes:2500000</div>
            </div>
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img className="object-cover" src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" class="" />
          </div>
        </div>
      
      </div>
    </div>

        </div>
     
    </div>
  );
};

export default ChefBanner;
