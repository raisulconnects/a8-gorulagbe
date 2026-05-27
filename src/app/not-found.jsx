import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-green-950 via-green-900 to-emerald-800">
      <div className="text-center px-6 max-w-lg">
        <h1 className="text-7xl md:text-9xl font-extrabold text-yellow-400 mt-4">
          404
        </h1>
        <p className="text-3xl md:text-4xl font-extrabold text-white mt-2">
          Page Not Found
        </p>
        <p className="text-sm md:text-base mt-4 max-w-md mx-auto text-white">
          Oops! The page you are looking for has wandered off. It might have been eaten, lost, or never existed.
        </p>
        <Link
          href="/"
          className="btn btn-success text-white mt-8 gap-2"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
}
