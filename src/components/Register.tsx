"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { api } from "~/trpc/react";
import { FaSpinner } from "react-icons/fa6";
import Login from "./Login";
import Navbar from "./Navbar";

function Register() {
  const [cred, setCred] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const registerUserMutation = api.auth.register.useMutation();

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
      await registerUserMutation.mutateAsync(cred);
      router.push("/VerifyEmail");
      setCred({ name: "", email: "", password: "" });
      toast.success("User created Successfully!");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log("Error Registering User", error);
      toast.error(error.shape.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="my-10 flex w-full items-center justify-center">
        <div className="h-full max-h-[691px] w-full max-w-[576px] rounded-[20px] border border-[#C1C1C1] p-14">
          <h1 className="text-center text-[32px] font-semibold">
            Create your account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="my-4 flex w-auto max-w-[456px] flex-col gap-y-1">
              <label htmlFor="" className="text-base font-normal">
                Name
              </label>
              <input
                name="name"
                value={cred.name}
                onChange={handleChange}
                type="text"
                required
                placeholder="Enter your name"
                className="rounded-md border border-[#C1C1C1] p-3"
              />
            </div>
            <div className="my-6 flex w-auto max-w-[456px] flex-col gap-y-1">
              <label htmlFor="" className="text-base font-normal">
                Email
              </label>
              <input
                name="email"
                value={cred.email}
                onChange={handleChange}
                type="email"
                required
                placeholder="Enter your email"
                className="rounded-md border border-[#C1C1C1] p-3"
              />
            </div>
            <div className="my-4 flex w-auto max-w-[456px] flex-col gap-y-1">
              <label htmlFor="" className="text-base font-normal">
                Password
              </label>
              <input
                name="password"
                value={cred.password}
                type="password"
                required
                onChange={handleChange}
                placeholder="Enter your password"
                className="rounded-md border border-[#C1C1C1] p-3"
              />
            </div>
            <div className="mt-10 w-auto">
              <button
                type="submit"
                className="h-full w-full max-w-[456px] rounded-md bg-black p-4 text-center text-base font-medium capitalize text-white"
              >
                {loading ? (
                  <FaSpinner className="mx-auto animate-spin" />
                ) : (
                  "CREATE ACCOUNT"
                )}
              </button>
            </div>
          </form>
          <div className="my-14 flex justify-center gap-x-2 text-center">
            <p className="text-base font-normal text-[#333333]">
              Have an Account?
            </p>
            <span
              onClick={() => router.push("/login")}
              className="cursor-pointer text-base font-medium capitalize text-black"
            >
              LOGIN
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
