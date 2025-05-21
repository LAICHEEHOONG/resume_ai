"use client";

import LockStatus from "@/components/Lock";
import { useSelector } from "react-redux";
import AccessDenied from "@/components/AccessDenied";
import Top from "@/components/top/Top";


export default function Home() {
  const lock = useSelector((state) => state.lock?.lock);
  return (
    <div>
      <LockStatus />
      {lock && (
        <div>
          <AccessDenied />
        </div>
      )}
      {!lock && (
        <div className="flex justify-center mt-2">
          <Top />
        </div>
      )}
    </div>
  );
}
