"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaCow } from "react-icons/fa6";
import animals from "@/data/animals.json";
import { formatPrice } from "@/lib/utils";

export default function AnimalDetailsPage({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const animal = animals.find((a) => a.id === parseInt(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    toast.success(`Successfully purchased ${animal.name}! We'll contact you shortly.`, {
      style: { background: "#14532d", color: "#fff", fontWeight: "600" },
      iconTheme: { primary: "#4ade80", secondary: "#14532d" },
      duration: 4000,
    });

    setForm({ name: "", email: "", phone: "", address: "" });
    setLoading(false);

    setTimeout(() => router.push("/animals"), 3000);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-green-950 to-emerald-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">{animal.name}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-80 md:h-96">
              <img
                src={animal.image}
                alt={"animal"}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 badge badge-success text-white font-semibold px-3 py-1">
                {animal.type}
              </span>
              <span className="absolute top-4 right-4 badge bg-yellow-400 text-green-950 font-bold border-0 px-3 py-1">
                {animal.category}
              </span>
            </div>

            <div className="card bg-base-100 border border-base-200 shadow-md mt-6">
              <div className="card-body p-6 gap-4">
                <h2 className="text-2xl font-extrabold">{animal.name}</h2>
                <p className="text-3xl font-extrabold text-emerald-600">
                  {formatPrice(animal.price)}
                </p>
                <div className="space-y-2 text-sm text-base-content/70 leading-relaxed">
                  <p>{animal.description}</p>
                  <p>
                    This is a{" "}
                    <span className="font-semibold text-base-content">
                      {animal.age}-year-old
                    </span>{" "}
                    {animal.breed} {animal.type.toLowerCase()} weighing
                    approximately{" "}
                    <span className="font-semibold text-base-content">
                      {animal.weight} kg
                    </span>
                    , located in{" "}
                    <span className="font-semibold text-base-content">
                      {animal.location}
                    </span>
                    . Listed under{" "}
                    <span className="font-semibold text-base-content">
                      {animal.category}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card bg-base-100 border border-base-200 shadow-md sticky top-6">
              <div className="card-body p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-emerald-600 text-white p-2 rounded-xl">
                    <FaCow size={18} />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold">Book This Animal</h2>
                    <p className="text-xs text-base-content/50">
                      Fill in your details to confirm booking
                    </p>
                  </div>
                </div>

                <div className="divider my-1" />

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered focus:input-success w-full"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered focus:input-success w-full"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered focus:input-success w-full"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="address"
                    placeholder="Delivery Address"
                    className="textarea textarea-bordered focus:textarea-success w-full resize-none"
                    rows={3}
                    value={form.address}
                    onChange={handleChange}
                    required
                  />

                  <div className="flex justify-between items-center px-1">
                    <span className="text-sm text-base-content/50">Total</span>
                    <span className="text-lg font-extrabold text-emerald-600">
                      {formatPrice(animal.price)}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn btn-success text-white w-full font-bold ${loading ? "loading" : ""}`}
                  >
                    {loading ? "Processing..." : "Confirm Booking"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
