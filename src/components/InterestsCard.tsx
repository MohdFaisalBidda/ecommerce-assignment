"use client";

import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { api } from "~/trpc/react";
import {
  getLocalStorageKeyValue,
  setLocalStorageKeyValue,
} from "~/utils/localstorage";

function InterestsCard() {
  const user = getLocalStorageKeyValue("user");
  const userEmail = user?.email;

  // Load the checked items for the current user from localStorage
  const storedCheckedItems = getLocalStorageKeyValue(userEmail) || {};
  console.log(storedCheckedItems);
  

  const data = [
    { title: "Wireless Bluetooth Earbuds" },
    { title: "Portable External Hard Drive 1TB" },
    { title: "Smart LED TV 50 inches" },
    { title: "Foldable Electric Scooter" },
    { title: "Wireless Charging Pad" },
    { title: "Smartphone Gimbal Stabilizer" },
    { title: "Noise Cancelling Headphones" },
    { title: "Digital SLR Camera Kit" },
    { title: "Fitness Tracker Watch" },
    { title: "Wireless Gaming Mouse" },
    { title: "Waterproof Bluetooth Speaker" },
    { title: "Electric Toothbrush with UV Sanitizer" },
    { title: "Robot Vacuum Cleaner" },
    { title: "Portable Power Bank 20000mAh" },
    { title: "Mini Drone with HD Camera" },
    { title: "Bluetooth Karaoke Microphone" },
    { title: "Home Security Camera System" },
    { title: "Smart Thermostat" },
    { title: "Instant Pot Pressure Cooker" },
    { title: "Wireless Keyboard and Mouse Combo" },
    { title: "Noise Cancelling Earplugs" },
    { title: "Solar Powered Outdoor Lights" },
    { title: "Smart Doorbell with Camera" },
    { title: "Wireless Charging Car Mount" },
    { title: "Hydroponic Indoor Garden Kit" },
    { title: "Foldable Laptop Stand" },
    { title: "Portable Espresso Maker" },
    { title: "Fitness Resistance Bands Set" },
    { title: "Cordless Electric Kettle" },
    { title: "LED Ring Light with Tripod Stand" },
    { title: "Smart WiFi Light Bulb" },
    { title: "Portable Bluetooth Printer" },
    { title: "Virtual Reality Headset" },
    { title: "Mini Projector with Screen" },
    { title: "Waterproof Action Camera" },
    { title: "Wireless Meat Thermometer" },
    { title: "Electric Wine Opener" },
    { title: "Massage Gun for Athletes" },
    { title: "Air Purifier with HEPA Filter" },
    { title: "Portable Blender for Smoothies" },
    { title: "Smart Wi-Fi Plug" },
    { title: "Collapsible Camping Lantern" },
    { title: "Wireless Bicycle Computer" },
    { title: "GPS Pet Tracker Collar" },
    { title: "Fitness Exercise Ball" },
    { title: "Digital Food Kitchen Scale" },
    { title: "Bluetooth FM Transmitter for Car" },
    { title: "Mini Portable Air Conditioner" },
  ];

  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageNumClick = (page: number) => {
    setCurrPage(page);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          className={`rounded-md px-2 text-xl font-medium ${currPage === i ? "text-black" : "text-[#ACACAC]"}`}
          onClick={() => handlePageNumClick(i)}
        >
          {i}
        </button>,
      );
    }
    return pagination;
  };

  const [checkedItemsPerPage, setCheckedItemsPerPage] = useState(() => {
    const storedCheckedItemsPerPage =
      getLocalStorageKeyValue(user?.email) || {};
    return storedCheckedItemsPerPage;
  });

  useEffect(() => {
    setLocalStorageKeyValue(
      user?.email,
      JSON.stringify(checkedItemsPerPage),
    );
  }, [checkedItemsPerPage]);

  const handleCheckboxChange = (index: number) => {
    setCheckedItemsPerPage((prevState) => {
      const currentPageCheckedItems = [
        ...(prevState[currPage] || Array(itemsPerPage).fill(false))
      ];
      currentPageCheckedItems[index] = !currentPageCheckedItems[index];
      
      // Update the checked items for the current page
      const updatedState = { ...prevState, [currPage]: currentPageCheckedItems };
      
      // Update the checked items for the current user in localStorage
      setLocalStorageKeyValue(userEmail, JSON.stringify(updatedState));
      
      return updatedState;
    });
  };


  const renderItems = () => {
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((item, i) => (
      <li className="relative flex items-center gap-x-2" key={i}>
        <input
          type="checkbox"
          id={`checkbox-${i}`}
          className={`h-6 w-6 appearance-none rounded border border-gray-300 ${
            checkedItemsPerPage[currPage] && checkedItemsPerPage[currPage][i]
              ? "bg-black checked:border-transparent checked:bg-black"
              : "bg-[#CCCCCC] checked:border-transparent"
          } focus:outline-none`}
          onChange={() => handleCheckboxChange(i)}
          checked={
            checkedItemsPerPage[currPage]?.[i] || false
          }
        />
        {checkedItemsPerPage[currPage] && checkedItemsPerPage[currPage][i] && (
          <div className="absolute left-0 top-0 flex items-center justify-center">
            <IoMdCheckmark className="h-6 w-6 text-white" />
          </div>
        )}
        <span className="text-base font-normal text-black">{item.title}</span>
      </li>
    ));
  };

  return (
    <div className="my-10 flex w-full items-center justify-center">
      <div className="h-full max-h-[691px] w-full max-w-[576px] overflow-y-hidden rounded-[20px] border border-[#C1C1C1] p-14">
        <h1 className="mb-6 text-center text-[32px] font-semibold">
          Please mark your interests!
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-1 text-center">
          <p className="text-base font-normal">We will keep you notified.</p>
        </div>
        <div className="my-10">
          <h2 className="text-xl font-medium">My saved interests!</h2>
          <ul className="my-6 space-y-4">{renderItems()}</ul>
        </div>
        <div className="flex items-center">
          <span className="text-[#ACACAC]">{`<<<`}</span>
          {renderPagination()}
          <span className="text-[#ACACAC]">{`>>>`}</span>
        </div>
      </div>
    </div>
  );
}

export default InterestsCard;
