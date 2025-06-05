import { useSelector } from "react-redux";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaBirthdayCake, FaGithub } from "react-icons/fa";
import { Button, Link } from "@heroui/react";
import { FaLocationDot } from "react-icons/fa6";

export default function MobileAboutMe() {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 items-start">
        <Button
          color="default"
          startContent={<SiGmail className="text-red-500 w-4 h-4 m-2" />}
          variant="light"
          className="tracking-widest py-1 font-semibold"
          onPress={() => window.open("mailto:laicheehoong@gmail.com")}
        >
          <div className="tracking-widest py-1 font-semibold ">
            laicheehoong@gmail.com
          </div>
        </Button>
        <Button
          color="default"
          startContent={<FaPhoneAlt className="text-green-500 w-5 h-5 m-2" />}
          variant="light"
          onPress={() => window.open("tel:+60175337331")}
        >
          <div className="tracking-widest py-1 font-semibold ">
            +60 17-533 7331
          </div>
        </Button>
        <Button
          color="default"
          startContent={<FaLocationDot className="text-red-500 w-5 h-5 m-2" />}
          variant="light"
          onPress={() =>
            window.open(
              "https://www.google.com/maps/place/Ipoh,+Perak,+Malaysia"
            )
          }
        >
          <div className="tracking-widest py-1 font-semibold ">
            {cardTitle.malaysiaIpoh[lang]}
          </div>
        </Button>

        <Button
          color="default"
          startContent={<FaGithub className="text-purple-500 w-5 h-5 m-2" />}
          variant="light"
        >
          <div className="tracking-widest py-1 font-semibold ">
            <Link
              href="https://github.com/LAICHEEHOONG"
              isExternal
              showAnchorIcon
              color="secondary"
            >
              GitHub
            </Link>
          </div>
        </Button>
        <Button
          color="default"
          isDisabled
          startContent={
            <FaBirthdayCake className="text-pink-400 w-5 h-5 m-2" />
          }
          variant="light"
        >
          <div className="tracking-widest py-1 font-semibold ">1990-04-17</div>
        </Button>
      </div>
    </div>
  );
}
