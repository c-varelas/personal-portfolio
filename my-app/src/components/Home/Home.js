import React from "react";
import './Home.css'
import Image from "../../assets/IMG_9921.JPG";

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <div className="homeImage">
        <div className="homeTitle">
          <h1>Hello I am Cynthia. A Fullstack Developer and Linguist</h1>
          <img
            src={Image}
            alt="selfie"
          />
        </div>
      </div>
    </>
  );
};

export default Home;