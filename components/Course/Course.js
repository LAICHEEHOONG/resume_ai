import { PiCertificateDuotone } from "react-icons/pi";
import { Button } from "@heroui/react";

export default function Course({ course, year, certificate }) {
  return (
    <div className="flex justify-between py-1">
      <div>
        <div className="max-w-[350px]">
          {course}
          <span className="text-sm text-default-400 ">{`   (${year})`}</span>
        </div>
      </div>
      <Button
        size="sm"
        variant="flat"
        radius="full"
        isIconOnly
        color="secondary"
        className="text-sm"
      >
        <PiCertificateDuotone />
      </Button>
    </div>
    // <div className="flex flex-col gap-1 my-2  backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20 ">
    //   <div className="flex gap-x-10">
    //     <div>
    //       <div>{course}<span className="text-sm text-default-400 ">{`   (${year})`}</span></div>
    //     </div>
    //     <Button
    //       size="sm"
    //       variant="flat"
    //       radius="full"
    //       isIconOnly
    //       color="secondary"
    //       className="text-sm"
    //     >
    //       <PiCertificateDuotone />
    //     </Button>
    //   </div>
    // </div>
  );
}
