import React from "react";
import Card from "../Card";
import Link from "next/link";

const Submenu = ({ menu }) => {
  return (
    <div className="bg-[#ecf1f7] cursor-default w-full absolute left-0 top-full">
      <div key={menu?.submenu?.id} className="w-[1080px] mx-auto py-5">
        <h2 className="font-semibold text-2xl text-[#374659]">
          {menu?.submenu?.name}
        </h2>
        <p className="text-gray-600">{menu?.submenu?.desc}</p>

        <div className="flex justify-between my-5">
          <div className="grid flex-grow auto-rows-[minmax(4rem,min-content)] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {menu?.submenu?.cards?.map((card) => (
              <Link
                href={`/${menu?.name.toLowerCase()}/${card?.name?.toLowerCase().replaceAll(" ", "-")}`}
              >
                <Card {...card} />
              </Link>
            ))}
          </div>

          {menu?.submenu?.category && (
            <div className="ml-10">
              {menu?.submenu?.category?.name && (
                <p className="uppercase font-medium text-black">
                  {menu?.submenu?.category?.name}
                </p>
              )}
              <ul>
                {menu?.submenu?.category?.links?.map((link) => (
                  <Link
                    href={`/${menu?.name.toLowerCase()}/${link
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <li className="text-[#3f78c4] py-1 cursor-pointer">
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {menu?.submenu?.button ? (
          <button
            type="text"
            className="rounded-md text-white bg-[#ee8162] py-1 px-3 font-medium"
          >
            {menu?.submenu?.button}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Submenu;
