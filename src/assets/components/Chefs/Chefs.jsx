import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Chefs = (props) => {
  const {
    id,
    chef_Name,
    chef_photo,
    year_experiences,
    num_Recipe,
    liked_items,
  } = props.chef;
  console.log(id);
  return (
    <div className="my-1 mx-4 px-1 max-w-full md:w-1/2 lg:my-3 lg:px-2 lg:w-1/4 duration-300 hover:-translate-y-1">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <div>
          <img
            alt="Placeholder"
            className="block h-auto w-full object-cover"
            src={chef_photo}
          />
        </div>

        <div className="grid items-center justify-between leading-tight p-2 md:p-4">
          <div className="text-lg">
            <div className=" text-black font-semibold">{chef_Name}</div>
          </div>
          <div className=" text-black pt-1 font-light">
            Years of experience: {year_experiences}
          </div>
          <div className=" text-black pt-1 font-light">
            Numbers of recipes: {num_Recipe}
          </div>
          <div className=" text-black pt-1 font-light">
            Likes: {liked_items}
          </div>
        </div>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          {/* <a
          className="flex items-center no-underline hover:underline text-black"
          href="#"
        >
          <p className="ml-2 text-sm">
            <FaHeart></FaHeart>
          </p>
        </a> */}
          <Link
            to={`/chefSingleBanner/${id}`}
            className="bg-neutral-200 py-3 px-4 text-neutral-700 font-bold uppercase text-xs rounded hover:bg-neutral-300 hover:text-neutral-800"
          >
            View Details
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default Chefs;
