import React from "react";
import Banner2 from "../images/Banner2.jpg";

const ChefCard = () => {
  return (
    <div>
      <div className="">
        <div className="m-auto w-full lg:max-w-full lg:flex md:w-9/12">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${Banner2})` }}
            title=""
          ></div>
          <div className="border border-l border-gray-400  lg:border-gray-400 bg-white rounded-b  p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
              recipe name
              </div>
              <p className="text-gray-700 text-base">
              "Low Carb • Sugar Conscious • Keto Friendly • Dairy Free • Peanut Free • Tree Nut Free • Soy Free • Fish Free • Shellfish Free • Pork Free • Crustacean Free • Celery Free • Mustard Free • Sesame Free • Lupine Free • Mollusk Free • Alcohol Free • Kosher"

              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">cooking Method</p>
                <p className="text-gray-600">rating</p>
                <p className="text-gray-600">Favorite button</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
