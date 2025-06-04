import { Accordion, AccordionItem } from "@heroui/react";
import { useSelector } from "react-redux";
import MobileAboutMe from "./MobileAboutMe";

export default function MobileAccordion() {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="my-3">
      <Accordion variant="splitted">
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

        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
