import React from "react";

import { items } from "../data/data";
import Slide from "../components/Home/Slide";
import Trust from "../components/Home/Trust";
import Install from "../components/Home/Install";
import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import Content from "../components/Home/Content";
import Carousel from "../components/Home/Carousel";
import Select from "../components/Home/Select";

const Home = () => {
  return (
    <div className="min-h-[200vh] pt-[10vh] md:pt-[12vh]">
      <Hero />
      <Content />
      <div className="bg-gradient-to-r from-[#01182E] to-[#142D43] ">
        <Carousel />
        <Slide items={items} />
        <Select />
      </div>

      <Trust />
      <Install />
      <Categories />
    </div>
  );
};

export default Home;
