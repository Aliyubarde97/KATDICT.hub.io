import React from "react";
import { Carousel } from "flowbite-react";
import p1 from "../assets/img/c1p1.jpeg";
import p2 from "../assets/img/c1p2.jpeg";
import p3 from "../assets/img/c1p3.jpeg";
import p4 from "../assets/img/c1p4.jpeg";
import p5 from "../assets/img/c2p1.jpeg";
import p6 from "../assets/img/c2p2.jpeg";
import p7 from "../assets/img/c2p3.jpeg";
import p8 from "../assets/img/c3p1.jpeg";
import p9 from "../assets/img/c3p2.jpeg";
import p10 from "../assets/img/c2p3.jpeg";
import p11 from "../assets/img/c3p3.jpeg";
import p12 from "../assets/img/c3p4.jpeg";

const Activity = () => {
  return (
    <section className="container  bg-NeutralHome mt-10" id="Activities">
      <div className="container py-20">
        <p className="text-neutralSilver mb-10 text-4xl text-center justify-center font-bold leading-snug  ">
          Our Activities
        </p>
        <div className="Card">
          <div className="grid  h-[350px] lg:grid-cols-3 gap-5 md:grid-cols-2  px-10 sm:px-6 lg:px-8 ">
            <Carousel className="">
              <img src={p1} alt="..." className=" object-fill " />
              <img src={p2} alt="..." className=" object-fill " />
              <img src={p3} alt="..." className=" object-fill " />
              <img src={p4} alt="..." className=" object-fill " />
            </Carousel>
            <Carousel indicators={false} className="">
              <img src={p5} alt="..." className=" object-fill " />
              <img src={p6} alt="..." className=" object-fill h-[350px]" />
              <img src={p7} alt="..." className=" object-fill " />
              <img src={p8} alt="..." className=" object-fill " />
            </Carousel>
            <Carousel indicators={false} className="">
              <img src={p9} alt="..." className=" object-fill " />
              <img src={p10} alt="..." className=" object-fill " />
              <img src={p11} alt="..." className=" object-fill " />
              <img src={p12} alt="..." className=" object-fill " />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
