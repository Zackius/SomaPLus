import React from "react";
import { photo1, photo2, photo3, photo4 } from "../../assests";
import ImageSlider, { Slide } from "react-auto-image-slider";
const Hero = () => {
  return (
    <div name="home" className=" w-full  h-[900px] ">
      {/* Container  */}
      <div className="flex  flex-col  justify-center  items-center  w-full  h-full">
        <div className="max-w-[1350px] w-full  grid  sm:grid-cols-2   gap-12 px-4">
          <div>
            <p className="   text-black size-18">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div>
            <ImageSlider
              className="w-92 h-92"
              effectDelay={500}
              autoPlayDelay={2000}
            >
              <Slide>
                <img alt="img1" src={`${photo3}`} />
              </Slide>
              <Slide>
                <img alt="img2" src={`${photo1}`} />
              </Slide>
              <Slide>
                <img alt="img3" src={`${photo2}`} />
              </Slide>
              <Slide>
                <img alt="img4" src={`${photo4}`} />
              </Slide>
            </ImageSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
