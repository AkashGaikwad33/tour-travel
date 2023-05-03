import React, { useEffect } from "react";
import "./main.css";
import img10 from "../../Media/img10.jpg";
import img2 from "../../Media/img2.jpg";
import img3 from "../../Media/img3.jpg";
import img4 from "../../Media/img4.jpg";
import img5 from "../../Media/img5.jpg";
import img11 from "../../Media/img11.jpeg";
import img7 from "../../Media/img7.jpg";
import img8 from "../../Media/img8.jpg";
import img9 from "../../Media/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

//     Array Data

const data = [
  {
    id: 1,
    imgSrc: img10,
    destTitle: "Thiland",
    location: "Khao Tapu",
    gread: " tin-rich Phuket Island",
    fees: "$500",
    Description:
      "Higher mountains reaching about 4,900 feet (1,500 metres) line the peninsula on the west and contain narrow passes linking Thailand and Myanmar.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Europe",
    location: " Leaning Tower of Pisa",
    gread: "Romanesque style",
    fees: "$600",
    Description:
      "The world-famous leaning tower is known around the globe for its incredible four-degree tilt that makes it seem as if the tower is about to topple over.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "London",
    location: "London",
    gread: "London Eye ",
    fees: "$700",
    Description:
      "the Coca-Cola London Eye is a huge Ferris wheel and can be called, the heart of the city. It is often regarded as the Millennium wheel.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Russia",
    location: "Moscow.",
    gread: "UNESCO World Heritage Sites.",
    fees: "$800",
    Description:
      "The Golden Ring consists of a total of 8 primary cities together with some subordinate cities situated in Moscow, Ivanovo, Yaroslavl, Vladimir, and Kostroma.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "England",
    location: "Tower Bridge",
    gread: "fabulous views of the Thames River",
    fees: "$900",
    Description:
      "One of the most recognizable bridges in the world, it is a stunning example of Victorian engineering and design.",
  },

  {
    id: 6,
    imgSrc: img11,
    destTitle: "Australia",
    location: "Shoalhaven",
    gread: "whitest sand beach",
    fees: "$1000",
    Description:
      "the beaches of Jervis Bay on the NSW South Coast have also been known to light up blue with phosphorescence at night.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Kerla",
    location: "Alleppey ",
    gread: "The Backwater Hot Spot",
    fees: "$1200",
    Description:
      "he fascination of Keralites with coconut and banana leaves in their food will prove to be a good experiment for you if you have never had it before.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "India",
    location: "Rajastan",
    gread: "The King Of Land",
    fees: "$5000",
    Description:
      "From beautiful lakes, vast deserts and rich wildlife to magnificent palaces, forts and temples, the city has so many things for a wonderful vacation.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "america",
    location: "Chile ",
    gread: " deserts to magnificent glacial fields",
    fees: "$7000",
    Description:
      "A beautiful land of extremes, it is every traveler’s dream to explore the varied terrain of Chile",
  },
];
const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="main container section">
        <div className="secTitle">
          <h3 className="title">Most Visted Destination</h3>
        </div>

        <div className="secContent grid">
          {data.map(
            ({ id, imgSrc, destTitle, location, gread, fees, Description }) => {
              return (
                <div key={id} data-Aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="h4 destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="/icon" />
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="gread">
                        <span>
                          {gread}
                          <small>+1</small>
                        </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="des">
                      <p>{Description}</p>
                    </div>
                    <button className="btn flex">
                      DEATILS
                      <HiOutlineClipboardCheck className="icon " />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Main;
