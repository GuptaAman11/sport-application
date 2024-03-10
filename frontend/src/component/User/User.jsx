import React from "react";
//import { useGetAllUser } from "../../Hooks/getAllUser";
import FilterLoc from "../FilterLocation/FilterLoc";
import { useGetProfile } from "../../Hooks/getProfile";
import { Link } from "react-router-dom";
import FilterName from "../FilterLocation/FilterName";
const User = () => {
  const { data } = useGetProfile();
  console.log("this is data", data);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="my-8">
        <FilterLoc data={data} />
      </div>
    </>
  );
};

export default User;
