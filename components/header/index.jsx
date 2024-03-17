"use client";
import { menus } from "@/constants/header-data";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Submenu from "./Submenu";
import Link from "next/link";

// demo
// https://blog.hubspot.com/website/3d-websites

const Header = () => {
  const [submenuId, setSubmenuId] = useState(0);

  return (
    <header className="relative">
      <nav className="md:max-w-[1080px] flex items-center gap-12 mx-auto">
        <h1 className="font-semibold text-lg">
          <Link href={"/"}>
            <span className="text-[#374659]">NEXT</span>
            <span className="text-[#ee8162]">LEVEL</span>
          </Link>
        </h1>

        <div className="flex items-center">
          {menus?.map((menu) => (
            <div
              onMouseEnter={() =>
                setSubmenuId(menu.submenu ? menu.submenu.id : null)
              }
              onMouseLeave={() => setSubmenuId(null)}
              key={menu.id}
              className="flex items-center gap-1 cursor-pointer py-6 px-6 hover:underline hover:text-[#537aac] border-black hover:border-b-2"
            >
              <p className="font-medium">
                {!submenuId ? (
                  <Link href={`/${menu.name.toLowerCase()}`}>{menu.name}</Link>
                ) : (
                  menu.name
                )}
              </p>

              {menu.submenu ? (
                <>
                  <IoIosArrowDown />
                  {menu.submenu && menu.submenu.id == submenuId && (
                    <Submenu menu={menu} />
                  )}
                </>
              ) : null}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
