import React, { useEffect, useState } from "react";
import Banner2 from "../images/Banner2.jpg";
import { useLoaderData, useParams } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";

const ChefBanner = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  // setLoading(true);
  // setTimeout(()=>{
  // setLoading(false);
  // }, 3000)
  // },[])

  const { id } = useParams();
  const chef = useLoaderData();
  //  console.log(chef.liked_items);
  return (
    <div className="min-h-[calc(100vh-136px)]">
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-opacity-0.8 "
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        {" "}
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6 ">
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 ">
            <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded">
              <div className="flex flex-col justify-center md:w-1/2 rounded">
                <h1 className="text-3xl  font-semibold text-gray-800 dark:text-white">
                  {chef.chef_Name}
                </h1>
                <div className="lg:text-xl text-gray-800 dark:text-white text-sm mt-2">
                  <div className="grid items-center justify-between leading-tight">
                    <div className=" text-black pt-1 text-sm">
                      Bio: {chef.chef_description}
                    </div>
                    <div className=" text-black pt-1 text-sm">
                      Years of experience {chef.year_experiences}
                    </div>
                    <div className=" text-black pt-1 text-sm">
                      Numbers of recipes:{chef.num_Recipe}
                    </div>
                    <div className=" text-black pt-1 text-sm">
                      Likes:{chef.liked_items}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img className="object-cover" src={chef.chef_photo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 md:p-12">
        {chef.recipes.map((cards) => (
          <ChefCard key={chef.id} cards={cards}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefBanner;
