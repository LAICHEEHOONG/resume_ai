import { useState } from "react";
import {
  SiDotenv,
  SiExpress,
  SiMongoose,
  SiMongodb,
  SiNodedotjs,
  SiHeroku,
  SiReactrouter,
} from "react-icons/si";

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoExtensionPuzzle,
  IoLogoFirebase,
} from "react-icons/io5";
import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { Fade } from "react-awesome-reveal";
import Case from "./Case";

export default function Project() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [youtube, setYoutube] = useState("");
  return (
    <>
      <div className="flex flex-col m-5 w-full">
        <div className="text-xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider">
          PERSONAL PROJECT
        </div>

        <Case
          project="Stock Check"
          youtube="C3RxGHKCDmk"
          github="https://github.com/LAICHEEHOONG/stockcheck"
          year="2022"
          icon={[
            { icon: FaBootstrap, color: "text-purple-600" }, // Bootstrap's primary color is a shade of purple
            { icon: SiDotenv, color: "text-yellow-500" }, // .env files often associated with yellow in editors
            { icon: SiExpress, color: "text-gray-800" }, // Express uses a dark/grayish theme in its branding
            { icon: SiMongoose, color: "text-red-800" }, // Mongoose has a red logo
            { icon: SiMongodb, color: "text-green-600" }, // MongoDB's logo is green
            { icon: SiNodedotjs, color: "text-green-500" }, // Node.js has a green logo
            { icon: FaReact, color: "text-cyan-500" }, // React's logo is a cyan/blue shade
            { icon: SiHeroku, color: "text-purple-700" }, // Heroku's branding is purple
            { icon: SiReactrouter, color: "text-red-500" }, // React Router uses a red logo
          ]}
          onOpen={onOpen}
          setYoutube={setYoutube}
        />

        <Case
          project="Chrome Web Store - stockbal extension"
          youtube="qAJlnqoeoqQ"
          github="https://github.com/LAICHEEHOONG/stockbal-extension"
          year="2021"
          icon={[
            { icon: FaBootstrap, color: "text-purple-600" },
            { icon: IoLogoJavascript, color: "text-yellow-500" },
            { icon: IoLogoFirebase, color: "text-yellow-500" },
            { icon: IoExtensionPuzzle, color: "text-gray-500" },
            { icon: IoLogoCss3, color: "text-blue-600" },
            { icon: IoLogoHtml5, color: "text-red-600" },
          ]}
          onOpen={onOpen}
          setYoutube={setYoutube}
        />

        <Case
          project="Chrome Web Store - Dark Mode Touch"
          youtube="PmB-bSHaBd8"
          github="https://github.com/LAICHEEHOONG/dark_mode_touch"
          year="2021"
          icon={[
            // { icon: FaBootstrap, color: "text-purple-400" },
            { icon: IoLogoJavascript, color: "text-yellow-500" },
            // { icon: IoLogoFirebase, color: "text-yellow-400" },
            { icon: IoExtensionPuzzle, color: "text-gray-500" },
            { icon: IoLogoCss3, color: "text-blue-600" },
            { icon: IoLogoHtml5, color: "text-red-600" },
          ]}
          onOpen={onOpen}
          setYoutube={setYoutube}
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
              <ModalBody>
                <Fade className="flex flex-col  space-y-4 py-4">
                  <div className="w-full max-w-[1200px]">
                    <div className="relative overflow-hidden rounded-lg w-full aspect-video">
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${youtube}`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Fade>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
