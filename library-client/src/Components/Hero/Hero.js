import React from "react";
import { photo1, photo2, photo3, photo4 } from "../../assests";
import SimpleImageSlider from "react-simple-image-slider";
const Hero = () => {
  const images = [
    { url: photo1 },
    { url: photo2 },
    { url: photo3 },
    { url: photo4 },
  ];
  return (
    <div name="home" className=" container-div w-full  h-[700px] ">
      {/* Container  */}
      <div className="flex  flex-col  justify-center  items-center  w-full  h-full">
        <div className="max-w-[1350px] w-full  grid  sm:grid-cols-2   gap-12 px-4">
          <div>
            <span className="text-2xl text-blue-600 text-center">
              Why Kitabu{" "}
            </span>
            <p className="   text-black size-18 text-2xl py-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div>
            <SimpleImageSlider
              className="rounded-full"
              width={896}
              height={504}
              loop={true}
              autoPlayDelay={2.0}
              autoPlay={true}
              images={images}
              showBullets={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
