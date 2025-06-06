

import {  Button, Avatar } from "@heroui/react";
import TranslateIcon from "@mui/icons-material/Translate";
import { TypeAnimation } from "react-type-animation";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/redux/features/language/languageSlice";

export default function Top() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language?.language);
  const name = useSelector((state) => state.language?.name[language]);
  const title = useSelector((state) => state.language?.title[language]);
  const description = useSelector(
    (state) => state.language.description[language]
  );

  return (
    <div className="flex gap-5 m-5">
      <div>
        <Avatar
          src="/images/laicheehoong_2.jpeg"
          className="w-[10rem] h-[10rem] border-5 border-white"
        />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="flex justify-between items-center">
          <div className="text-3xl tracking-widest">{name}</div>
          <Button
            isIconOnly
            aria-label="lang"
            color="default"
            radius="full"
            variant="flat"
            
            onPress={() => {
              dispatch(setLanguage(language === "en" ? "zh" : "en"));
            }}
          >
            <TranslateIcon className="" fontSize="small" />
          </Button>
        </div>
        <div className="text-default-400 tracking-widest">{title}</div>
        <div className="text-small mt-2 tracking-wider font-semibold">
          <TypeAnimation
            key={`description-${language}`} // Add key to force remount on language change
            sequence={[description]}
            speed={105}
            style={{ whiteSpace: "pre-wrap" }}
            cursor={false}
            repeat={0}
          />
        </div>
      </div>
     
    </div>
  );
}
