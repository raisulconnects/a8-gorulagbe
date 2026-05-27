"use client";
import "animate.css";

import Link from "next/link";
import { FaCow } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      {/* Left */}
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-emerald-600 animate__bounceIn"
        >
          <FaCow />
          <span className="font-bold ">GoruLagbe</span>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/animals">All Animals</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        <Link href="/login" className="btn btn-outline btn-sm">
          Login
        </Link>

        <Link href="/register" className="btn btn-success btn-sm text-white">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
