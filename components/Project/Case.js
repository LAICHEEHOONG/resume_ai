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
    <div className="flex flex-col gap-1 my-2 w-[350px] backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {web ? (
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
          ) : (
            <Button
              isIconOnly
              aria-label="web"
              color="default"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
              // onPress={() => window.open(web, "_blank", "noopener,noreferrer")}
            >
              <LanguageIcon className="text-default-500" />
            </Button>
          )}

          {youtube ? (
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
          ) : (
            <Button
              isIconOnly
              aria-label="youtube"
              color="default"
              radius="full"
              variant="light"
              size="sm"
              isDisabled
            >
              <YouTubeIcon className="text-default-500" />
            </Button>
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
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1">
            <div className="tracking-wider uppercase font-semibold">
              {project}
            </div>
          </div>
          {/* <div className="text-xs text-default-400">{`(${year})`}</div> */}
        </div>
        {/* <div className="flex items-center gap-2">
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
        </div> */}
      </div>

      {/* <div>
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
            >
              <IconComponent.icon
                className={`${IconComponent.color} w-5 h-5`}
              />
            </Button>
          ))}
      </div> */}
    </div>
  );
}
