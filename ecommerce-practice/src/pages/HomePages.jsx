import Header from "../components/Header";
import Card from "../components/Card";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function HomePages() {
  return (
    <>
      <Header />

      <div className="p-10">
        <div className="flex justify-center">
          <div className="flex border-2 border-grey bg-gray-50 pl-2 rounded-xl w-80">
            <div className="flex items-center">
              <BsSearch className="text-2xl" />
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-full p-4 pl-10 text-sm text-gray-900 focus:border-grey focus:border-0  rounded-lg bg-gray-50 "
              placeholder="Search ..."
              value={""}
            />
          </div>
        </div>

        <div className="mt-10">
          <div className=" grid grid-cols-4 gap-2">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
