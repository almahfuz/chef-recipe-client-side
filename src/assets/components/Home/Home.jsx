import React from "react";
import Banner2 from "../images/Banner2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-136px)]">
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-opacity-0.8 "
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <div className="md:w-1/2 2">
          {/* <p className="font-bold text-sm uppercase">Services</p> */}
          <p className="text-3xl font-bold">Started Kabab House</p>
          <p className="text-2xl mb-10 leading-none">
            Marinate, thread, grill, serve. Only for the best kebab!
          </p>
          <Link
            href="#"
            className="bg-neutral-200 py-4 px-8 text-neutral-700 font-bold uppercase text-xs rounded hover:bg-neutral-300 hover:text-neutral-800"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
};

export default Home;
