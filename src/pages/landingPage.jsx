import React from 'react';
import bios_logo from '../assets/bios_logo.png'
import inctf from '../assets/inctf.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import GCP_logo from '../assets/GCP.png'
import Countdown from 'react-countdown';

function LandingPage() {
    return (
        <>
            <div className="border">
            <div className="container bg-color-blue-dark">
                <header className="header">
                    <a href="https://bi0s.in/" className="header__logo-1"><img src={bios_logo} alt="Bi0s Icon" className="header__image-1" /></a>
                    <a className="header__logo-2"><img src={inctf} alt="Amrita InCTFi Icon" className="header__image-2" /></a>
                    <div className="header__media">
                        <a href="https://twitter.com/teambi0s"><img src={twitter} alt="Twitter Icon" className="header__media-image translate-right" /></a>
                        <a href="https://www.facebook.com/teambi0s/"><img src={facebook} alt="Facebook Icon" className="header__media-image translate-left" /></a>
                        <a href="https://www.linkedin.com/company/teambi0s/"><img src={linkedin} alt="LinkedIn Icon" className="header__media-image" /></a>
                        <a href="https://www.instagram.com/teambi0s"><img src={instagram} alt="Instagram Icon" className="header__media-image" /></a>
                    </div>
                </header>
                <section className="content">
                    <p className="content__heading">The 5th edition of InCTF International</p>
                    <Countdown className="content__timer" date={1628861400000}></Countdown>
                    <a href="/" className="content__button">Enter</a>
                    <a href="https://discord.gg/CZCYZNqC4B" className="content__rules">Discord Server</a>
                    <div className="space"></div>
                </section>
                <p className="gcp_txt">{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Infrastructure sponsored by</p>
                <div className="crop">
                    <img src={GCP_logo} alt="GCP" />
                </div>
                <iframe className="widget" src="https://discord.com/widget?id=862962550169665568&theme=dark"  allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </>
    );
}

export default LandingPage;