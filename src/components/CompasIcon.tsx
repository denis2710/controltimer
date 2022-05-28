import { CircleNotch } from "phosphor-react";
import React from "react";

const CompasIcon: React.FC = () => {
  return (
    <div className="rounded-full text-5xl font-bold p-1 text-white bg-gradient-to-r from-[#21D2FE] to-[#3253C8]">
      <CircleNotch size={60} weight="bold" />
    </div>
  );
};

export { CompasIcon };
