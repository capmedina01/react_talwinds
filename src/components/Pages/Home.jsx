import React from "react";
import bg_dev from "../../assets/bg_presentation.jpg"
import dev from "../../assets/developercap.jpg"
import { Header } from "../Layouts/Header/Header";


const Home = () => {
  return (
    <div className=" h-screen w-screen overflow-hidden">
      <Header/>
    <img alt="header" src={bg_dev} className="md:hidden w-screen" />
    <div className="md:h-20 min-[700px]:hidden bg-[#2B2B29]"></div>
    <img
      alt="developer"
      src={dev}
      className="absolute left-[50%] top-[130px] md:left-[20%] md:static"
    />

    <div className="absolute md:text-[40px] xl:left-[-20px] xl:text-[40px]  md:left-[0] md:w-screen p-6  md:static left-[20%] top-[40%] w-[619px] h-[250px] text-white text-[64px] font-normal">
      <p> Hi! Im Carlos a software developer</p>      
    </div>
  </div>
  );
};

export default Home;
