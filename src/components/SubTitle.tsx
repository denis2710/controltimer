import React from "react";

interface SubTitleParams {
  children: any;
}

const SubTitle: React.FC<SubTitleParams> = ({ children }) => {
  return <h1 className="text-2xl font-normal ">{children}</h1>;
};

export { SubTitle };
