import { Image, Card, CardBody, Button, Divider } from "@heroui/react";
import TranslateIcon from "@mui/icons-material/Translate";

export default function Top() {
  return (
    <div className="flex gap-5 justify-between items-center bg-white rounded-lg shadow-lg p-4">
      <Image
        alt="laicheehoong_img"
        src="/images/laicheehoong.jpg"
        width={195}
        isBlurred
        className="m-1"
      />
      <Card>
        <CardBody className="min-w-[600px] max-w-[640px]">
          <div className="flex items-center justify-between font-bold text-lg tracking-widest">
            <div className="">LAI CHEE HOONG</div>
            <Button
              isIconOnly
              aria-label="lang"
              color="default"
              radius="full"
              variant="light"
            >
              <TranslateIcon className="text-slate-400" />
            </Button>
          </div>
          <div className="tracking-widest text-default-500 ">
            <div>Web Developer</div>
          </div>
          <Divider className="my-1" />
          <div className="py-1 text-small text-default-500">
            {` I'm an amateur Web Developer with 4+ years experience in making web
                pages with React, Redux, RESTful API, Node.js, Express, Mongoose,
                and MongoDB. My learning comes from online courses Udemy, Stack
                Overflow, YouTube, Documentation, ChatGPT, etc. I'm passionate about
                programming and front-end development, and I'm constantly improving
                myself through learning and doing.`}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
