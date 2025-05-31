import { PiCertificateFill } from "react-icons/pi";
import { Button } from "@heroui/react";
import { Bounce } from "react-awesome-reveal";

export default function School({ school, year, certificate, setCertificate, onOpen }) {
  return (
    <div className="flex flex-col gap-1 p-2 ">
      <div className="tracking-widest uppercase py-1 font-semibold ">
        {school}
      </div>
      <div className="flex gap-4 items-center ">
        <div className="text-default-400 text-sm tracking-widest">{`${year} | Udemy Online Class`}</div>
        <Bounce>
          <Button
            isIconOnly
            variant="light"
            radius="full"
            color="primary"
            onPress={() => {
              setCertificate(certificate);
              onOpen();
            }}
          >
            <PiCertificateFill className="w-6 h-6 text-blue-500" />
          </Button>
        </Bounce>
      </div>
    </div>
  );
}
