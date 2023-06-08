import React, { useEffect, useState } from "react";
import Banner2 from "../images/Banner2.jpg";
import { useLoaderData, useParams } from "react-router-dom";
import ChefCard from "../ChefCard/ChefCard";

const ChefBanner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  setLoading(true);
  setTimeout(()=>{
  setLoading(false);
  }, 3000)
  },[])

  const { id } = useParams();
  const chef = useLoaderData();
  //  console.log(chef.liked_items);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <button
            type="button"
            disabled=""
            className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-2 rounded border border-red-700 bg-red-700 px-3 py-2 text-sm font-medium text-white transition hover:border-red-800 hover:bg-red-800 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"
          >
            <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
              <path
                className="fill-blue-800"
                d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
              ></path>
              <path
                className="fill-blue-100"
                d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
              ></path>
            </svg>
            <span>Loading...</span>
          </button>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-136px)]">
          <div
            className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-opacity-0.8 "
            style={{ backgroundImage: `url(${Banner2})` }}
          >
            {" "}
            <div className="container mx-auto py-4 md:py-12 px-4 md:px-6 ">
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
                  <div className="md:w-1/2  mt-8 md:mt-0 flex justify-center md:justify-end">
                    <img
                      className="object-cover h-48 w-96"
                      src={chef.chef_photo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {chef.recipes.map((cards) => (
              <ChefCard key={chef.id} cards={cards}></ChefCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChefBanner;
