import React,{useEffect} from 'react'
import  './footer.css'
import { FiSend } from "react-icons/fi";
import video from '../../Assets/video3.mp4'
import { MdOutlineTravelExplore } from "react-icons/md"
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Footer() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='footer'>
      <div className="videodiv">
        <video src={video} loop muted autoPlay type='video/mp4'></video>
      </div>
      <div className="seccontent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
          <h2>Travel with us</h2>
          </div>
          <div  className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
            <button data-aos='fade-up' className='btn flex' type='submit' >
              SEND<FiSend  className='icon'/>
            </button>
          </div>
        </div>
        <div className="footercard flex">
          <div className="footerintro flex">
            <div data-aos='fade-up' className="logoDiv">
              <a href="#" className='logo'><MdOutlineTravelExplore className='icon'/>Travel.</a>
            </div>
            <p data-aos='fade-up' >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, minus, fuga atque accusamus reprehenderit distinctio recusandae quibusdam corrupti id vitae, rem rerum facilis ad!
            </p>
            <div data-aos='fade-up' className="footerSocial flex">
            <FiFacebook className='icon'/>
            <FiTwitter  className='icon'/>
            <FiYoutube className='icon'/>
            <FaInstagram className='icon'/>

            </div>
            </div>
            <div className="footerlink grid">
              <div data-aos='fade-up' data-aos-duration='3000' className="linkgroup">
                <span className="title">
                  OUR AGENCY
                </span>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  Services</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  Insurance</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  Agency</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  Tourism</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  Payment</li>
                
            </div>
              <div data-aos='fade-up'  data-aos-duration='4000' className="linkgroup">
                <span className="title">
                  PARTNERS
                </span>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  Bookings</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                 Rentcars</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  HostelWorld</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  Tarivago</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  TripAdvisor</li>
                
            </div>
              <div data-aos='fade-up'  data-aos-duration='5000'className="linkgroup">
                <span className="title">
                  LAST MINUTE
                </span>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  London</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  California</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  Indonesia</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  
                  Europe</li>
                <li className='list flex'>
                <FiChevronRight className='icon'/>
                  Oceania</li>
                
            </div>

          </div>
            <div  className="footerdiv flex">
              <small >BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHTS RESERVED - HUNAINTECH 2024</small>
            </div>
      
        </div>
      </div>
    </section>
  )
}
