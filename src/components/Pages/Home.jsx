import React from "react";
import bg_dev from "../../assets/bg_presentation.jpg";
import dev from "../../assets/developercap.jpg";
import { Header } from "../Layouts/Header/Header";
import Aboutme from "../Layouts/About/Aboutme";


const Home = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden">
     
      <img alt="header" src={bg_dev} className="md:hidden w-screen" />

      <img
        alt="developer"
        src={dev}
        className="absolute left-[65%] top-[90px] md:left-[20%] md:static"
      />

      <div className="absolute md:text-[50px] xl:left-[-20px] xl:text-[40px] ml-8  top-[50%] w-[620px] h-[250px] text-white text-[64px] font-normal">
        <p> Hi! Im Carlos a software developer</p>
      </div>
            
    </div>
  );
};

export default Home;
