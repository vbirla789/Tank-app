import React from "react";
import Get from "../components/Home/Get";
import Form from "../components/Home/Form";
import Location from "../components/Home/Location";
import { items } from "../data/data";
import Slide from "../components/Home/Slide";
import Trust from "../components/Home/Trust";
import Install from "../components/Home/Install";
import Categories from "../components/Home/Categories";

const Home = () => {
  return (
    <div className="min-h-[200vh] pt-[10vh]">
      {/* <Get />
      <Form />
      <Location /> */}
      <Slide items={items} />
      <Trust />
      <Install />
      <Categories />
    </div>
  );
};

export default Home;
