import React from "react";
import iconRR2 from "../images/IconR.png";

const Feedback = () => {
  return (
    <div>
      <div  className=" mx-auto p-16 sm:p-24 lg:p-48 text-neutral-700 bg-neutral-100 dark:text-neutral">
        <div
           className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl min-h-[19rem]"
          
        >
          <div
             className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg min-h-[19rem]"
           
          >
           
            <div  className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
            <div  className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
              <img   className="w-full h-1/2 object-contain" src={iconRR2} alt="" />
            </div>
          </div>
          <div  className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div  className="p-12 md:pr-24 md:pl-16 md:py-12">
              <p  className="text-gray-600">
                <span  className="text-gray-900"></span> Our values include providing fair wages for workers, giving back to the communities we work with, and serving great coffee.
              </p>
             
            </div>
            <svg
               className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
         
        </div>

       
      </div>
    </div>
  );
};

export default Feedback;
