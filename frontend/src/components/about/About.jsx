import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
        Welcome to our To-Do List App — your personal task manager designed to help you stay organized and productive! We created this simple yet powerful application to make task management easy and accessible for everyone. Whether you're planning your day, tracking important deadlines, or just making a grocery list, our app is built to help you stay on top of it all. With features like: Creating and managing tasks in real-time Updating your progress with a single click Keeping your list clean by deleting completed items A clean and responsive interface across devices Our goal is to combine speed, simplicity, and functionality in one seamless experience. The app is powered by a modern tech stack — a fast and secure backend built with Node.js & Express, and an intuitive front end using the latest web technologies. We're always working on improving the app. Stay tuned for new features!
        </p>
      </div>
    </div>
  );
};

export default About;
