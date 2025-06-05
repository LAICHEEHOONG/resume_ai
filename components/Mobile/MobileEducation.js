import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  Button,
} from "@heroui/react";
import { Fade, Bounce } from "react-awesome-reveal";
import { useState } from "react";
import { PiCertificateFill } from "react-icons/pi";
import LanguageIcon from "@mui/icons-material/Language";
import { useSelector } from "react-redux";

export default function MobileEducation() {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [certificate, setCertificate] = useState("");
  return (
    <div className="flex flex-col w-full">
      {/* <div className="flex flex-col p-3">
        <div className="text-xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
          {cardTitle.education[lang]}
        </div>
      </div> */}
      <div className="flex flex-col ">
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              {cardTitle.nationalCentralUniversity[lang]}
            </div>
            <Bounce>
              <Button
                isIconOnly
                variant="light"
                radius="full"
                color="primary"
                onPress={() =>
                  window.open(
                    "https://www.ncu.edu.tw/tw/index.html",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <LanguageIcon className=" text-blue-500" />
              </Button>
            </Bounce>
          </div>

          <div>
            <div className="flex gap-4 items-center">
              <div className="text-default-400 text-sm tracking-widest ">
                {cardTitle.departmentOfElectricalEngineering[lang]}
              </div>
              <Bounce>
                <Button
                  isIconOnly
                  variant="light"
                  radius="full"
                  color="secondary"
                  size="sm"
                  onPress={() => {
                    setCertificate("/images/university.jpg");
                    onOpen();
                  }}
                >
                  <PiCertificateFill className="w-6 h-6 text-indigo-500" />
                </Button>
              </Bounce>
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">
              {cardTitle.taiwanTaoyuanCity[lang]}
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`2010 - 2011`}</div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">
              {cardTitle.iDidntCompletetheProgram[lang]}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              {cardTitle.yukChoyHighSchool[lang]}
            </div>
            <Bounce>
              <Button
                isIconOnly
                variant="light"
                radius="full"
                color="primary"
                onPress={() =>
                  window.open(
                    "https://www.yukchoy.edu.my/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <LanguageIcon className=" text-blue-500" />
              </Button>
            </Bounce>
          </div>

          <div>
            <div className="flex gap-4 items-center ">
              <div className="text-default-400 text-sm tracking-widest">
                {cardTitle.scienceClass[lang]}
              </div>
              <Bounce>
                <Button
                  isIconOnly
                  variant="light"
                  radius="full"
                  color="secondary"
                  size="sm"
                  onPress={() => {
                    setCertificate("/images/cer.jpg");
                    onOpen();
                  }}
                >
                  <PiCertificateFill className="w-6 h-6 text-indigo-500" />
                </Button>
              </Bounce>
              <Bounce>
                <Button
                  isIconOnly
                  variant="light"
                  radius="full"
                  color="secondary"
                  size="sm"
                  onPress={() => {
                    setCertificate("/images/exam.jpg");
                    onOpen();
                  }}
                >
                  <PiCertificateFill className="w-6 h-6 text-indigo-500" />
                </Button>
              </Bounce>
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">
              {cardTitle.malaysiaIpoh[lang]}
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`2004 - 2009`}</div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="xl"
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-0">
                <Fade className="">
                  <Image alt="Certificate" src={certificate} width={1200} />
                </Fade>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
