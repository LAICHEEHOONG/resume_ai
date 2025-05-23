// import { Image, Card, CardBody, Button, Divider } from "@heroui/react";
// import TranslateIcon from "@mui/icons-material/Translate";
// import { TypeAnimation } from "react-type-animation";
// import { useSelector, useDispatch } from "react-redux";
// import { setLanguage } from "@/redux/features/language/languageSlice";

// export default function Top() {
//   const fullText = `I started web development in 2019, passionate about building modern apps with Next.js, React, Redux, MongoDB, and Tailwind CSS. I’m skilled in creating scalable RESTful APIs using Node.js, Express, and Mongoose. I learn from Udemy, Stack Overflow, YouTube, and official docs, using AI tools like ChatGPT, Grok, and DeepSeek to enhance my skills. I’m dedicated to continuous learning and hands-on practice.`;
//   const dispatch = useDispatch();
//   const language = useSelector((state) => state.language?.language);
//   const name = useSelector((state) => state.language?.name[language]);
//   const title = useSelector((state) => state.language?.title[language]);
//   const description = useSelector(
//     (state) => state.language.description[language]
//   );

//   return (
//     <div className="flex gap-5 justify-between items-center bg-white rounded-lg shadow-lg p-4">
//       <Image
//         alt="laicheehoong_img"
//         src="/images/laicheehoong.jpg"
//         width={225}
//         isBlurred
//         className="m-1"
//       />
//       <Card>
//         <CardBody
//           className="min-w-[600px] max-w-[640px] text-white h-[225px]"
//           style={{ backgroundColor: "rgb(222, 112, 112)" }}
//         >
//           <div className="flex items-center justify-between font-bold text-lg tracking-widest">
//             <div className="">
//               <TypeAnimation
//                 sequence={[name]}
//                 speed={105} // Speed: lower is faster, 75 corresponds to ~20ms per character
//                 style={{ whiteSpace: "pre-wrap" }} // Preserve line breaks
//                 cursor={false} // Show blinking cursor
//                 repeat={0} // Play animation once
//               />
//             </div>
//             <Button
//               isIconOnly
//               aria-label="lang"
//               color="default"
//               radius="full"
//               variant="flat"
//               onPress={() => {
//                 dispatch(setLanguage(language === "en" ? "zh" : "en"));
//               }}
//             >
//               <TranslateIcon className="text-white" />
//             </Button>
//           </div>
//           <div className="tracking-widest">
//             <div>
//               <TypeAnimation
//                 sequence={[title]}
//                 speed={105} // Speed: lower is faster, 75 corresponds to ~20ms per character
//                 style={{ whiteSpace: "pre-wrap" }} // Preserve line breaks
//                 cursor={false} // Show blinking cursor
//                 repeat={0} // Play animation once
//               />
//             </div>
//           </div>
//           <Divider className="my-1" />
//           <div className="py-1 text-small tracking-wider">
//             <TypeAnimation
//               sequence={[description]}
//               speed={105} // Speed: lower is faster, 75 corresponds to ~20ms per character
//               style={{ whiteSpace: "pre-wrap" }} // Preserve line breaks
//               cursor={false} // Show blinking cursor
//               repeat={0} // Play animation once
//             />
//           </div>
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

import { Image, Card, CardBody, Button, Divider, Avatar } from "@heroui/react";
import TranslateIcon from "@mui/icons-material/Translate";
import { TypeAnimation } from "react-type-animation";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "@/redux/features/language/languageSlice";

export default function Top() {
  const fullText = `I started web development in 2019, passionate about building modern apps with Next.js, React, Redux, MongoDB, and Tailwind CSS. I’m skilled in creating scalable RESTful APIs using Node.js, Express, and Mongoose. I learn from Udemy, Stack Overflow, YouTube, and official docs, using AI tools like ChatGPT, Grok, and DeepSeek to enhance my skills. I’m dedicated to continuous learning and hands-on practice.`;
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
        {/* <div className="text-2xl font-extrabold tracking-widest">
          Lai Chee Hoong
        </div> */}
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extrabold tracking-widest">
            {name}
            {/* <TypeAnimation
              key={`name-${language}`} // Add key to force remount on language change
              sequence={[name]}
              speed={55}
              style={{ whiteSpace: "pre-wrap" }}
              cursor={false}
              repeat={0}
            /> */}
          </div>
          <Button
            isIconOnly
            aria-label="lang"
            color="danger"
            radius="full"
            variant="flat"
            size="sm"
            onPress={() => {
              dispatch(setLanguage(language === "en" ? "zh" : "en"));
            }}
          >
            <TranslateIcon className="text-white" fontSize="small" />
          </Button>
        </div>
        <div className="text-default-400 tracking-widest">
          {title}
                     {/* <TypeAnimation
                key={`title-${language}`} // Add key to force remount on language change
                sequence={[title]}
                speed={55}
                style={{ whiteSpace: "pre-wrap" }}
                cursor={false}
                repeat={0}
              /> */}
        </div>
        <div className="text-small mt-2">
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
      {/* <Card>
        <CardBody
          className=" max-w-[520px] lg:max-w-[640px] text-white h-[215px]"
          style={{ backgroundColor: "rgb(222, 112, 112)" }}
        >
          <div className="flex items-center justify-between font-bold text-lg tracking-widest">
            <div>
              <TypeAnimation
                key={`name-${language}`} // Add key to force remount on language change
                sequence={[name]}
                speed={55}
                style={{ whiteSpace: "pre-wrap" }}
                cursor={false}
                repeat={0}
              />
              
            </div>
            <Button
              isIconOnly
              aria-label="lang"
              color="danger"
              radius="full"
              variant="flat"
              size="sm"
              onPress={() => {
                dispatch(setLanguage(language === "en" ? "zh" : "en"));
              }}
            >
              <TranslateIcon className="text-white" fontSize="small" />
            </Button>
          </div>
          <div className="tracking-widest">
            <div>
              <TypeAnimation
                key={`title-${language}`} // Add key to force remount on language change
                sequence={[title]}
                speed={55}
                style={{ whiteSpace: "pre-wrap" }}
                cursor={false}
                repeat={0}
              />
            </div>
          </div>
          <Divider className="my-1" />
          <div className="py-1 text-small tracking-wider">
            <TypeAnimation
              key={`description-${language}`} // Add key to force remount on language change
              sequence={[description]}
              speed={105}
              style={{ whiteSpace: "pre-wrap" }}
              cursor={false}
              repeat={0}
            />
          </div>
        </CardBody>
      </Card> */}
    </div>
  );
}
