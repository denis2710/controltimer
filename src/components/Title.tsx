import React from "react";

interface TitleParams {
  children: any;
}

const Title: React.FC<TitleParams> = ({ children }) => {
  return <h1 className="text-5xl font-bold ">{children}</h1>;
};

export { Title };
