import Link from "next/link";
import AnimalCard from "./AnimalCard";
import { FaArrowRight } from "react-icons/fa";
import { featured } from "@/lib/utils";
import animals from "@/data/animals.json";

export default function FeaturedAnimals() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">
          Hand Picked
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          Featured Animals
        </h2>
        <p className="text-base-content/50 mt-2 max-w-md mx-auto text-sm">
          Top picks verified by our livestock experts for Qurbani
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured(animals).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/animals" className="btn btn-success text-white px-8 gap-2">
          View All Animals <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
