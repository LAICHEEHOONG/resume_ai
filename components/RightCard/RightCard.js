import Course from "../Course/Course";

export default function RightCard() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-1">
        <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 tracking-wider">
          COURSES & TRAININGS
        </div>
      </div>
      <div className="flex flex-col gap-1 my-2  backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20 ">
        <Course course="Intro to MySQL With Node.js - Learn To Use MySQL with Node!" year="2023" />  
        <Course course="The Beginning with GIT & Github course" year="2023" />
        <Course course="The complete React 18 Fullstack course" year="2022" />
        <Course course="The Complete Web Development Bootcamp" year="2020" />
      </div>  
  

      {/* <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="4xl"
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Fade className="flex flex-col  space-y-4 py-4">
                  <div className="w-full max-w-[1200px]">
                    <div className="relative overflow-hidden rounded-lg w-full aspect-video">
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${youtube}`}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Fade>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
}
