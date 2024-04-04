"use client";

import React, { useState } from "react";
import OTPInput from "react-otp-input";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  return (
    <div className="my-10 flex w-full items-center justify-center">
      <div className="h-full max-h-[691px] w-full max-w-[576px] rounded-[20px] border border-[#C1C1C1] p-14">
        <h1 className="mb-8 text-center text-[32px] font-semibold">
          Verify your email
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-1 text-center">
          <p className="text-base font-normal text-center text-black">
            Enter the 8 digit code you have received on
          </p>
          <span className="font-medium">swa***@gmail.com</span>
        </div>
        <div className="my-16 flex flex-col gap-y-1">
          <h1>Code</h1>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={8}
            renderInput={(props) => <input {...props} />}
            containerStyle={{}}
            inputStyle={{
              width: 46,
              height: 48,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: "#C1C1C1",
              marginRight: 10,
            }}
          />
        </div>
        <div className="mt-10 w-auto max-w-[456px] rounded-md bg-black p-4 text-center text-white">
          <button className="text-center text-base font-medium capitalize">
            VERIFY
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
