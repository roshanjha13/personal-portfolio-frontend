import React, { useState } from "react";
import SectionTitle from "../../components/Header/SectionTitle";
import { useSelector } from "react-redux";
const Education = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const {  portfolioData } = useSelector((state) => state.root);
  const {education} = portfolioData
  return (
    <div>
      <SectionTitle title="Education" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {education.map((edu, index) => (
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
                {edu.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          
          <div className="flex flex-col gap-5 ">
            <h1 className="text-secondary text-xl ">
              {education[selectedItemIndex].title}
            </h1>

            <p className=" text-white ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ab
              aliquam tenetur pariatur inventore deserunt ex eaque reprehenderit
              fugiat impedit.
            </p>
          </div>
          <img
            src={education[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
