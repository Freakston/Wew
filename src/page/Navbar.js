import React from "react";
import bios_logo from "../assets/bios_logo.png";
import inctf from "../assets/inctf.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import GCP_logo from "../assets/GCP.png";
import Countdown from "react-countdown";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="flex justify-between md:gap-5 px-5 md:mt-0 pt-5">
        <a href="https://bi0s.in/" className="md:w-1/2">
          <img src={bios_logo} alt="Bi0s Icon" className="w-40" />
        </a>
        <a className="md:pt-10 pt-20 md:w-1/3">
          <img src={inctf} alt="Amrita InCTFi Icon" />
        </a>
        <div className="flex md:scale-100 scale-125 transform justify-end content-center  pt-5 md:w-1/2 md:pt-0 gap-1 md:gap-3">
          <a href="https://twitter.com/teambi0s">
            <img src={twitter} alt="Twitter Icon" className="w-10" />
          </a>
          <a href="https://www.facebook.com/teambi0s/">
            <img src={facebook} alt="Facebook Icon" className="w-10" />
          </a>
          <a href="https://www.linkedin.com/company/teambi0s/">
            <img src={linkedin} alt="LinkedIn Icon" className="w-10" />
          </a>
          <a href="https://www.instagram.com/teambi0s">
            <img src={instagram} alt="Instagram Icon" className="w-10" />
          </a>
        </div>
      </header>
      <section className="content">
        <p className="content__heading text-6xl">
          The 5th edition of InCTF International
        </p>
        <br />
        <br />
        <br />
        <Countdown
          className="text-gray-500 mt-20 text-5xl"
          date={1628861400000}
        ></Countdown>
        <br />
        <br />
        <br />
        <a href="https://ctf.inctf.in/" className="px-10 py-5 bg-yellow-500 text-2xl rounded-full font-bold">
          Enter
        </a>
        <br />
        <br />
        <br />
        <a
          href="https://discord.gg/CZCYZNqC4B"
          className="text-white text-2xl underline"
        >
          Discord Server
        </a>
        <div class="bg md:flex justify-betweeen">
          <div>
            <p className="text-white md:text-left px-20 text-center md:pt-0 pt-10 h-auto">Infrastructure sponsored by</p>
            <div className="md:-mt-10 flex md:justify-start justify-center h-100">
              <img height="30%" width="40%" class="md:-mt-20" src={GCP_logo} alt="GCP" />
            </div>
          </div>
          <div className="md:block hidden md:absolute right-0 h-100 mx-5 mb-3 -mt-20" style={{"height":"50%"}}>
          <iframe
            className="md:block hidden h-full mr-5"
            src="https://discord.com/widget?id=862962550169665568&theme=dark"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
