import "animate.css";
import Link from "next/link";
import { FaCow } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full flex flex-col md:flex-row items-center gap-14">
        {/* Left side er text gula */}
        <div className="flex-1 text-center md:text-left md:animate__tada">
          <span className="inline-block bg-yellow-400/15 text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-yellow-400/25 ">
            🌙 Qurbani Eid Special 2026
          </span>
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Your Trusted <br />
              <span className="text-yellow-400">Qurbani Marketplace</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-md leading-relaxed mb-10 ">
              Browse and book your Qurbani animals from the comfort of your
              home. Easy booking, safe transactions, nationwide delivery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/animals"
              className="btn btn-warning btn-lg font-bold gap-2 text-green-950"
            >
              <FaCow /> Browse All Animals
            </Link>
            <Link
              href="/register"
              className="btn btn-outline border-white/30 text-white hover:bg-white/10 btn-lg"
            >
              Register Free
            </Link>
          </div>

          <div className="flex gap-10 mt-12 justify-center md:justify-start">
            {[
              { val: "500+", label: "Animals Listed" },
              { val: "12+", label: "Districts Covered" },
              { val: "100%", label: "Verified Sellers" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-yellow-400">
                  {s.val}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side er jinish gula */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[400px]">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl" />
            <img
              src="https://www.bssnews.net/assets/news_photos/2026/05/12/image-386402-1778589507.jpg"
              alt="Qurbani cow"
              className="relative z-5 rounded-3xl shadow-2xl border-4 border-yellow-400/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
