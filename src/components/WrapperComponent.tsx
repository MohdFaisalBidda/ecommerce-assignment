"use client";

import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import dynamic from "next/dynamic";
import { getLocalStorageKeyValue } from "~/utils/localstorage";

export default function WrapperComponent({ children }: any) {
  const user = getLocalStorageKeyValue("user");

  const pathname = usePathname();
  const router = useRouter();

  if (typeof window == "undefined") {
  }

  //   if (!authIsReady) return "Loading";
  if (!user) {
    if (pathname.includes("/")) {
      const LoginPage = dynamic(() => import("../app/login/page"), {
        ssr: false,
      });
      // router.push("/login");
      return <LoginPage />;
    }
    if (pathname.includes("/login")) {
      const LoginPage = dynamic(() => import("../app/login/page"), {
        ssr: false,
      });
      router.push("/login");
      return <LoginPage />;
    }
    if (pathname.includes("/register")) {
      const RegisterPage = dynamic(() => import("../app/register/page"), {
        ssr: false,
      });
      router.push("/register");
      return <RegisterPage />;
    }
  }

  if (user) {
    // if (pathname.includes("/login") || pathname.includes("/register")) {
    //   const HomePage = dynamic(() => import("../app/page"), { ssr: false });
    //   return <HomePage />;
    // }
    router.push("/")
  }

  return <div>{children}</div>;
}
