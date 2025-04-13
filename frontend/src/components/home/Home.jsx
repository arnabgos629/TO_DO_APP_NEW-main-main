import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
        Master your work and life with unstoppable <br /> energy — get organized like never before!
        </h1>
        <p>
        Stay focused, organized, and stress-free with the <br />
           Todo App — the world’s leading task manager.
        </p>
        <button class="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
