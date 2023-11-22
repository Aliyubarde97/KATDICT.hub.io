import React from "react";
import NAWALS from "../assets/img/offl.jpeg";

const Banners = () => {
  return (
    <section className=" container" id="Portfolio" >
      <div className="container py-20 ">
        <div className="flex flex-col justify-between items-center sm:flex-row p-5">
          <div className="md:w-1/2 sm:mb-10 p-5">
            <img src={NAWALS} alt="" className="h-[500px]ii w-[500px]" />
          </div>
          <div className="md:w-1/2 sm:mb-10">
            <span className="text-color-secondry mt-0">
              Naufal Ahmad, is a Nigerian civic leader and tech ecosystem
              builder. He holds a Bachelor of Science degree in Geography and a
              master's degree in Resources Development and International Affairs
              and Diplomacy who worked with government institutions and
              international organizations to strengthen Nigeria's ecosystem over
              his 8-year career. Naufal is a consultant with the World
              Bank-AGILE project and has served on various government
              committees. He played a key role in developing policies like NIIEV
              and the Nottooyoungtorun bill. .
            </span>
            <p className="mt-5">
              Co-founder of Kirkira Innovation Hub, he trained over 3,000 young
              people in digital technologies and supported startups to thrive.
              His work is recognized by prestigious institutions, and he's
              ranked among Africa's 100 most influential young people. Naufal is
              a skilled project manager, communicator, and community organizer
              with expertise in policy advocacy and leadership.
            </p>{" "}
            <h1 className="mt-7">
              {" "}
              He will be the pioneer Director General of the Katsina State ICT
              Directorate established by Dr Dikko Umar Raddah.
            </h1>
            <h1 class="font-bold leading-snug mb-4 capitalize">
              - Naufal Ahmad Director General, KATDICT
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
