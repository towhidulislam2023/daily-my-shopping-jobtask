/* eslint-disable @next/next/no-img-element */
"use client";
import { FaBars } from "react-icons/fa";
import DrawerNavigation from "../../components/DrawerNavigation/DrawerNavigation";
import Header from "../../components/Header/Header";
import OrderList from "../../components/OrderList/OrderList";
import Stat from "../../components/Stat/Stat";
import SubHeader from "../../components/SubHeader/SubHeader";
import FirstForm from "../../components/FristForm/FristForm";
import SecondForm from '../../components/SecondForm/SecondForm';
import React, { useState } from "react";
const Dashboard = () => {
  return (
    <div>
      <div className=" bg-gray-900 h-12 flex items-center lg:block px-2">
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden text-white"
        >
          <FaBars className="text-3xl text-white"></FaBars>
        </label>
        <div className="hidden lg:block">
          <Header></Header>
        </div>
      </div>
      <div className="drawer lg:drawer-open bg-[#dbdbdb] ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <SubHeader></SubHeader>
          <Stat></Stat>
          <OrderList></OrderList>
          <FirstForm></FirstForm>
         <SecondForm></SecondForm>
        </div>
        <div className="drawer-side h-screen">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <DrawerNavigation></DrawerNavigation>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
