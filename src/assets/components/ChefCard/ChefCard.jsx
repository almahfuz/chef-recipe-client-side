import React, { useState } from "react";
import Banner2 from "../images/Banner2.jpg";
import { rankings } from "match-sorter";

const ChefCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  //   const handleTostify = ()=>{
  // toast('Recipe is your favorite')
  // setIsClicked(true);
  //   }

  console.log(props.cards.recipe_img);
  const { recipe_img, recipe_name, ingredients, cooking_method, rating } =
    props.cards;

  return (
    <div className="pe-10 ps-10 md:pe-10 md:ps-10 pt-5 pb-5">
      <div className="m-auto w-full lg:max-w-full lg:flex md:w-9/12">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${recipe_img})` }}
          title=""
        ></div>
        <div className="border border-l border-gray-400  lg:border-gray-400 bg-white rounded-b  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {recipe_name}
            </div>
            <p className="text-gray-700 text-base">{ingredients}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{cooking_method}</p>
              <p className="text-gray-600">rating: {rating}</p>
              <p className="text-gray-600">Favorite button</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
