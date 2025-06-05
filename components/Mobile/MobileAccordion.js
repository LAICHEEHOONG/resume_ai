import { Accordion, AccordionItem } from "@heroui/react";
import { useSelector } from "react-redux";
import MobileAboutMe from "./MobileAboutMe";
import MobileProject from "./MobileProject";
import MobileCourse from "./MobileCourse";
import MobileEducation from "./MobileEducation";
import MobileEmployment from "./MobileEmployment";

export default function MobileAccordion() {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);

  return (
    <div className="my-3">
      <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={
            <div className="text-lg uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
              {cardTitle.contactInformation[lang]}
            </div>
          }
          className="bg-white/30 backdrop-blur-md rounded-xl shadow-md"
        >
          <MobileAboutMe />
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={
            <div className="text-lg uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
              {cardTitle?.personalProject[lang]}
            </div>
          }
          className="bg-white/30 backdrop-blur-md rounded-xl shadow-md"
        >
          <MobileProject />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={
            <div className="text-lg uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
              {cardTitle?.coursesTraining[lang]}
            </div>
          }
          className="bg-white/30 backdrop-blur-md rounded-xl shadow-md"
        >
          <MobileCourse />
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title={
            <div className="text-lg uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
              {cardTitle?.education[lang]}
            </div>
          }
          className="bg-white/30 backdrop-blur-md rounded-xl shadow-md"
        >
          <MobileEducation />
        </AccordionItem>

        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          title={
            <div className="text-lg uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
              {cardTitle?.employmentHistory[lang]}
            </div>
          }
          className="bg-white/30 backdrop-blur-md rounded-xl shadow-md"
        >
        <MobileEmployment />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
