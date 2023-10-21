import React from "react";
import SectionTitle from "../../components/Header/SectionTitle";
import { useSelector } from "react-redux";

const Contact = () => {
  
  const { portfolioData } = useSelector((state) => state.root);
  const {contact} = portfolioData
  return (
    <div>
      <SectionTitle title="Contact Us" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-white ">{"{"}</p>
          {Object.keys(contact).map((key,_id) => (
            <p className="mx-5 " key={_id}>
              <span className="text-tertiary ">{key.toUpperCase()}:</span>
              <span className="text-tertiary  mx-2">{contact[key]}</span>
            </p>
          ))}
          <p className="text-white text-sm">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <img
            className=" h-52% w-80  m-10 flex rounded-full mx-40 justify-"
            src="https://th.bing.com/th/id/OIP.EPY7Sc9CJppZCFyH-ne-RQHaHa?pid=ImgDet&rs=1"
            />
        </div>
      </div>
    </div>
  );
};

export default Contact;
