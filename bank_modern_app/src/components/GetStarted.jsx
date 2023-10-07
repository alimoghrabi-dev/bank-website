import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] ${styles.hover} h-[140px] rounded-full bg-blue-gradient p-[2px]
     cursor-pointer`}>
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium leading-[23px] text-[18px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[21px] h-[21px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium leading-[23px] text-[18px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
