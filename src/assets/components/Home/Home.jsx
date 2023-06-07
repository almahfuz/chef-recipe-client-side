import React, { useContext, useEffect, useState } from "react";
import Banner2 from "../images/Banner2.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Chefs from "../Chefs/Chefs";
import RecipeHome from "../RecipeHome/RecipeHome";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  const [ChefsItems, setChefsItems] = useState([]);

  useEffect(() => {
    fetch("https://chef-server-almahfuz.vercel.app/AllData")
      .then((res) => res.json())
      .then((data) => setChefsItems(data))
      .catch((er) => console.error(er));
  }, []);

  return (
    <div>
      <div className="min-h-[calc(100vh-136px)]">
        <div
          className="bg-cover bg-center  max-h-screen h-screen text-white py-20 px-10  md:py-48   lg:py-48 object-fill bg-opacity-0.8 "
          style={{ backgroundImage: `url(${Banner2})` }}
        >
          <div className="md:w-1/2 2">
            {/* <p className="font-bold text-sm uppercase">Services</p> */}
            <p className="text-3xl font-bold">Started Kabab House</p>
            <p className="text-2xl mb-10 leading-none">
              <p className="pb-2 pt-1">Romanian Kabab Food House</p>
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
      </div>
      <div>
        <div className="container my-12 mx-auto px-4 md:px-12 text-center">
          <div className=" text-2xl md:text-4xl font-semibold">
            {" "}
            Chef's Profile
          </div>
          <div className="divider mx-auto w-2/4"></div>
        </div>

        <div className=" container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 items-center justify-center">
            {ChefsItems.map((chef) => (
              <Chefs key={chef.id} chef={chef}></Chefs>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-6 mt-5 my-12 mx-auto px-4 md:px-12 text-center">
          <div className=" text-2xl md:text-4xl font-semibold"> Recipe's Items</div>
          <div className="divider mx-auto w-2/4"></div>
        </div>

        <div className=" container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 items-center justify-center">
            {ChefsItems.map((chef) => (
              <RecipeHome key={chef.id} chef={chef}></RecipeHome>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-6 mt-5  mx-auto px-4  text-center">
          <div className=" text-2xl md:text-4xl font-semibold">Mission </div>
          <div className="divider mx-auto w-2/4"></div>
        </div>
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default Home;
