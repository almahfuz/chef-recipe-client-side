import React from "react";

const RecipeHome = (props) => {
  // const { recipe_img, recipe_name, ingredients, cooking_method, rating } =
  // props.chef.recipes;
  console.log(props.chef.recipes);
  return (
    <>
      {props.chef.recipes.slice(0,1).map((recipe) => {
        return (
          <div key={recipe.id} className="my-1 mx-4 px-1 max-w-full md:w-1/2 lg:my-3 lg:px-2 lg:w-1/4 duration-300 hover:-translate-y-1">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <div>
                <img
                  alt="Placeholder"
                  className="block w-96 object-cover h-48"
                  src={recipe.recipe_img}
                />
              </div>

              <div className="grid items-center justify-between leading-tight p-4 md:p-5">
                <div className="text-lg">
                  <div className=" text-black font-semibold">{recipe.recipe_name}</div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default RecipeHome;
