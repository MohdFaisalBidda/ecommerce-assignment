"use client";

import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { getLocalStorageKeyValue } from "~/utils/localstorage";

export default function WrapperComponent({ children }: any) {
  const user = getLocalStorageKeyValue("user");

  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (user === null) {
        if (!pathname.includes("/login") && !pathname.includes("/register")) {
          router.replace("/login");
        }
      } else {
        if (pathname.includes("/login") || pathname.includes("/register")) {
          router.replace("/");
        }
      }
    }
  }, [user, pathname, router]);


  return <div>{children}</div>;
}
