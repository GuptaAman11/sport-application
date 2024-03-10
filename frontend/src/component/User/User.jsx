import React from "react";
import { useGetProfile } from "../../Hooks/getProfile";
import { Link } from "react-router-dom";
const User = () => {
  const { data } = useGetProfile();
  console.log("this is data", data)

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="pt-10 pr-10 pb-50 pl-10 grid grid-cols-1 sm:grid-cols-3 ">
        {data? (
          data.map((data) => (
            <div
              key={data._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
            >
              <div class="flex justify-end px-4 pt-4"></div>
              <div class="flex flex-col items-center pb-10">
                <Link to={`getuser/${data._id}`}>
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                {data.name}
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white"></h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Kabaddi PLayer
                </span>
                </Link>
                <div class="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Skill-Intermediate
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Location
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </>
  );
};

export default User;
