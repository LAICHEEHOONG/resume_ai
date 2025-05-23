import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button } from "@heroui/react";

export default function Project() {
  return (
    <div className="flex flex-col  m-5">
      <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider">
        PERSONAL PROJECT
      </div>
      <div className="mt-6">
        <div>
          <div className="tracking-wider">
            Chrome Web Store - stockbal extension
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-default-400">2020</div>
            <div className="flex gap-2">
              <Button
                isIconOnly
                aria-label="lang"
                color="secondary"
                radius="full"
                variant="light"
                size="sm"
                onPress={window.open(
                  "https://github.com/LAICHEEHOONG/stockbal-extension",
                  "_blank",
                  "noopener,noreferrer"
                )}
              >
                <GitHubIcon className="text-purple-400" />
              </Button>
              <Button
                isIconOnly
                aria-label="lang"
                color="danger"
                radius="full"
                variant="light"
                size="sm"
              >
                <YouTubeIcon className="text-pink-400" fontSize="small" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
