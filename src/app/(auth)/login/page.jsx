"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCow } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("Submitting login form: ", form);

    const { error } = await authClient.signIn.email({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setError(error.message || "Invalid email or password.");
      setLoading(false);
      return;
    }

    toast.success("Logged in successfully!");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-950 via-green-900 to-emerald-800 flex items-center justify-center px-4 py-16">
      <div className="card bg-base-100 shadow-2xl w-full max-w-md">
        <div className="card-body p-8">
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="bg-emerald-600 text-white p-3 rounded-2xl">
              <FaCow size={28} />
            </div>
            <h1 className="text-2xl font-extrabold text-emerald-600">
              GoruLagbe
            </h1>
            <p className="text-base-content/50 text-sm">
              Sign in to your account
            </p>
          </div>

          {error && (
            <div className="alert alert-error text-sm py-2 mb-4">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered focus:input-success w-full"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered focus:input-success w-full"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-success text-white w-full mt-2 ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-base-content/50 mt-6">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="text-emerald-600 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
