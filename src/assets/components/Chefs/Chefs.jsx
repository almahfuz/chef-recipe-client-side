import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Chefs = () => {
  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {/* <!-- Column --> */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 duration-300 hover:-translate-y-1">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg">
              <div>
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </div>

              <div className="grid items-center justify-between leading-tight p-2 md:p-4">
                <div className="text-lg">
                  <div className=" text-black ">Chef Name</div>
                </div>
                <div className=" text-black pt-1">Years of experience</div>
                <div className=" text-black pt-1">Numbers of recipes</div>
                <div className=" text-black pt-1">Likes</div>
              </div>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="ml-2 text-sm"><FaHeart></FaHeart></p>
                </a>
                <Link
                  href="#"
                  className="bg-neutral-200 py-3 px-4 text-neutral-700 font-bold uppercase text-xs rounded hover:bg-neutral-300 hover:text-neutral-800"
                >
                  View Details
                </Link>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          {/* <!-- Column --> */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 duration-300 hover:-translate-y-1">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg">
              <div>
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </div>

              <div className="grid items-center justify-between leading-tight p-2 md:p-4">
                <div className="text-lg">
                  <div className=" text-black">Chef Name</div>
                </div>
                <div className=" text-black">Years of experience</div>
                <div className=" text-black">Numbers of recipes</div>
                <div className=" text-black">Likes</div>
              </div>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="ml-2 text-sm">Likes</p>
                </a>
                <Link
                  href="#"
                  className="bg-neutral-200 py-3 px-4 text-neutral-700 font-bold uppercase text-xs rounded hover:bg-neutral-300 hover:text-neutral-800"
                >
                  View Details
                </Link>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
          {/* <!-- END Column --> */}

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 duration-300 hover:-translate-y-1">
            {/* <!-- Article --> */}
            <article className="overflow-hidden rounded-lg shadow-lg">
              <div>
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </div>

              <div className="grid items-center justify-between leading-tight p-2 md:p-4">
                <div className="text-lg">
                  <div className=" text-black">Chef Name</div>
                </div>
                <div className=" text-black">Years of experience</div>
                <div className=" text-black">Numbers of recipes</div>
                <div className=" text-black">Likes</div>
              </div>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="ml-2 text-sm">Likes</p>
                </a>
                <Link
                  href="#"
                  className="bg-neutral-200 py-3 px-4 text-neutral-700 font-bold uppercase text-xs rounded hover:bg-neutral-300 hover:text-neutral-800"
                >
                  View Details
                </Link>
              </footer>
            </article>
            {/* <!-- END Article --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
