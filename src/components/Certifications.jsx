import React from "react";
import InfoSection from "./common/InfoSection";

const Certifications = ({id}) => {
  const infos = [
    {
      title: "Financial Accounting 1",
      company: {
        name: "Jahad Daneshgahi",
        link: "http://edu.jdm.ac.ir/",
      },
      date: {
        start: "July 2023",
        end: "September 2023",
      },
      location: "Mashhad",
    },  
  ];
  return (
    <div id={id}>
      <div class="m-3 pt-2">
        <div class="text-center text-xl font-bold text-blue-900 sm:text-2xl">
          Certifications
        </div>
        {infos.map((item, index) => (
          <InfoSection info={item} key={index} />
        ))}
      </div>
      <div class="h-px w-full border border-neutral-400"></div>
    </div>
  );
};

export default Certifications;
