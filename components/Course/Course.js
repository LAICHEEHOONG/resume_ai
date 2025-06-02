import { PiCertificateFill } from "react-icons/pi";
import { Button } from "@heroui/react";
import { Bounce } from "react-awesome-reveal";
import { useSelector } from "react-redux";


export default function Course({ course, year, certificate, setCertificate, onOpen }) {
    const lang = useSelector((state) => state.language?.language);
      const udemyOnlineClass = useSelector(
    (state) => state.language?.cardTitle?.udemyOnlineClass[lang]
  );
  return (
    <div className="flex flex-col gap-1 p-2 ">
      <div className="tracking-widest uppercase py-1 font-semibold ">
        {course}
      </div>
      <div className="flex gap-4 items-center ">
        <div className="text-default-400 text-sm tracking-widest">{`${year} | ${udemyOnlineClass}`}</div>
        <Bounce>
          <Button
            isIconOnly
            variant="light"
            radius="full"
            color="secondary"
            onPress={() => {
              setCertificate(certificate);
              onOpen();
            }}
          >
            <PiCertificateFill className="w-6 h-6 text-indigo-500" />
          </Button>
        </Bounce>
      </div>
    </div>
  );
}
