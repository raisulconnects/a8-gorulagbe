"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaWeight, FaArrowRight } from "react-icons/fa";
import animals from "@/data/animals.json";
import { formatPrice } from "@/lib/utils";

export default function AnimalsPage() {
  const [sort, setSort] = useState("default");

  const sorted = [...animals].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
  });

  return (
    <>
      <section className="bg-green-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            All Animals
          </h1>
          <p className="text-gray-300">
            Browse our full collection of verified Qurbani animals. Filter by
            type and sort by price.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <select
              className="select select-bordered select-sm focus:outline-emerald-500"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sorted.map((animal) => (
            <div
              key={animal.id}
              className="card bg-base-100 shadow-md hover:shadow-xl border border-base-200 overflow-hidden group transition-all duration-300"
            >
              {/* Image */}
              <figure className="relative h-48 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Type badge */}
                <span className="absolute top-3 left-3 badge badge-success text-white font-semibold text-xs">
                  {animal.type}
                </span>
                {/* Category badge */}
                <span className="absolute top-3 right-3 badge badge-outline bg-base-100/80 text-xs">
                  {animal.category}
                </span>
              </figure>

              <div className="card-body p-5 gap-2">
                {/* Name & Breed */}
                <h2 className="card-title text-base font-bold leading-tight">
                  {animal.name}
                </h2>
                <p className="text-xs text-base-content/50 -mt-1">
                  Breed: {animal.breed}
                </p>

                {/* Info row */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-base-content/60 mt-1">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-emerald-500" />{" "}
                    {animal.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaWeight className="text-emerald-500" /> {animal.weight} kg
                  </span>
                  <span className="flex items-center gap-1">
                    🎂 {animal.age} {animal.age === 1 ? "yr" : "yrs"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-base-content/50 line-clamp-2 mt-1 leading-relaxed">
                  {animal.description}
                </p>

                {/* Divider */}
                <div className="divider my-1" />

                {/* Price + CTA */}
                <div className="card-actions justify-between items-center">
                  <div>
                    <p className="text-xs text-base-content/40 uppercase tracking-wide">
                      Price
                    </p>
                    <p className="text-lg font-extrabold text-emerald-600">
                      {formatPrice(animal.price)}
                    </p>
                  </div>
                  <Link
                    href={`/animals/${animal.id}`}
                    className="btn btn-success btn-sm text-white gap-1"
                  >
                    Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        )
      </section>
    </>
  );
}
