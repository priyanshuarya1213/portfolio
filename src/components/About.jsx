import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-10">
          I am a skilled full stack developer with experience in React and a
          keen interest in exploring new technologies like NextJs. During my
          internship at SpiraleInfosoft, I worked on a Learning Management
          System using MERN stack where I was responsible for fetching data from
          backend APIs to the frontend and creating models, routes, and
          controllers for students, teachers and parents.I also independently
          developed a number of projects that demonstrate my skills and
          knowledge in MERN STACK technology.Overall, I am a talented and
          dedicated developer with a passion for staying up-to-date with the
          latest advancements in my field.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
