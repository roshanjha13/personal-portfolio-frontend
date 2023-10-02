import React from "react";
import SectionTitle from "../../components/Header/SectionTitle";

const About = () => {
  const skills = [
    "Javascript",
    "React",
    "Github",
    "Node.js",
    "Express.js",
    "Mongodb",
    "WebRTC",
    "Socket.io",
    "Redux Toolkit",
    "ContextAPI",
    "React Router Dom",
  ];

  return (
    <div>
      <SectionTitle title="About " />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src="https://lottie.host/52d82f19-52a8-4fc8-8fb2-8c3ba41b04dc/yGStS6Z1TY.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
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

      <div className="py-5">
        <h1 className="text-xl text-tertiary">
          Here are a few technologies ,I've been working and learning with
          recently
        </h1>
        <div className="flex flex-wrap gap-10 m-6">
        {skills.map((skill,index)=>(
            <div key={index} className="border border-tertiary py-3 px-4 rounded-full">
              <h1 className="text-tertiary">{skill}</h1>  
            </div>         
        ))}
        </div>
      </div>
    </div>
  );
};

export default About;

