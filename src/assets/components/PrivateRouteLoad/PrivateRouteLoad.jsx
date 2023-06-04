import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouteLoad = () => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* <!-- Outer Ring-->  text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200*/}
          <div className="w-16 h-16 rounded-full absolute border-4 border-solid border-gray-200"></div>
          {/* <!-- Inner Ring --> */}
          <div className="w-16 h-16 rounded-full animate-spin absolute border-4 border-solid border-neutral-900  border-t-transparent"></div>
        </div>
      </div>
    );
  }

  //   if () {
  //     return children;
  //   }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRouteLoad;
