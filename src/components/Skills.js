import React from "react";

export default function Skills(props) {
  const skillImage = props.img.map((item) => {
    return (
      <div className="flex flex-col items-center m-3">
        <img
          className="w-16 h-16 lg:w-20 lg:h-20"
          src={item.path}
          alt={`icon of ${item.name}`}
        ></img>
        <p className="">{item.name}</p>
      </div>
    );
  });

  return (
    <section
      id="skills"
      className=" section font-noto  w-screen bg-yellow-100 overflow-hidden p-6 md:p-20 mx-auto"
    >
      <div className="reveal container flex flex-col md:flex-row mr-auto ml-auto  w-5/6 border-4 border-orange-200 ">
        <div className="flex  bg-orange-200 h-20 md:h-auto w-full md:w-1/3  justify-center items-center">
          <h2 className="text-6xl text-yellow-100 border-4 border-yellow-300 p-6 md:p-16 lg:p-24 xl:p-40">
            Skills
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap md:w-2/3 lg:w-1/2 p-6 md:p-10 ml-auto mr-auto">
          {skillImage}
        </div>
      </div>
    </section>
  );
}