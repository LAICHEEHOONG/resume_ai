// app/page.tsx or components/QRCodeGenerator.tsx
"use client";
import { QRCodeSVG } from "qrcode.react";
import { FaGithub } from "react-icons/fa";
import { Button, Link, Snippet } from "@heroui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const QRCodeGenerator = () => {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);
  const [showQR, setShowQR] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const resumePage = "https://laicheehoong-resume-ai.vercel.app/"; // You can change this to anything
  const resumeGithub = "https://github.com/LAICHEEHOONG/resume_ai"; // You can change this to anything

  const handlePress = () => {
    setShowQR(!showQR);
    if (firstRun) {
      window.open(resumeGithub, "_blank");
      setFirstRun(false);
    }
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-center m-2 p-2 ">
      <Button
        color="default"
        startContent={<FaGithub className="text-default-400  w-5 h-5 m-2" />}
        variant="light"
        radius="full"
        size="md"
        onPress={handlePress}
        className="tracking-widest text-default-400 uppercase"
      >
        {cardTitle?.resumeLaicheehoong[lang]}
        {/* RESUME | LAI CHEE HOONG */}
      </Button>
      {showQR && (
        <>
          <div className="backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <QRCodeSVG value={resumePage} size={256} />
          </div>
          <div className="text-md sm:text-lg tracking-widest font-semibold mt-2">
            {cardTitle?.scanTheQRCodeToSeeItLive[lang]}
            {/* Scan the QR code to see it live ✨ */}
          </div>
          <div className="text-default-400 tracking-widest sm:text-base text-sm text-center">
            {cardTitle?.thisWebResumeWasFullyDevelopedByMeUsingNextJs[lang]}
            {/* This web resume was fully developed by me using Next.js */}
          </div>
        </>
      )}
    </div>
  );
};

export default QRCodeGenerator;
