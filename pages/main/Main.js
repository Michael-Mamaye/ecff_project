import React, { useState, useEffect } from "react";
import Image from "next/Image";
import ThisItem from "../../public/images/mainPageBackground.png";
import CoffeeCape from "../../public/images/coffeeCape.png";
import CoffeeCup from "../../public/images/coffeeCup.png";
import CoffeeHand from "../../public/images/coffeeHand.png";
import CultivatingPic from "../../public/images/cultivatingPic2.png";
import CultivatingPic2 from "../../public/images/cultivatingPic.png";
import GreenAreaCoffee from "../../public/images/greenAreaCoffee.png";
import CoffeeConference from "../../public/images/CoffeeConference.png";
import ProfilePic from "../../public/images/profile.png";
import UsaidLogo from "../../public/usaid.svg";
import EurasLogo from "../../public/euras.svg";
import startQuote from "../../public/startQuote.svg";

function Main() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04abf35fd24923ad803b12003dfda3"
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
        style={{
          background: `radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${ThisItem.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
        className="flex justify-end px-10 items-center"
      >
        <div className="flex-col text-end">
          <h1 className="text-xl text-white font-bold brightness-200 text-end">
            Sustainablity is Our Core Principle
          </h1>
          <p
            style={{ maxWidth: "315px" }}
            className="flex text-white brightness-75 text-end"
          >
            Lorem Ipsum, sometimes referred to as is the placeholder text used
            in design when creating content. It helps designers plan out
          </p>
          <a className=" text-lg underline text-white font-bold">LEARN MORE</a>
        </div>
      </div>
      <div
        style={{ minHeight: 350 }}
        className="px-20 grid xs:grid-cols-2 md:grid-cols-3 gap-8 -mt-24 text-white text-center"
      >
        <div
          className="flex items-end border-solid border-8 justify-center pb-6"
          style={{
            background: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url(${CoffeeCup.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "round",
            width: "300px",
          }}
        >
          <div className="w-1/2">
            <p className="font-bold">Project 1</p>
            <p>lorem iaculis lorem iaculis lorem iaculis </p>
            <p className="border-2 text-center items-center">read more </p>
          </div>
        </div>
        <div
          className="flex items-end border-solid border-8 justify-center pb-6"
          style={{
            background: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url(${CoffeeCape.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "round",
            width: "300px",
          }}
        >
          <div className="w-1/2">
            <p className="font-bold">Project 2</p>
            <p>lorem iaculis lorem iaculis lorem iaculis </p>
            <p className="border-2 text-center items-center">read more </p>
          </div>
        </div>
        <div
          className="flex items-end border-solid border-8 justify-center pb-6"
          style={{
            background: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.7)),url(${CoffeeHand.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "round",
            width: "300px",
          }}
        >
          <div className="w-1/2">
            <p className="font-bold">Project 3</p>
            <p>lorem iaculis lorem iaculis lorem iaculis </p>
            <p className="border-2 text-center items-center">read more </p>
          </div>
        </div>
      </div>
      {/* about us div */}
      <div className="flex bg-[#F3F1E7] my-20 h-96 px-10 items-center">
        <div className="flex w-1/2 shadow-[7px_7px_0px_-1px_#810102] h-full mt-32">
          <Image className="h-ful" src={CultivatingPic} alt="cultivation" />
        </div>
        <div className="flex-col ml-10 w-1/2 gap-y-8">
          <h1 className="text-3xl text-[#810102] font-bold">About US</h1>
          <p className="text-black brightness-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            mattis id nunc vitae gravida. Aenean quis velit ante. Vestibulum
            porttitor lorem pretium porta ornare. Sed eget laoreet nibh. Donec
            vitae faucibus nulla, ut dictum urna.
          </p>
          <a className="text-xl text-[#810102] underline">LEARN MORE</a>
        </div>
      </div>
      {/* publication div */}
      <div className="flex-col mt-36 px-10 mb-12">
        <h1 className="flex justify-center text-3xl font-bold text-[#810102] mb-12">
          Publications
        </h1>
        <div className="grid grid-cols-2">
          <div
            style={{
              background: `url('${CultivatingPic2.src}')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "450px",
            }}
            className="flex justify-end"
          >
            <div className="w-1/2 text-start mt-10">
              <h2 className=" text-xl text-white justify-right">
                2021 Production Reports
              </h2>
              <br />
              <p className=" text-xs text-white">
                Description lorem escription lorem escription loremescription
                loremescription loreme
              </p>
              <div className="mt-48">
                <p className="text-white my-2">4.1 MB PDF</p>
                <p className="w-1/2 text-white text-center border-2 p-2">
                  DOWNLOAD
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-8">
            <div
              style={{
                background: `url('${GreenAreaCoffee.src}')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "200px",
              }}
              className="flex justify-end"
            >
              <div className="w-1/2 text-start mt-6">
                <h2 className=" text-xl text-white justify-right">
                  2021 Production Reports
                </h2>
                <br />
                <p className=" text-xs text-white">
                  Description lorem escription lorem escription loremescr iption
                  loremescription loreme
                </p>
                <div className="mt-8">
                  <p className="w-1/2 text-white border-2 p-1 text-center">
                    READ MORE
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url('${CoffeeConference.src}')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "200px",
              }}
              className="flex justify-end"
            >
              <div className="w-1/2 text-start mt-6">
                <h2 className=" text-xl text-white justify-right">
                  2021 Seminar
                </h2>
                <br />
                <p className=" text-xs text-white">
                  Description lorem escription lorem escription loremescription
                  loremescription loreme
                </p>
                <div className="mt-3">
                  <p className="text-white mb-2">32 mins</p>
                  <p className="w-1/3 text-white border-2 p-1 text-center">
                    VIEW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feedbacks div */}

      <div className="flex-col bg-[#F3F1E7] justify-center my-20 px-10 text-center items-center py-12">
        {/* <p className="text-[300px] text-[#810102] font-[verdana]">&ldquo;</p> */}
        <Image
          src={startQuote.src}
          alt="cotation mark"
          height={50}
          width={50}
        />
        <p className="text-sm opacity-50">
          Thousands of satisfied users around the globe
        </p>
        <div className="mt-2 flex justify-center">
          <p className="w-1/2">
            {`"`} lorem ipsum dolor sit amet consectetur adipiscing lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            consectetur adipiscing lorem ipsumt. {`"`}
          </p>
        </div>
        <div className="flex justify-center items-center my-10">
          <p className="text-sm opacity-50 pl-2 pr-2"> &larr; PREV </p>
          <Image src={ProfilePic.src} alt="profile" height={50} width={50} />
          <p className="text-sm opacity-50 pl-2 pr-2">NEXT &rarr;</p>
        </div>
        <p className="font-semibold">Abebech Derara</p>
        <p className="opacity-50">Customer</p>
      </div>

      {/* news and blog div */}
      <div className="flex-col justify-center my-20 px-10 text-center items-center py-10">
        <p className="font-semibold">STAY INFORMED</p>
        <h1 className="flex justify-center text-3xl font-bold text-[#810102] mb-12">
          News & Blogs
        </h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-3">
            {data?.articles?.map((article) => (
              <div className="flex-col p-4" key={article.description}>
                {article.urlToImage && (
                  <div>
                    <Image
                      src={article.urlToImage.src}
                      alt="article"
                      height={100}
                      width={100}
                    />
                    <p>{article.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* partners */}
      <div className="flex-col justify-center mt-20 px-10 text-center items-center py-10">
        <h1 className="flex justify-center text-3xl font-bold text-[#810102] mb-12">
          Partners
        </h1>
        <div className="flex gird-cols-5 gap-7 justify-center">
          <div className="border px-6">
            <Image src={UsaidLogo} alt="partners logo" width={70} height={70} />
          </div>
          <div className="border px-6">
            <Image src={EurasLogo} alt="partners logo" width={70} height={70} />
          </div>
          <div className="border px-6">
            <Image src={UsaidLogo} alt="partners logo" width={70} height={70} />
          </div>
          <div className="border px-6">
            <Image src={EurasLogo} alt="partners logo" width={70} height={70} />
          </div>
          <div className="border px-6">
            <Image src={UsaidLogo} alt="partners logo" width={70} height={70} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

// export async function getStaticProps() {
//   try {
//     const res = await fetch(
//       "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04abf35fd24923ad803b12003dfda3"
//     );
//     const newsData = res.json();
//     return {
//       props: {
//         newsData,
//       },
//     };
//   } catch {
//     return {
//       props: {
//         newsData: [],
//       },
//     };
//   }
// }
