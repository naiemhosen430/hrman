"use client";
import { useRouter } from "next/navigation";

export default function UseProtectAdmin() {
  const router = useRouter();

  const protectAdmin = async (role) => {
    if (role !== "admin") {
      router.push("/dashboard/not-found", { scroll: true });
    }
  };

  return { protectAdmin };
}