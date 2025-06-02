// import Course from "../Course/Course";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Card,
  CardBody,
} from "@heroui/react";
import { Fade } from "react-awesome-reveal";
import { use, useState } from "react";
import PersonalProject from "./PersonalProject";

import {
  SiNextui,
  SiDotenv,
  SiExpress,
  SiMongoose,
  SiMongodb,
  SiNodedotjs,
  SiHeroku,
  SiReactrouter,
  SiReactbootstrap,
  SiJsonwebtokens,
  SiRedux,
  SiCloudinary,
  SiMui,
  SiShadcnui,
  SiVercel,
  SiNamecheap,
  SiOpenai,
  SiGoogleanalytics,
  SiGooglemaps,
  SiLodash,
  SiNodemon,
} from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BsStripe } from "react-icons/bs";
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoExtensionPuzzle,
  IoLogoFirebase,
} from "react-icons/io5";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";

export default function LeftCard() {
  const lang = useSelector((state) => state.language?.language);
  const personalProject = useSelector(
    (state) => state.language?.cardTitle?.personalProject[lang]
  );
  const packages = useSelector(
    (state) => state.language?.cardTitle?.packages[lang]
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [youtube, setYoutube] = useState("");
  const [icon, setIcon] = useState([]);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = () => setIsOpenDrawer(true);
  const onCloseDrawer = () => setIsOpenDrawer(false);
  const onOpenChangeDrawer = () => setIsOpenDrawer(!isOpenDrawer);

  return (
    <div className="flex flex-col w-full max-w-[360px]">
      <div className="flex flex-col p-3">
        <div className="text-xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
          {personalProject}
          {/* PERSONAL PROJECT */}
        </div>
      </div>
      <div className="flex flex-col gap-1 m-2 -mt-0.5 backdrop-blur-md rounded-2xl  shadow-lg border border-white/20 ">
        <PersonalProject
          project="StockbalX"
          youtube="I6ZF1SkczMU"
          github="https://github.com/LAICHEEHOONG/stockbalx"
          year="2025"
          icon={[
            {
              icon: RiNextjsLine,
              color: "text-black",
              name: "Next.js",
            },
            {
              icon: SiNextui,
              color: "text-black",
              name: "HeroUI",
            },
            {
              icon: SiMui,
              color: "text-blue-500",
              name: "Material UI",
            },
            {
              icon: RiTailwindCssFill,
              color: "text-blue-500",
              name: "Tailwind CSS",
            },
            {
              icon: SiMongoose,
              color: "text-red-800",
              name: "Mongoose",
            },
            {
              icon: SiMongodb,
              color: "text-green-600",
              name: "MongoDB",
            },
            {
              icon: SiVercel,
              color: "text-black-600",
              name: "Vercel",
            },
            {
              icon: SiRedux,
              color: "text-purple-500",
              name: "Redux",
            },
            {
              icon: IoExtensionPuzzle,
              color: "text-gray-500",
              name: "Chrome Extension",
            },
            {
              icon: SiLodash,
              color: "text-black",
              name: "Lodash",
            },
            { name: "React Icons", image: "/images/icon.png" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="AI PC Builder"
          youtube="u3ZgrKbT5EM"
          github="https://github.com/LAICHEEHOONG/learn_ai"
          year="2025"
          icon={[
            { icon: RiNextjsLine, color: "text-black", name: "Next.js" },
            { icon: SiNextui, color: "text-black", name: "HeroUI" },
            { icon: SiMui, color: "text-blue-500", name: "Material UI" },
            {
              icon: RiTailwindCssFill,
              color: "text-blue-500",
              name: "Tailwind CSS",
            },
            { icon: SiMongoose, color: "text-red-800", name: "Mongoose" },
            { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
            { icon: SiVercel, color: "text-black-600", name: "Vercel" },
            { icon: SiRedux, color: "text-purple-500", name: "Redux" },
            { icon: SiOpenai, color: "text-green-500", name: "OpenAI" },
            { name: "Embla Carousel", image: "/images/embla.jpeg" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Allcareok.com"
          youtube="R79AKS-NLqU"
          web="https://www.allcareok.com/"
          github="https://github.com/LAICHEEHOONG/allcareok"
          year="2024"
          icon={[
            { icon: RiNextjsLine, color: "text-black", name: "Next.js" },
            { icon: SiNextui, color: "text-black", name: "HeroUI" },
            { icon: SiMui, color: "text-blue-500", name: "Material UI" },
            {
              icon: RiTailwindCssFill,
              color: "text-blue-500",
              name: "Tailwind CSS",
            },
            { icon: SiMongoose, color: "text-red-800", name: "Mongoose" },
            { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
            { icon: SiVercel, color: "text-black-600", name: "Vercel" },
            { icon: SiRedux, color: "text-purple-500", name: "Redux" },
            { icon: BsStripe, color: "text-purple-500", name: "Stripe" },
            { icon: SiCloudinary, color: "text-blue-500", name: "Cloudinary" },
            { icon: SiNamecheap, color: "text-orange-600", name: "Namecheap" },
            { icon: SiGooglemaps, color: "text-red-600", name: "Google Maps" },
            { icon: SiShadcnui, color: "text-black", name: "Shadcn UI" },
            {
              icon: SiGoogleanalytics,
              color: "text-orange-500",
              name: "Google Analytics",
            },
            { name: "Embla Carousel", image: "/images/embla.jpeg" },
            { name: "React Dropzone", image: "/images/drop.png" },
            { name: "React Icons", image: "/images/icon.png" },
            { name: "Next Auth", image: "/images/auth.png" },
            { icon: FcGoogle, color: "", name: "Google OAuth" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Price Tag Maker"
          youtube="-13aqt9Vh5c"
          github="https://github.com/LAICHEEHOONG/computer_price_tag"
          year="2024"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            { icon: SiMui, color: "text-blue-500", name: "Material UI" },
            {
              icon: SiReactrouter,
              color: "text-red-500",
              name: "React Router",
            },
            { icon: SiRedux, color: "text-purple-500", name: "Redux" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Claim Calculation"
          youtube="cmWjlz7XCxA"
          github="https://github.com/LAICHEEHOONG/claim_caculation"
          year="2024"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            { icon: SiMui, color: "text-blue-500", name: "Material UI" },
            {
              icon: SiReactrouter,
              color: "text-red-500",
              name: "React Router",
            },
            { icon: SiRedux, color: "text-purple-500", name: "Redux" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Compress Image APP"
          youtube="-DTgM3O2ItY"
          web="https://laicheehoong.github.io/compress_image/"
          github="https://github.com/LAICHEEHOONG/compress_image"
          year="2023"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            { icon: SiMui, color: "text-blue-500", name: "Material UI" },
            {
              icon: SiReactrouter,
              color: "text-red-500",
              name: "React Router",
            }, // React Router uses a red logo
            { icon: SiRedux, color: "text-purple-500", name: "Redux" }, // React Router uses a red logo
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Resume"
          youtube=""
          web="https://laicheehoong.de.r.appspot.com/"
          github="https://github.com/LAICHEEHOONG/resume"
          year="2023"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            { icon: SiMui, color: "text-blue-500", name: "MUI" },
            { icon: SiDotenv, color: "text-yellow-500", name: "Dotenv" },
            { icon: SiExpress, color: "text-gray-800", name: "Express" },
            { icon: SiMongoose, color: "text-red-800", name: "Mongoose" },
            { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
            { icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
            {
              icon: DiGoogleCloudPlatform,
              color: "text-default-700",
              name: "Google Cloud Platform",
            },
            {
              icon: SiReactrouter,
              color: "text-red-500",
              name: "React Router",
            },
            { icon: SiRedux, color: "text-purple-500", name: "Redux" },
            { icon: SiNodemon, color: "text-green-500", name: "Nodemon" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Order & Count"
          youtube="r5eSVkyPxC4"
          github="https://github.com/LAICHEEHOONG/order-count"
          year="2022"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            {
              icon: SiReactbootstrap,
              color: "text-blue-600",
              name: "React Bootstrap",
            },
            { icon: SiDotenv, color: "text-yellow-500", name: "Dotenv" },
            { icon: SiExpress, color: "text-gray-800", name: "Express" },
            { icon: SiMongoose, color: "text-red-800", name: "Mongoose" },
            { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
            { icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
            { icon: SiHeroku, color: "text-purple-700", name: "Heroku" },
            {
              icon: SiReactrouter,
              color: "text-red-500",
              name: "React Router",
            },
            {
              icon: SiJsonwebtokens,
              color: "text-gray-500",
              name: "JSON Web Tokens",
            },
            {
              image: "/images/bcrypt.jpeg",
              name: "bcrypt",
            },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Stock Check"
          youtube="C3RxGHKCDmk"
          github="https://github.com/LAICHEEHOONG/stockcheck"
          year="2022"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            { icon: FaBootstrap, color: "text-purple-600", name: "Bootstrap" },
            { icon: SiDotenv, color: "text-yellow-500", name: "Dotenv" },
            { icon: SiExpress, color: "text-gray-800", name: "Express" },
            { icon: SiMongoose, color: "text-red-800", name: "Mongoose" },
            { icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
            { icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
            { icon: SiHeroku, color: "text-purple-700", name: "Heroku" },
            {
              icon: SiReactrouter,
              color: "text-red-500",
              name: "React Router",
            },
            {
              icon: SiJsonwebtokens,
              color: "text-gray-500",
              name: "JSON Web Tokens",
            },
            {
              image: "/images/formik.png",
              name: "Formik",
            },
            {
              image: "/images/bcrypt.jpeg",
              name: "bcrypt",
            },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Gym-Timer"
          web="https://laicheehoong.github.io/gym-timer/"
          youtube="g3qXyXLyElc"
          github="https://github.com/LAICHEEHOONG/gym-timer"
          year="2021"
          icon={[
            { icon: FaReact, color: "text-cyan-500", name: "React" },
            {
              icon: SiReactbootstrap,
              color: "text-blue-600",
              name: "React Bootstrap",
            },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="stockbal extension"
          youtube="qAJlnqoeoqQ"
          github="https://github.com/LAICHEEHOONG/stockbal-extension"
          year="2021"
          icon={[
            {
              icon: IoLogoJavascript,
              color: "text-yellow-500",
              name: "JavaScript",
            },
            { icon: IoLogoCss3, color: "text-blue-600", name: "CSS3" },
            { icon: IoLogoHtml5, color: "text-red-600", name: "HTML5" },
            { icon: IoExtensionPuzzle, color: "text-gray-500", name: "Puzzle" },
            {
              icon: IoLogoFirebase,
              color: "text-yellow-500",
              name: "Firebase",
            },
            { icon: FaBootstrap, color: "text-purple-600", name: "Bootstrap" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Dark Mode Touch"
          youtube="PmB-bSHaBd8"
          github="https://github.com/LAICHEEHOONG/dark_mode_touch"
          year="2021"
          icon={[
            {
              icon: IoLogoJavascript,
              color: "text-yellow-500",
              name: "JavaScript",
            },
            { icon: IoLogoCss3, color: "text-blue-600", name: "CSS3" },
            { icon: IoLogoHtml5, color: "text-red-600", name: "HTML5" },
            { icon: IoExtensionPuzzle, color: "text-gray-500", name: "Puzzle" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Simon Game"
          web="https://laicheehoong.github.io/simon/"
          youtube="d7cEbPMDPj4"
          github="https://github.com/LAICHEEHOONG/simon"
          year="2020"
          icon={[
            {
              icon: IoLogoJavascript,
              color: "text-yellow-500",
              name: "JavaScript",
            },
            { icon: IoLogoCss3, color: "text-blue-600", name: "CSS3" },
            { icon: IoLogoHtml5, color: "text-red-600", name: "HTML5" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Budgety"
          github="https://github.com/LAICHEEHOONG/budgety"
          web="https://laicheehoong.github.io/budgety/"
          year="2019"
          icon={[
            {
              icon: IoLogoJavascript,
              color: "text-yellow-500",
              name: "JavaScript",
            },
            { icon: IoLogoCss3, color: "text-blue-600", name: "CSS3" },
            { icon: IoLogoHtml5, color: "text-red-600", name: "HTML5" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
        <PersonalProject
          project="Omnifood"
          github="https://github.com/LAICHEEHOONG/omnifood"
          web="https://laicheehoong.github.io/omnifood/"
          year="2019"
          icon={[
            { icon: IoLogoCss3, color: "text-blue-600", name: "CSS3" },
            { icon: IoLogoHtml5, color: "text-red-600", name: "HTML5" },
          ]}
          setIcon={setIcon}
          onOpen={onOpen}
          setYoutube={setYoutube}
          onOpenDrawer={onOpenDrawer}
          onCloseDrawer={onCloseDrawer}
          onOpenChangeDrawer={onOpenChangeDrawer}
        />
      </div>
      {/* <Education /> */}

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
      <Drawer
        isOpen={isOpenDrawer}
        onOpenChange={onOpenChangeDrawer}
        backdrop="blur"
        size="xs"
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col text-center gap-1 uppercase tracking-widest text-2xl font-extrabold">
                {packages}
              </DrawerHeader>
              <DrawerBody>
                {icon.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {icon.map((item, index) => (
                      <Card className="w-full" key={index}>
                        <CardBody>
                          <div className="flex justify-between items-center gap-3 p-1">
                            <div className="flex flex-col">
                              <div className="text-xl font-semibold tracking-wider">
                                {item.name}
                              </div>
                            </div>
                            {item.icon ? (
                              <item.icon
                                className={`w-10 h-10 ${item.color}`}
                              />
                            ) : (
                              <Image
                                alt="HeroUI hero Image"
                                src={item.image}
                                width={40}
                              />
                            )}
                            {/* <item.icon className={`w-10 h-10 ${item.color}`} /> */}
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    No packages available
                  </div>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onCloseDrawer}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
