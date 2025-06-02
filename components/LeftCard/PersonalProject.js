import { Button } from "@heroui/react";
import { Bounce } from "react-awesome-reveal";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import { FaNpm } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function PersonalProject({
  project,
  youtube,
  github,
  year,
  icon,
  web,
  onOpen,
  setYoutube,
  setIcon,
  onOpenDrawer,
}) {
  const lang = useSelector((state) => state.language?.language);
  const developedIn = useSelector((state) => state.language?.cardTitle?.developedIn[lang]);

  return (
    <div className="flex flex-col gap-1 p-2 ">
      <div className="tracking-widest uppercase py-1 font-semibold ">
        {project}
      </div>
      <div className="flex gap-4 items-center ">
        <div className="text-default-400 text-sm tracking-widest">{`${developedIn} ${year}`}</div>
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
              aria-label="npm"
              color="danger"
              radius="full"
              variant="light"
              size="sm"
              onPress={() => {
                setIcon(icon);
                onOpenDrawer();
              }}
            >
              <FaNpm className="text-red-500 w-6 h-6" />
            </Button>
          </Bounce>
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
    </div>
  );
}
