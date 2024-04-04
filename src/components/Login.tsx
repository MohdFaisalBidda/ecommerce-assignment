import React from "react";

function Login() {
  return (
    <div className="my-10 flex w-full items-center justify-center">
      <div className="h-full max-h-[691px] w-full max-w-[576px] rounded-[20px] border border-[#C1C1C1] p-14">
        <h1 className="mb-8 text-center text-[32px] font-semibold">Login</h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-1 text-center">
          <h2 className="text-2xl font-medium">Welcome back to ECOMMERCE</h2>
          <p className="text-base font-normal">
            The next gen business marketplace
          </p>
        </div>
        <div className="my-6 flex w-auto max-w-[456px] flex-col gap-y-1">
          <label htmlFor="" className="text-base font-normal">
            Email
          </label>
          <input
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
            type="password"
            placeholder="Enter your password"
            className="rounded-md border border-[#C1C1C1] p-3"
          />
          <p className="absolute right-4 top-10 cursor-pointer underline">
            Show
          </p>
        </div>
        <div className="mt-10 w-auto max-w-[456px] rounded-md bg-black p-4 text-center text-white">
          <button className="text-center text-base font-medium capitalize">
            LOGIN
          </button>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-x-2 gap-y-10 text-center">
          <div className="h-[1px] w-full bg-[#C1C1C1]" />
          <div className="flex justify-center gap-x-2 gap-y-10 text-center">
            <p className="text-base font-normal text-[#333333]">
              Don’t have an Account?
            </p>
            <span className="text-base font-medium capitalize text-black">SIGN UP</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
