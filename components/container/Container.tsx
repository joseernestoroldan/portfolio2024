import React from "react";
import { ContainerProps } from "@/types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full lg:max-w-5xl mx-auto bg-green-600 ">{children} </div>
  );
};

export default Container;
