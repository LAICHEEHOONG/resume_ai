"use client";

import LockStatus from "@/components/Lock";
import { useSelector } from "react-redux";
import AccessDenied from "@/components/AccessDenied";
import Top from "@/components/top/Top";
import { Fade } from "react-awesome-reveal";
// import Project from "@/components/Project/Project";
import RightCard from "@/components/RightCard/RightCard";
import LeftCard from "@/components/LeftCard/LeftCard";

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
        <div className="w-full md:flex hidden justify-center">
          <div className=" min-h-screen bg-[url('/images/background_2.jpg')] bg-cover bg-center bg-no-repeat w-[900px] ">
            <Top />
            <div className="flex justify-center p-2 ">
              {/* <Project /> */}
              <LeftCard />
              <RightCard />
            </div>
          </div>
        </div>
      )}
    </Fade>
  );
}
