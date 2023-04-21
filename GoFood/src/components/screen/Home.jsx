import React from "react";

import Navbar from "../Navbar";
import Carousel from "../Carousel";
import Card from "../Card";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
