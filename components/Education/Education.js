import Course from "../Course/Course";
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

export default function Education() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [certificate, setCertificate] = useState("");
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-3">
        <div className="text-xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
          Education
        </div>
      </div>
      <div className="flex flex-col gap-1 m-2 -mt-0.5 backdrop-blur-md rounded-2xl  shadow-lg border border-white/20 ">
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              National Central University
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
              <div className="text-default-400 text-sm tracking-widest ">{`Department of Electrical Engineering`}</div>
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
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`Taiwan Taoyuan City`}</div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`2010 - 2011`}</div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`(I didn’t complete the program)`}</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              Yuk Choy High School
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
              <div className="text-default-400 text-sm tracking-widest">{`Science Class`}</div>
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
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`Malaysia Ipoh`}</div>
            <div className="text-default-400 text-sm tracking-widest h-[34px] flex items-center">{`2004 - 2009`}</div>
            {/* <div className="text-default-400 text-sm tracking-widest">{`(I didn’t complete the program)`}</div> */}
          </div>
        </div>

        {/* <Course
          course="The Server Side with NEXT.JS"
          year="2025"
          certificate={"/images/next.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />

        <Course
          course="The Beginning with GIT & Github course"
          year="2023"
          certificate={"/images/githubCer.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="The complete React 18 Fullstack course"
          year="2022"
          certificate={"/images/reactCer.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="The Complete Web Development Bootcamp"
          year="2020"
          certificate={"/images/bootcamp.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="JavaScript Course: From Zero to Expert!"
          year="2020"
          certificate={"/images/javascript.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="Responsive Website with HTML and CSS"
          year="2019"
          certificate={"/images/html_css.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        /> */}
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
              <ModalBody>
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
