import Course from "../Course/Course";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@heroui/react";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import Education from "../Education/Education";
import { useSelector } from "react-redux";

export default function RightCard() {
  const lang = useSelector((state) => state.language?.language);
  const coursesTraining = useSelector(
    (state) => state.language?.cardTitle?.coursesTraining[lang]
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [certificate, setCertificate] = useState("");
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-3">
        <div className="text-xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
          {coursesTraining}
          {/* COURSES & TRAININGS */}
        </div>
      </div>
      <div className="flex flex-col gap-1 m-2 -mt-0.5 backdrop-blur-md rounded-2xl  shadow-lg border border-white/20 ">
        <Course
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
        />
      </div>
      <Education />

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="4xl"
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
