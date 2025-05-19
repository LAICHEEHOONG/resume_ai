"use client";
import Image from "next/image";
import { Button } from "@heroui/react";
import LockStatus from "@/components/Lock";
import { useSelector } from "react-redux";
import AccessDenied from "@/components/AccessDenied";

export default function Home() {
  const lock = useSelector((state) => state.lock?.lock);
  return (
    <div>
      <LockStatus />
      {!lock && <div>Resume AI</div>}
      {lock && (
        <div>
          <AccessDenied />
        </div>
      )}
    </div>
  );
}
