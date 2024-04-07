import React, { Suspense } from "react";
import Navbar from "~/components/Navbar";
import VerifyEmail from "~/components/VerifyEmail";

function page() {
  return (
    <Suspense>
      <Navbar />
      <VerifyEmail />
    </Suspense>
  );
}

export default page;
