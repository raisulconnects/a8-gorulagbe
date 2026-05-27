import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight, FaMapMarkerAlt, FaWeight } from "react-icons/fa";

export default function AnimalCard({ animal }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-base-200">
      <figure className="relative h-52 overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 badge badge-success text-white font-semibold">
          {animal.type}
        </span>
      </figure>
      <div className="card-body p-5">
        <h3 className="card-title text-base font-bold">{animal.name}</h3>
        <div className="flex flex-wrap gap-3 text-xs text-base-content/60">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-emerald-500" /> {animal.location}
          </span>
          <span className="flex items-center gap-1">
            <FaWeight className="text-emerald-500" /> {animal.weight} kg
          </span>
        </div>
        <div className="card-actions justify-between items-center mt-3">
          <span className="text-lg font-extrabold text-emerald-600">
            {formatPrice(animal.price)}
          </span>
          <Link
            href={`/animals/${animal.id}`}
            className="btn btn-success btn-sm text-white gap-1"
          >
            Details <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
