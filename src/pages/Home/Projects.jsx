import React, { useState } from "react";
import SectionTitle from "../../components/Header/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const {project} = portfolioData
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((projects, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
                    : "text-white"
                }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
            <img src={project[selectedItemIndex].image}  alt="" className="h-60 w-72"/>
          <div className="flex flex-col gap-5 ">
            <h1 className="text-secondary text-xl ">
              {project[selectedItemIndex].title}
            </h1>

            <p className="text-xl text-white ">
              {project[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
