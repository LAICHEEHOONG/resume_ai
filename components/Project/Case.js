import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import { Bounce } from "react-awesome-reveal";
import { Button } from "@heroui/react";

export default function Case({
  project,
  youtube,
  github,
  year,
  icon,
  web,
  onOpen,
  setYoutube,
}) {
  return (
    <div className="flex flex-col gap-1 my-2 w-[460px] backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <div className="tracking-wider">{project}</div>
          </div>
          <div className="text-sm text-default-400">{`(${year})`}</div>
        </div>
        <div className="flex items-center gap-2">
          {web && (
            <Bounce>
              <Button
                isIconOnly
                aria-label="web"
                color="primary"
                radius="full"
                variant="light"
                size="sm"
                onPress={() =>
                  window.open(web, "_blank", "noopener,noreferrer")
                }
              >
                <LanguageIcon className="text-blue-500" />
              </Button>
            </Bounce>
          )}

          {youtube && (
            <Bounce>
              <Button
                isIconOnly
                aria-label="youtube"
                color="primary"
                radius="full"
                variant="light"
                size="sm"
                onPress={() => {
                  setYoutube(youtube);
                  onOpen();
                }}
              >
                <YouTubeIcon className="text-pink-500" />
              </Button>
            </Bounce>
          )}
          <Bounce>
            <Button
              isIconOnly
              aria-label="lang"
              color="secondary"
              radius="full"
              variant="light"
              size="sm"
              onPress={() =>
                window.open(github, "_blank", "noopener,noreferrer")
              }
            >
              <GitHubIcon className="text-purple-500" />
            </Button>
          </Bounce>
        </div>
      </div>
      {/* 
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-1">
          <div className="tracking-wider">{project}</div>
        </div>
        <div className="text-sm text-default-400">{`(${year})`}</div>
      </div> */}

      <div className="">
        {/* {web && (
          <Button
            isIconOnly
            aria-label="web"
            color="primary"
            radius="full"
            variant="light"
            size="sm"
            onPress={() => window.open(web, "_blank", "noopener,noreferrer")}
          >
            <LanguageIcon className="text-blue-500" />
          </Button>
        )}

        {youtube && (
          <Button
            isIconOnly
            aria-label="youtube"
            color="primary"
            radius="full"
            variant="light"
            size="sm"
            onPress={() => {
              setYoutube(youtube);
              onOpen();
            }}
          >
            <YouTubeIcon className="text-pink-500" />
          </Button>
        )} */}

        {/* <Button
          isIconOnly
          aria-label="lang"
          color="secondary"
          radius="full"
          variant="light"
          size="sm"
          onPress={() => window.open(github, "_blank", "noopener,noreferrer")}
        >
          <GitHubIcon className="text-purple-500" />
        </Button> */}

        {/* <Button
          isIconOnly
          aria-label="lb icon"
          radius="full"
          variant="light"
          size="sm"
          isDisabled
        >
          <LuDot className="text-default-400 w-5 h-5" />
        </Button> */}

        {/* Map over the icon array to render each icon in a Button */}
        {icon &&
          icon.length > 0 &&
          icon.map((IconComponent, index) => (
            <Button
              key={index}
              isIconOnly
              aria-label={`icon-${index}`}
              radius="full"
              variant="light"
              size="sm"
              isDisabled
              className=""
            >
              <IconComponent.icon
                className={`${IconComponent.color} w-5 h-5`}
              />
            </Button>
          ))}
      </div>
    </div>
  );
}
