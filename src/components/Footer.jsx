import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            GoruLagbe
          </h2>

          <p className="text-sm text-gray-300 max-w-[350px]">
            Trusted Online Shop for Purchasing Animals in Bangladesh. We provide a wide variety of animals, including cows, goats, sheep, and more.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/animals">All Animals</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <div className="space-y-2 text-gray-300">
            <p>Email: support@gorulagbe.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="flex gap-4 text-2xl mt-5">
            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © 2026 GoruLagbe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
