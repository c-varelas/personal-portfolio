import React from "react";
import './Home.css'
import Image from "../../assets/IMG_9921.JPG";

const Home = () => {
  return (
    <>
      <div id="home"></div>
      <div className="homeImage">
        <div className="homeTitle">
        <img
            src={Image}
            alt="selfie"
          />
          <h1>Hello I am Cynthia. A Fullstack Developer and Linguist</h1>
          <h2>Welcome to my Portfolio! Have fun Exploring!</h2>
        </div>
      </div>
    </>
  );
};

export default Home;