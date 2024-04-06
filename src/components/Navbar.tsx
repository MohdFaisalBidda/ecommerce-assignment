"use client";
import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { deleteLocalStorageKeyValue } from "~/utils/localstorage";
import { useRouter } from "next/navigation";

function Navbar() { 
  const router =useRouter()
  return (
    <>
      <div className="flex h-[100px] w-full flex-col justify-between bg-white py-4 lg:px-16">
        <div className="flow-row flex h-9 px-16 lg:px-0">
          <ul className="flex w-full items-center justify-end gap-x-10">
            <li className="text-xs font-normal">Help</li>
            <li className="text-xs font-normal">Orders & Returns</li>
            <li onClick={()=>{
              deleteLocalStorageKeyValue("user")
              router.push("/login")
            }} className="text-xs font-normal">
              Hi,John
            </li>
          </ul>
        </div>
        <div className="flex h-full items-center justify-between px-4 pt-4 lg:px-0">
          <h1 className="text-[32px] font-bold capitalize">Ecommerce</h1>
          <ul className="hidden gap-x-10 lg:flex">
            <li className="text-base font-semibold ">Categories</li>
            <li className="text-base font-semibold ">Sale</li>
            <li className="text-base font-semibold ">Clearance</li>
            <li className="text-base font-semibold ">New stock</li>
            <li className="text-base font-semibold ">Trending</li>
          </ul>
          <div className="flex gap-x-10">
            <div className="h-[32px] w-[32px]">
              <FiSearch color="#333333" className="h-[19.5px] w-[21.75px]" />
            </div>
            <div className="h-[32px] w-[32px]">
              <LuShoppingCart
                color="#333333"
                className="h-[19.5px] w-[21.75px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-9 items-center justify-center gap-x-6 bg-[#F4F4F4] lg:px-16">
        <MdOutlineKeyboardArrowLeft className="h-5 w-5" />
        <p className="text-sm font-medium">Get 10% off on business sign up</p>
        <MdOutlineKeyboardArrowRight className="h-5 w-5" />
      </div>
    </>
  );
}

export default Navbar;
