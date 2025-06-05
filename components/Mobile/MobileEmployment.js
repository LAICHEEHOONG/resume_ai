import { useSelector } from "react-redux";

export default function MobileEmployment() {
  const lang = useSelector((state) => state.language?.language);
  const cardTitle = useSelector((state) => state.language?.cardTitle);

  return (
    <div className="flex flex-col w-full">
      {/* <div className="flex flex-col p-4">
        <div className="text-xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider ">
          {cardTitle.employmentHistory[lang]}
        </div>
      </div> */}

      <div className="flex flex-col">
        <div className="flex flex-col gap-1 p-2 ">
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
        </div>
      </div>
    </div>
  );
}
