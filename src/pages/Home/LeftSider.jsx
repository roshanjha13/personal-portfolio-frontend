import React from "react";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/predictable.roshan/"
            target="_blank"
          >
            <i className="ri-facebook-circle-line text-gray-600"></i>
          </a>
          <a href="https://www.linkedin.com/in/roshanjha13/" target="_blank">
            <i className="ri-linkedin-box-fill text-gray-600"></i>
          </a>
          <a
            href="https://www.instagram.com/kumar.roshanjha916/?hl=en"
            target="_blank"
          >
            <i className="ri-instagram-line text-gray-600"></i>
          </a>
          <a href="https://twitter.com/Roshank26441316" target="_blank">
            <i className="ri-twitter-x-line text-gray-600"></i>
          </a>
          <a href="https://github.com/roshanjha13" target="_blank">
            <i className="ri-github-fill text-gray-600"></i>
          </a>
          {/* <i className="ri-mail-line text-gray-600"></i> */}
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
