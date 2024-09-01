import React from "react";

type TagProps = {
  text: string;
};

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <p className="flex items-center rounded-full bg-markblue/25 px-2 py-[3px] md:px-3 md:py-1 text-[11px] md:text-xs font-medium leading-5 text-blue-500 ">
      {text}
    </p>
  );
};

export default Tag;
