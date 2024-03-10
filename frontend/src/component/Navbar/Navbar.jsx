import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div class="sm:flex space-x-8 rtl:space-x-reverse grid grid-cols-1">
            <NavLink
              to="/"
              class="py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              activeClassName="text-white bg-blue-700"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              class="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              activeClassName="text-blue-700"
            >
              About
            </NavLink>
            <NavLink
              to="/"
              class="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              activeClassName="text-blue-700"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              class="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              activeClassName="text-blue-700"
            >
              Register
            </NavLink>
            <NavLink
              to="/getallevent"
              class="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              activeClassName="text-blue-700"
            >
              Get-All-event
            </NavLink>
            <NavLink
              to="/getuser"
              class="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              activeClassName="text-blue-700"
            >
              Players
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
