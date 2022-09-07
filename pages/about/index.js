import React, { useEffect, useState } from "react";
import CoffeeBeans from "../../public/images/coffeeBeans.png";
import Image from "next/Image";
import BeansImage from "../../public/images/beans.png";
import MeetingImage from "../../public/images/meeting.png";

import HouseLogo from "../../public/house.svg";
import TractorLogo from "../../public/tractor.svg";
import MoneyLogo from "../../public/money.svg";
import CaptureLogo from "../../public/capture.svg";

import DivImage from "../../public/images/divImage.png";

const About = ({ impactsData }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div
        className="flex items-center h-80 px-10"
        style={{
          background: `radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${CoffeeBeans.src})`,
          // backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-bold text-2xl text-white">About Us / Overview</p>
      </div>
      {/* we are ecff div */}
      <div className="flex justify-center my-20 mb-48 h-96 px-10 items-center">
        <div className="flex-col ml-10 w-1/2 gap-y-8">
          <h1 className="text-3xl text-[#810102] font-bold">We are ECFF</h1>
          <br />
          <p className="text-black brightness-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            mattis id nunc vitae gravida. Aenean quis velit ante. Vestibulum
            porttitor lorem pretium porta ornare. Sed eget laoreet nibh. Donec
            vitae faucibus nulla, ut dictum urna.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse mattis id nunc vitae
            gravida. Aenean quis velit ante. Vestibulum <br />
            <br />
            vitae faucibus nulla, ut dictum urna.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse mattis id nunc vitae
            gravida. Aenean quis velit ante. Vestibulum
          </p>
        </div>
        <div className="flex w-1/2 h-full mt-32 mx-8">
          <div>
            <div className="shadow-[-5px_-5px_4px_3px_#e5e7eb] w-3/4 ">
              <Image src={BeansImage} alt="beans" />
            </div>
            <div className="-mt-28 ml-28 w-3/4">
              <Image className="h-ful" src={MeetingImage} alt="meeting" />
            </div>
          </div>
        </div>
      </div>

      {/*Impacts Div*/}
      <div className="flex gird-cols-5 gap-7 justify-center mb-20 text-xl font-bold">
        <div className="flex px-6 items-center">
          <Image
            src={HouseLogo.src}
            alt="partners logo"
            width={70}
            height={70}
          />
          <div className="flex-col px-5">
            <p>{data?.data[0]?.count}</p>
            <p>{data?.data[0]?.title}</p>
          </div>
        </div>
        <div className="flex px-6 items-center">
          <Image
            src={TractorLogo.src}
            alt="partners logo"
            width={70}
            height={70}
          />
          <div className="flex-col px-5">
            <p>{data?.data[1]?.count}</p>
            <p>{data?.data[1]?.title}</p>
          </div>
        </div>
        <div className="flex px-6 items-center">
          <Image
            src={MoneyLogo.src}
            alt="partners logo"
            width={70}
            height={70}
          />
          <div className="flex-col px-5">
            <p>{data?.data[2]?.count}</p>
            <p>{data?.data[2]?.title}</p>
          </div>
        </div>
        <div className="flex px-6 items-center">
          <Image
            src={CaptureLogo.src}
            alt="partners logo"
            width={70}
            height={70}
          />
          <div className="flex-col px-5">
            <p>{data?.data[3]?.count}</p>
            <p>{data?.data[3]?.title}</p>
          </div>
        </div>
      </div>

      {/* mission and vision div */}
      <div
        className="flex items-center justidy-center h-[525px] gap-5 px-10 py-20"
        style={{
          background: `url(${DivImage.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="w-1/2 flex text-white bg-black bg-opacity-20 border-2 h-96 text-center items-center p-20">
          <div>
            <p className="text-xl font-semibold">Mission</p>
            <br />
            <p>
              lorem ipsum doloe- satisfiedlorem ipsum doloe- satisfied lorem
              ipsum doloe- satisfiedlorem ipsum doloe- satisfiedlorem ipsum
              doloe- satisfiedlorem ipsum doloe- satisfied lorem ipsum doloe-
              satisfiedlorem ipsum doloe- satisfied atisfiedlorem ipsum doloe-
              satisfiedlorem ipsum doloe- satisfiedlorem ipsum doloe- satisfied
              lorem ipsum doloe- satisfiedlorem ipsum doloe- satisfied
              atisfiedlorem ipsum doloe- satisfiedlorem ipsum doloe-
              satisfiedlorem ipsum doloe- satisfied lorem ipsum doloe-
              satisfiedlorem ipsum doloe- satisfied
            </p>
          </div>
        </div>
        <div className="w-1/2 flex text-white bg-black bg-opacity-20 border-2 h-96 text-center items-center p-20 mt-32">
          <div>
            <p className="text-xl font-semibold">Vision</p>
            <br />
            <p>
              lorem ipsum doloe- satisfiedlorem ipsum doloe- satisfied lorem
              ipsum doloe- satisfiedlorem ipsum doloe- satisfiedlorem ipsum
              doloe- satisfiedlorem ipsum doloe- satisfied lorem ipsum doloe-
              satisfiedlorem ipsum
            </p>
          </div>
        </div> */}
      </div>
      {/* our story div */}
      <div className="flex-col justify-center my-20 px-10 text-center items-center py-10">
        <p className="font-semibold text-sm">HOW IT ALL BEGAN</p>
        <h1 className="flex justify-center tracking-widest text-3xl font-bold text-[#810102] mb-4">
          Our Story
        </h1>
        <div className="flex justify-center">
          <p className="w-2/3 opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            purus pharetra magna tempor egestas non id massa. Donec tristique
            dui vel mauris ullamcorper finibus. Curabitur maximus, sapien nec
            congue pellentesque, purus est iaculis mauris, vel sagittis enim
            magna at erat.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

// export async function getStaticProps() {
//   // const res = await fetch(
//   //   "https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word"
//   // );
//   // const impactsData = res.json();
//   return {
//     props: {
//       impactsData: [],
//     },
//   };
// }
