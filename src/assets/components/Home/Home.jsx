import React, { useContext, useEffect, useState } from "react";
import Banner2 from "../images/Banner2.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  const [ChefsItems, setChefsItems] = useState([]);

  useEffect(() => {
    fetch("https://chef-server-almahfuz.vercel.app/AllData")
      .then((res) => res.json())
      .then((data) => setChefsItems(data))
      .catch((er) => console.error(er));
  }, []);

  // console.log(Chefs)
  return (
    <div className="min-h-[calc(100vh-136px)]">
      <div
        className="bg-cover bg-center  h-auto text-white py-20 px-10 object-fill bg-opacity-0.8 "
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
      <div className=" container my-12 mx-auto px-4 md:px-12">
       <div className="flex flex-wrap -mx-1 lg:-mx-4">
       {
          ChefsItems.map(chef => <Chefs
          key= {chef.id}
          chef={chef}>

          </Chefs>)
        }
       </div>
      </div>
      
    </div>
  );
};

export default Home;
