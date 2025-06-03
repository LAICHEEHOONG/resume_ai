import { useSelector } from "react-redux";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt, FaBirthdayCake, FaGithub } from "react-icons/fa";
import { Button, Link, Snippet } from "@heroui/react";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutMe() {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-3">
        <div className="text-xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
          {cardTitle.contactInformation[lang]}
        </div>
      </div>

      <div className="flex flex-col gap-1 m-2 -mt-0.5 backdrop-blur-md rounded-2xl  shadow-lg border border-white/20 ">
        <div className="flex flex-col gap-1 p-2 items-start">
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
            startContent={
              <FaLocationDot className="text-red-500 w-5 h-5 m-2" />
            }
            variant="light"
            onPress={() => window.open('https://www.google.com/maps/place/Ipoh,+Perak,+Malaysia')}
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
            <div className="tracking-widest py-1 font-semibold ">
              1990-04-17
            </div>
          </Button>
        </div>
        {/* <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              {"PH&CO"}
            </div>
          </div>

          <div>
            <div className="flex gap-4 items-center">
              <div className="text-default-400 text-sm tracking-widest ">
                {cardTitle.stockKeeper[lang]}
              </div>
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">
              {cardTitle.malaysiaIpoh[lang]}
            </div>

            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">{`2019 - 2025`}</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              {cardTitle.euYanSang[lang]}
            </div>
          </div>

          <div>
            <div className="flex gap-4 items-center">
              <div className="text-default-400 text-sm tracking-widest ">
                {cardTitle.retailSales[lang]}
              </div>
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">
              {cardTitle.malaysiaIpoh[lang]}
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">{`2016 - 2018`}</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              {"NANA MART Convenience Store"}
            </div>
          </div>

          <div>
            <div className="flex gap-4 items-center">
              <div className="text-default-400 text-sm tracking-widest ">
                {cardTitle.owner[lang]}
              </div>
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">
              {cardTitle.malaysiaPerakSungaiSiput[lang]}
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">{`2015`}</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 p-2 ">
          <div className="flex gap-4 items-center">
            <div className="tracking-widest uppercase py-1 font-semibold ">
              {"sony centre"}
            </div>
          </div>

          <div>
            <div className="flex gap-4 items-center">
              <div className="text-default-400 text-sm tracking-widest ">
                {cardTitle.salesAdvisor[lang]}
              </div>
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">
              {cardTitle.malaysiaIpoh[lang]}
            </div>
            <div className="text-default-400 text-sm tracking-widest h-[28px] flex items-center">{`2012 - 2014`}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
