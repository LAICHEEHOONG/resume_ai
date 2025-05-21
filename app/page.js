"use client";

import LockStatus from "@/components/Lock";
import { useSelector } from "react-redux";
import AccessDenied from "@/components/AccessDenied";
import Top from "@/components/top/Top";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const lock = useSelector((state) => state.lock?.lock);
  return (
    <Fade>
      <LockStatus />
      {lock && (
        <div>
          <AccessDenied />
        </div>
      )}
      {!lock && (
        <div className="w-full flex justify-center" >
          <div className=" min-h-screen bg-[url('/images/background_2.jpg')] bg-cover bg-center bg-no-repeat w-[900px]">
            <Top />
          </div>
        </div>
      )}
    </Fade>
  );
}
