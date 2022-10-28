import React from "react";
import circle from "./images/circle.png";

function Home() {
  return (
    <>
      <main>
        <div className="home-header header content">
          <h1> The Art of Aesthetic Products</h1>
          <p>
            {" "}
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
          <button className="btns home-btn"> Get Started</button>
          <button className="btns home-btn2"> Learn More</button>
        </div>
        <div>
          <img src={circle} alt="circle" />
        </div>
      </main>
    </>
  );
}

export default Home;
