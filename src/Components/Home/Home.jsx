import React, { useEffect } from 'react'
import { GrLocation } from "react-icons/gr";
import './home.css'
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import video from '../../Assets/video2.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='home'>
      <div className="overlay">    </div>
      <video src={video} muted autoPlay loop typeof='video1.mp4'></video>
      <div className="homecontent container">
        <div className="textDiv">
          <span data-aos='fade-up' className="smallText">
            Our Packages
          </span>
          <h1 data-aos='fade-up' className="homeTitle">
            Search your Holidays</h1>
        </div>

        <div data-aos='fade-up' className="cardDiv grid">
          <div className="destinationinput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className='location icon' />
            </div>
          </div>
          <div className="dateinput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceinput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchoption flex">
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos='fade-up' className="homefootericon flex">
          <div className="righticons">
            <FiFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTripadvisor className='icon' />
          </div>
          <div className="lefticons">
            <FaListUl className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>
    </section>
  )
}
