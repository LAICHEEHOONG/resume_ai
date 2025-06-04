import { Button, Avatar } from "@heroui/react";
import TranslateIcon from "@mui/icons-material/Translate";
import { TypeAnimation } from "react-type-animation";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/redux/features/language/languageSlice";

export default function MobileTop() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language?.language);
  const name = useSelector((state) => state.language?.name[language]);
  const title = useSelector((state) => state.language?.title[language]);
  const description = useSelector(
    (state) => state.language.description[language]
  );

  return (
    <div className="flex-col p-1">
      <div className="flex gap-2 justify-center items-center">
        <div>
          <Avatar
            src="/images/laicheehoong_2.jpeg"
            className="w-[5rem] h-[5rem] border-3 border-white"
          />
        </div>

        <div className=" w-full">
          <div className="flex justify-between my-2">
            <div className="text-2xl tracking-widest">{name}</div>
            <Button
              isIconOnly
              aria-label="lang"
              color="success"
              radius="full"
              variant="flat"
              size="sm"
              onPress={() => {
                dispatch(setLanguage(language === "en" ? "zh" : "en"));
              }}
            >
              <TranslateIcon className="" fontSize="small" />
            </Button>
          </div>
          <div className="text-default-400 tracking-widest text-xs">
            {title}
          </div>
        </div>
      </div>

      <div className="text-small mt-3 tracking-wider font-semibold">
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
  );
}
