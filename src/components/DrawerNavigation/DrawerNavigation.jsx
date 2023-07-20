"use client";
import React, { useState } from 'react';
import Header from '../Header/Header';

const DrawerNavigation = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);

    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <ul className=" px-10 p-4 w-80 lg:h-full  bg-gray-900 text-white text-lg">
        {/* Sidebar content here */}
        <div className='lg:hidden'>
        <Header></Header>
        </div>
        <div className="w-[200px] mb-10 h-[47px] flex items-center justify-center text-black text-xl rounded-lg mx-auto cursor-pointer bg-gray-100">
          + New Item
        </div>
        <li
          className={`relative px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer`}
          onClick={handleDropdownToggle}
        >
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <rect
                x="3"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <rect
                x="3"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <rect
                x="10.5"
                y="10.5"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <rect
                x="10.5"
                y="3"
                width="4.5"
                height="4.5"
                rx="1"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>

            <span className="ml-3 "> Dashboard</span>
          </p>
        </li>
        <ul
          className={` w-full ${
            isDropdownOpen ? "block" : "hidden"
          }  text-white py-2 px-4 rounded-lg mt-1 space-y-4`}
        >
          <li>
            <a href="#">Commarce</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">Cyrpto</a>
          </li>
          <li>
            <a href="#">Helpdesk</a>
          </li>
          <li>
            <a href="#">Monitoring</a>
          </li>
          <li>
            <a href="#">Fitnes</a>
          </li>
        </ul>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Application</span>
        </li>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Elements</span>
        </li>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Forms</span>
        </li>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Plugins</span>
        </li>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Elements</span>
        </li>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Datagrid</span>
        </li>
        <li className=" flex gap-3 items-center px-1 py-3 w-full border border-b-2 border-b-black border-gray-900  text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect
              x="3"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="3"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="10.5"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <rect
              x="10.5"
              y="3"
              width="4.5"
              height="4.5"
              rx="1"
              stroke="white"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
          <span>Settings</span>
        </li>
        
      </ul>
    );
};

export default DrawerNavigation;