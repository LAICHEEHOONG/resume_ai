// import Course from "../Course/Course";
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
// import Education from "../Education/Education";
// import Employment from "../Employment/Employment";


export default function MobileCourse() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [certificate, setCertificate] = useState("");
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col ">
        <Course
          course="The Server Side with NEXT.JS"
          year="2025"
          certificate={"/images/next.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />

        <Course
          course="The Beginning with GIT & Github"
          year="2023"
          certificate={"/images/githubCer.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="complete React 18 Fullstack"
          year="2022"
          certificate={"/images/reactCer.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="Web Development Bootcamp"
          year="2020"
          certificate={"/images/bootcamp.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="JavaScript From Zero to Expert!"
          year="2020"
          certificate={"/images/javascript.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
        <Course
          course="Responsive with HTML and CSS"
          year="2019"
          certificate={"/images/html_css.jpg"}
          setCertificate={setCertificate}
          onOpen={onOpen}
        />
      </div>

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
