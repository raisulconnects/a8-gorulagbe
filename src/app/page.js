import HeroSection from "@/components/HeroSection";
import FeaturedAnimals from "@/components/FeaturedAnimals";

const tips = [
  {
    icon: "🩺",
    title: "Health Check",
    desc: "Always have a vet inspect the animal before purchasing to ensure it is healthy and fit for Qurbani.",
  },
  {
    icon: "⚖️",
    title: "Verify the Weight",
    desc: "Double-check the seller's claimed weight using a certified digital scale before finalizing the deal.",
  },
  {
    icon: "📋",
    title: "Valid Documents",
    desc: "Collect the vaccination certificate and purchase receipt from the seller for your records.",
  },
  {
    icon: "🚚",
    title: "Transport Ready",
    desc: "Arrange a suitable vehicle before pickup. Make sure the animal travels comfortably and safely.",
  },
];

const breeds = [
  {
    name: "Shahiwal",
    origin: "Pakistan / India",
    type: "Cow",
    tag: "Premium Meat",
  },
  {
    name: "Black Bengal",
    origin: "Bangladesh",
    type: "Goat",
    tag: "Local Breed",
  },
  { name: "Frisian Cross", origin: "Europe", type: "Cow", tag: "Large Size" },
  { name: "Jamunapari", origin: "India", type: "Goat", tag: "High Weight" },
  { name: "Hariana", origin: "India", type: "Bull", tag: "Shared Qurbani" },
  {
    name: "Deshi Khasi",
    origin: "Bangladesh",
    type: "Goat",
    tag: "Budget Pick",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Featured Animals ── */}
      <FeaturedAnimals />

      {/* ── Qurbani Tips ── */}
      <section className="bg-green-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
              Helpful Advice
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Qurbani Tips
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Keep these important points in mind for a smooth Qurbani
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Breeds ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">
            Breed Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            Top Breeds
          </h2>
          <p className="text-base-content/50 mt-2 text-sm max-w-md mx-auto">
            The most popular and trusted breeds for Qurbani
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {breeds.map((breed) => (
            <div
              key={breed.name}
              className="bg-base-100 border border-base-200 rounded-2xl p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-2">
                {breed.type === "Goat" ? "🐐" : "🐄"}
              </div>
              <h4 className="font-bold text-sm">{breed.name}</h4>
              <p className="text-xs text-base-content/50 mt-1">
                {breed.origin}
              </p>
              <span className="inline-block mt-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full">
                {breed.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
