import React from "react";
import InfoSection from "./common/InfoSection";

const Projects = ({ id }) => {
  const infos = [
    {
      title: "Ethereum Crowdfunding platform",
      company: {
        name: "BSc Project",
        link: "",
      },
      description: ["Developing web pages using React and chakra-ui"],
    },
    {
      title: "Human Resources Telegram Bot",
      company: {
        name: "Tousradieh Company",
        link: "",
      },
      description: [
        "Using a telegram bot for company human resources activity such as navigation and presence.",
        "Implemented with python-telegram-bot and Django orm.",
      ],
    },
    {
      title: "AIC20-Client",
      company: {
        name: "AlChallenge 2020",
        link: "",
      },
      description: [
        "Developing client side of Al challenge for users with Python",
      ],
    },
    {
      title: "Duelyst Game",
      company: {
        name: "Advanced Programming Class",
        link: "",
      },
      description: [
        "Working on the server-client program to implement the game with MVC using Java programming language",
      ],
    },
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Projects
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Projects;
