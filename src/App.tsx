import "./App.css";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function App() {
  const segments = [
    "CHEMICALS & PROCESS",
    "POWER",
    "WATER & WASTE WATER",
    "OILS & GAS",
    "PHARMA",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP",
    "MARINE & DEFENCE",
    "METAL & MINING",
    "FOOD & BEVERAGE",

    "PETROCHEMICAL & REFINERIES",
    "SOLAR",
    "BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ];
  return (
    <div className="container">
      <div className="top__container">
        <div className="logo_container flex">
          <img src="/asset/logo.png" className="logo" />
        </div>
        <div className="award__container flex">
          <div className="award__container_award">
            <img src="/asset/1.png" className="award__trophy" />
          </div>
          <div className="award__profile__container">
            <div className="award__profile__container_text">
              <span className="heading">
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </span>
              <ul>
                <li className="text">
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li className="text">
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with loT enabled control panel.
                </li>
              </ul>
            </div>
            <div>
              <img src="/asset/2.png" className="award__profile" />
            </div>
            <div className="award__profile__container_label">
              <span className="text">
                Government of India has awarded the{" "}
                <span className="bold">
                  "National Energy Conservation Award 2018"
                </span>
                . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
                received the award from Smt. Sumitra Mahajan, Speaker of Lok
                Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__container">
        <div className="tools">
          <p className="heading">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <div className="tools__image__container">
            <img src="/asset/3.png" className="tools__image" />
            <p className="tools_image_label">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </p>
          </div>
        </div>
        <div className="segments">
          <p className="heading">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
          <div className="segments__list">
            {segments.map((segment, index) => {
              return (
                <div key={index} className="segments__name">
                  {segment}
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer">
          <div className="footer_block">
            <IoCall className="call_icon icon" size={20} />
            <span>Toll Free</span>
            <a href="tel:+1800 200 1234">1800 200 1234</a>
          </div>
          <div className="footer_block">
            <FaFacebook className="footer_icon" size={32} color="white" />

            <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
          </div>{" "}
          <div className="footer_block">
            <TbWorld className="footer_icon" color="white" size={32} />
            <a href="https://www.crigroups.com/">https://www.crigroups.com/</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
