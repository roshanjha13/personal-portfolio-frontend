import React from "react";
import SectionTitle from "../../components/Header/SectionTitle";

const About = () => {
  return (
    <div>
      <SectionTitle title="About " />
      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/52d82f19-52a8-4fc8-8fb2-8c3ba41b04dc/yGStS6Z1TY.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quibusdam reiciendis repellendus, quis veniam quo optio ipsam rem,
            harum expedita officia non recusandae rerum iure ea? Placeat unde,
            quae natus sequi labore amet. Quos, qui quisquam aperiam corporis
            nisi placeat!
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quibusdam reiciendis repellendus, quis veniam quo optio ipsam rem,
            harum expedita officia non recusandae rerum iure ea? Placeat unde,
            quae natus sequi labore amet. Quos, qui quisquam aperiam corporis
            nisi placeat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
