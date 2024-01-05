import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Sojib from "../Sojib-sm-size.jpg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";
const Navbar = () => {
  const [isSideOpen, setMenu] = useState(false);
  const navLinks = [
    { label: "Collections", href: "#" },
    { label: "Men", href: "#" },
    { label: "Woman", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-6 lg:px-24">
        <div className="flex gap-10 items-center">
          <section className="flex gap-4 items-center">
            {/* Menu */}
            <FiMenu
              className="text-3xl cursor-pointer lg:hidden"
              onClick={() => setMenu(true)}
            />
            {/* Logo */}
            <div className="text-4xl">
              <a href={"/"}>logo </a>
            </div>
          </section>
          <div className="flex items-center gap-4 ">
            {navLinks.map((link, key) => (
              <div
                className=" text-2xl text-gray-400 hover:text-black hidden lg:block"
                key={key}
              >
                <a href={link.href}> {link.label} </a>
              </div>
            ))}
          </div>
        </div>

        <section>
          {/* mobile sidebar menu */}
          <div
            className={clsx(
              "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transform duration-1000 -translate-y-full transition-all",
              isSideOpen && "translate-y-0"
            )}
          >
            <section className="text-black bg-white flex-col absolute top-0 left-0 h-screen p-8 gap-8 z-50 flex w-1/3">
              <IoClose
                onClick={() => setMenu(false)}
                className="text-5xl my-4 cursor-pointer"
              />

              {navLinks.map((link, key) => (
                <div className="font-bold text-2xl" key={key}>
                  <a href={link.href}> {link.label} </a>
                </div>
              ))}
            </section>
          </div>
        </section>
        <section className="flex gap-4 items-center">
          {/* cart */}
          <AiOutlineShoppingCart className="text-3xl cursor-pointer" />
          <div>
            <img
              className=" w-8 rounded-full cursor-pointer"
              src={Sojib}
              alt="avatar"
            />
          </div>
        </section>
      </nav>
      <hr className="lg:mx-24" />
    </div>
  );
};

export default Navbar;
