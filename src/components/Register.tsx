import React from "react";

function Register() {
  return (
    <div className="my-10 flex w-full items-center justify-center">
      <div className="h-full max-h-[691px] w-full max-w-[576px] rounded-[20px] border border-[#C1C1C1] p-14">
        <h1 className="text-center text-[32px] font-semibold">
          Create your account
        </h1>
        <div className="my-4 flex w-auto max-w-[456px] flex-col gap-y-1">
          <label htmlFor="" className="text-base font-normal">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-md border border-[#C1C1C1] p-3"
          />
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
        <div className="my-4 flex w-auto max-w-[456px] flex-col gap-y-1">
          <label htmlFor="" className="text-base font-normal">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="rounded-md border border-[#C1C1C1] p-3"
          />
        </div>
        <div className="mt-10 w-auto max-w-[456px] rounded-md bg-black p-4 text-center text-white">
          <button className="text-center text-base font-medium capitalize">
            CREATE ACCOUNT
          </button>
        </div>
        <div className="my-14 flex justify-center gap-x-2 text-center">
          <p className="text-base font-normal text-[#333333]">
            Have an Account?
          </p>
          <span className="text-base font-medium capitalize text-black">
            LOGIN
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
