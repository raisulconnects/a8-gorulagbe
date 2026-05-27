"use client";
import { authClient, useSession } from "@/lib/auth-client";
import "animate.css";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCow } from "react-icons/fa6";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const { data, error, isPending } = useSession();

  // console.log(data);
  // console.log("Username: ", data?.user?.name);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!");
    router.replace("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-emerald-600 animate__bounceIn"
        >
          <FaCow />
          <span className="font-bold ">GoruLagbe</span>
        </Link>
      </div>

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

      {isPending ? (
        <div className="navbar-end">
          <span className="text-sm text-gray-500">Loading...</span>
        </div>
      ) : data?.user ? (
        <div className="navbar-end gap-2">
          <span className="text-sm text-gray-500">
            Welcome, {data.user.name}
          </span>

          <span
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
            onClick={() => router.push("/my-profile")}
          >
            <img
              src={data.user.image || "/default-avatar.png"}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </span>

          <button
            className="btn btn-primary btn-sm text-white"
            onClick={() => router.push("/my-profile")}
          >
            My Profile
          </button>
          <button
            onClick={handleLogout}
            className="btn btn-error btn-sm text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-2">
          <Link href="/login" className="btn btn-outline btn-sm">
            Login
          </Link>

          <Link href="/register" className="btn btn-success btn-sm text-white">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
