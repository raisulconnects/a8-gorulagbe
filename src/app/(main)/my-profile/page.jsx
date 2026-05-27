"use client";

import { useState } from "react";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const [form, setForm] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-600" />
      </div>
    );
  }

  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name: form.name || undefined,
      image: form.image || undefined,
    });

    if (error) {
      toast.error(error.message || "Update failed.");
      setLoading(false);
      return;
    }

    toast.success("Profile updated!", {
      style: { background: "#14532d", color: "#fff", fontWeight: "600" },
      iconTheme: { primary: "#4ade80", secondary: "#14532d" },
    });

    setForm({ name: "", image: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200/40 py-16 px-4">
      <Toaster position="top-center" />

      <div className="max-w-md mx-auto card bg-base-100 shadow-lg border border-base-200">
        <div className="card-body p-8 flex flex-col items-center text-center gap-4">
          {/* Avatar */}
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover "
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-emerald-500">
              No Image
            </div>
          )}

          <div>
            <h1 className="text-2xl font-extrabold">
              {user?.name}
            </h1>
            <p className="text-base-content/50 text-sm flex items-center justify-center gap-1 mt-1">
              {user?.email}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <input
              type="text"
              placeholder={`Name (current: ${user?.name})`}
              className="input w-full "
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="url"
              placeholder="New Photo URL"
              className="input w-full"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-success text-white w-full font-bold ${loading ? "loading" : ""}`}
            >
              {loading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
