"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "~/trpc/react";
import { FaSpinner } from "react-icons/fa6";
import { AuthContext } from "~/contexts/AuthContext";
import Navbar from "./Navbar";

function Login() {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const loginUserMutation = api.auth.login.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log(cred);
      setLoading(true);
      const userData = await loginUserMutation.mutateAsync(cred);
      toast.success("User logged in Successfully!");
      login(userData);
      if (typeof window === "undefined") return null;
      localStorage.setItem("user", JSON.stringify(userData));
      setCred({ email: "", password: "" });
      router.push("/");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.error(error.shape.message);
    }
  };

  return (
    <>
    <Navbar />
    <div className="my-10 flex w-full items-center justify-center">
      <div className="h-full max-h-[691px] w-full max-w-[576px] rounded-[20px] border border-[#C1C1C1] p-14">
        <h1 className="mb-8 text-center text-[32px] font-semibold">Login</h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-1 text-center">
          <h2 className="text-2xl font-medium">Welcome back to ECOMMERCE</h2>
          <p className="text-base font-normal">
            The next gen business marketplace
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="my-6 flex w-auto max-w-[456px] flex-col gap-y-1">
            <label htmlFor="" className="text-base font-normal">
              Email
            </label>
            <input
              name="email"
              value={cred.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="rounded-md border border-[#C1C1C1] p-3"
            />
          </div>
          <div className="relative my-4 flex w-auto max-w-[456px] flex-col gap-y-1">
            <label htmlFor="" className="text-base font-normal">
              Password
            </label>
            <input
              name="password"
              value={cred.password}
              onChange={handleChange}
              type={hide ? "password" : "text"}
              placeholder="Enter your password"
              className="rounded-md border border-[#C1C1C1] p-3"
            />
            <p
              onClick={() => setHide(!hide)}
              className="absolute right-4 top-10 cursor-pointer underline"
            >
              Show
            </p>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="w-full max-w-[456px] rounded-md bg-black p-4 text-center text-base font-medium capitalize text-white"
            >
              {loading ? (
                <FaSpinner className="mx-auto animate-spin" />
              ) : (
                "LOGIN"
              )}
            </button>
          </div>
        </form>
        <div className="mt-10 flex flex-col justify-center gap-x-2 gap-y-10 text-center">
          <div className="h-[1px] w-full bg-[#C1C1C1]" />
          <div className="flex justify-center gap-x-2 gap-y-10 text-center">
            <p className="text-base font-normal text-[#333333]">
              Don’t have an Account?
            </p>
            <span
              onClick={() => router.push("/register")}
              className="cursor-pointer text-base font-medium capitalize text-black"
            >
              SIGN UP
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
