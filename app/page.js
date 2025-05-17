"use client";
import Image from "next/image";
import { Button } from "@heroui/react";
import LockStatus from "@/components/Lock";

export default function Home() {
  return (
    <div>
      <LockStatus />
      <div>Resume AI</div>

    </div>
  );
}
