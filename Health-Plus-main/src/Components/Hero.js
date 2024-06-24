import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctorimage_land.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <section className="main-container">
            <div className="main">
              <div className="big-circle">
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/web-dev-icon.png"
                    alt="web design icon"
                  />
                </div>
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/game-design-icon.png"
                    alt="game design icon"
                  />
                </div>
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/game-dev-icon.png"
                    alt="game dev icon"
                  />
                </div>
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/ui-ux-icon.png"
                    alt="ui-ux icon"
                  />
                </div>
              </div>
              <div className="circle">
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/app-icon.png"
                    alt="app icon"
                  />
                </div>
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/blockchain-icon.png"
                    alt="blockchain icon"
                  />
                </div>
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/arvr-icon.png"
                    alt="ar-vr icon"
                  />
                </div>
                <div className="icon-block">
                  <img
                    src="https://www.yudiz.com/codepen/animated-portfolio/artificial-intelligence-icon.png"
                    alt="artificial intelligence icon"
                  />
                </div>
              </div>
              <div className="center-logo">
                <img
                  src="https://www.yudiz.com/codepen/animated-portfolio/logo.png"
                  alt="logo"
                />
              </div>
            </div>
          </section>

          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
