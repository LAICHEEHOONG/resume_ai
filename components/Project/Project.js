import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoExtensionPuzzle,
  IoLogoFirebase,
} from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider
} from "@heroui/react";
import { Fade } from "react-awesome-reveal";

export default function Project() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex flex-col m-5 w-full">
        <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider">
          PERSONAL PROJECT
        </div>
        <div className="mt-6">
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1">
              <div className="tracking-wider">
                Chrome Web Store - stockbal extension
              </div>
            </div>
            <div className="text-sm text-default-400">(2020)</div>
          </div>

          <div className="flex gap-2">
            <Button
              isIconOnly
              aria-label="lang"
              color="danger"
              radius="full"
              variant="light"
              size="sm"
              onPress={onOpen}
            >
              <YouTubeIcon className="text-pink-500" fontSize="small" />
            </Button>
            <Button
              isIconOnly
              aria-label="lang"
              color="secondary"
              radius="full"
              variant="light"
              size="sm"
              onPress={() =>
                window.open(
                  "https://github.com/LAICHEEHOONG/stockbal-extension",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <GitHubIcon className="text-purple-500" />
            </Button>
            <Divider className="h-5 mt-1.5 " orientation="vertical"/>

            <Button
              isIconOnly
              aria-label="lb icon"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <FaBootstrap className="text-purple-400 w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              aria-label="lb icon"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <IoLogoJavascript className="text-yellow-400 w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              aria-label="lb icon"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <IoLogoFirebase className="text-yellow-400 w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              aria-label="lb icon"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <IoExtensionPuzzle className="text-default-400 w-5 h-5" />
            </Button>

            <Button
              isIconOnly
              aria-label="lb icon"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <IoLogoCss3 className="text-blue-400 w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              aria-label="lb icon"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <IoLogoHtml5 className="text-red-400 w-5 h-5" />
            </Button>
          </div>
        </div>
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
                        src={`https://www.youtube.com/embed/${"qAJlnqoeoqQ"}`}
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
