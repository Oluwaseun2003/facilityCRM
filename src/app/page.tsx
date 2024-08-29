"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.push("/app");
  }, [router]);

  return <></>;
}
