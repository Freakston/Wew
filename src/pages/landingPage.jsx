import React from 'react';
import bios_logo from '../assets/bios_logo.png'
import inctf from '../assets/inctf.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import Countdown from 'react-countdown';

function LandingPage() {
    return (
        <>
            <div className="border">
            <div className="container bg-color-blue-dark">
                <header className="header">
                    <a href="https://bi0s.in/" className="header__logo-1"><img src={bios_logo} alt="Bi0s Icon" className="header__image-1" /></a>
                    <a href="https://inctf.in/" className="header__logo-2"><img src={inctf} alt="Amrita InCTF Icon" className="header__image-2" /></a>
                    <div className="header__media">
                        <a href="https://twitter.com/teambi0s"><img src={twitter} alt="Twitter Icon" className="header__media-image translate-right" /></a>
                        <a href="https://www.facebook.com/teambi0s/"><img src={facebook} alt="Facebook Icon" className="header__media-image translate-left" /></a>
                        <a href="https://www.linkedin.com/company/teambi0s/"><img src={linkedin} alt="LinkedIn Icon" className="header__media-image" /></a>
                        <a href="https://www.instagram.com/teambi0s"><img src={instagram} alt="Instagram Icon" className="header__media-image" /></a>
                    </div>
                </header>
                <section className="content">
                    <p className="content__heading">The 5th edition of INCTF International</p>
                    <Countdown className="content__timer" date={1628861400000}></Countdown>
                    <a href="/" className="content__button">Enter</a>
                    <a href="https://discord.gg/2EqHAMnTx2" className="content__rules">Discord Server</a>
                    <div className="space"></div>
                    
                </section>
                <iframe className="widget" src="https://discord.com/widget?id=807569626292289556&theme=dark"  allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
            </div>
        </>
    );
}

export default LandingPage;