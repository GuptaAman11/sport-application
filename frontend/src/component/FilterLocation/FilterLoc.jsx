import React, { useState } from "react";
import { Link } from "react-router-dom";

const FilterLoc = ({ data }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    const text = e.target.value;
    setFilterText(text);
  };

  // Filter the data based on the entered text
  const filteredData = data.filter(
    (item) =>
      item.name?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.city?.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <div className="mt-20 ">
        <div className="m-2 fixed">
          <label htmlFor="locationFilter" className="text-white">
            Filter by name or location:
          </label>
          <input
            className="w-40"
            type="text"
            id="locationFilter"
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Enter name or location"
          />
        </div>

        <div className="pt-10 pr-10 pb-50 pl-10  grid grid-cols-1 sm:grid-cols-3">
          {/* Display the filtered data */}

          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item._id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 sm:m-2"
              >
                <div class="flex justify-end px-4 pt-4"></div>
                <div class="flex flex-col items-center pb-10">
                  <Link to={`getuser/${item._id}`}>
                    <img
                      class="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9mzAn2fKL6FDFbOrAfqCnhdD1ZVbBqBssLwn1SpRYk1dvErk2DORxqM5zZm-zAchUZU&usqp=CAU"
                      alt="Bonnie image"
                    />

                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
                      {item.name}
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      {item.interestedSports}
                    </span>
                  </Link>
                  <div class="flex mt-4 md:mt-6">
                    <a
                      href="#"
                      class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      {item.skillLevel}
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
                      {item.city}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>loading</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterLoc;
