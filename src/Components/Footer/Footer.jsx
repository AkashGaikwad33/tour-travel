import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Media/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="footer">
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type="video2/mp4" />
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-Aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel With Us</h2>
            </div>
            <div className="inputDiv flex">
              <input
                data-Aos="fade-up"
                type="text"
                placeholder="Enter Email Address"
              />
              <button data-Aos="fade-up" className="btn flex " type="submit">
                SEND <FiSend className="icon" />
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdOutlineTravelExplore classNameicon />
                  Travel.
                </a>
              </div>
              <div
                data-Aos="fade-up"
                data-Aos-duration="4000"
                className="footerParagraph"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis saepe iusto voluptate, fugiat illum nemo placeat illo
                exercitationem, repudiandae sed delectus hic sequi aut quo animi
                suscipit aperiam corporis voluptatibus.
              </div>
              <div data-Aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon" />
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <FaTripadvisor className="icon" />
              </div>
            </div>
            <div data-Aos="fade-up" className="footerLinks grid">
              {/* GROUP ONE */}
              <div
                data-Aos="fade-up"
                data-Aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Toursim
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>
              {/* GROUP TWO */}
              <div
                data-Aos="fade-up"
                data-Aos-duration="3300"
                className="linkGroup"
              >
                <span className="groupTitle">PARTNERS</span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostleWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tripadvisior
                </li>
              </div>
              {/* GROUP THREE */}
              <div
                data-Aos="fade-up"
                data-Aos-duration="5000"
                className="linkGroup"
              >
                <span className="groupTitle">LAST MINUTS</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  India
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Russia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Thiland
                </li>
              </div>
            </div>
            <div className="footerDiv flex">
              <small> BEST TRAVEL WEBSITE THEME</small>
              <small> COPYRIGHT RESERVED-2020</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
