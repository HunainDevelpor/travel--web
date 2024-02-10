import React,{useEffect} from 'react'
import './main.css'
import { GrLocation } from "react-icons/gr";
import { LuClipboardCheck } from "react-icons/lu";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: 'Bora Bora',
    grade: 'New Zealand',
    location: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and adventurous activities.'
  }
  ,
  {
    id:2,
    imgSrc:img2,
    desTitle:'Valley',
    grade:'New Zealand',
    location:'CULTURAL RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  },{
    id:3,
    imgSrc:img3,
    desTitle:'Bora Bora',
    grade:'New Zealand',
    location:'CULTURAL RELAX',
    fees:'$2000',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  },{
    id:4,
    imgSrc:img4,
    desTitle:'Bora Bora',
    grade:'New Zealand',
    location:'CULTURAL RELAX',
    fees:'$400',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  },{
    id:5,
    imgSrc:img5,
    desTitle:'Cappadocia',
    grade:'Turkey',
    location:'CULTURAL RELAX',
    fees:'$800',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  }
  ,{
    id:6,
    imgSrc:img6,
    desTitle:'Cappadocia',
    grade:'Turkey',
    location:'CULTURAL RELAX',
    fees:'$500',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  }
  ,{
    id:7,
    imgSrc:img7,
    desTitle:'Cappadocia',
    grade:'Turkey',
    location:'CULTURAL RELAX',
    fees:'$600',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  }
  ,{
    id:8,
    imgSrc:img8,
    desTitle:'Cappadocia',
    grade:'Turkey',
    location:'CULTURAL RELAX',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  }
  ,{
    id:9,
    imgSrc:img9,
    desTitle:'Cappadocia',
    grade:'Turkey',
    location:'CULTURAL RELAX',
    fees:'$750',
    description:'The epitome of romance, Bora Bora is one of the best travel destination in the world.This place is known for its luxurious stays and '
  }

]
export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="main container section">
      <div className="maintitle">
        <h3 data-aos='fade-right'className="title">
          Most Visited Destination
        </h3>
      </div>
      <div className="content grid">
        {
          Data.map(({ id, desTitle, description, imgSrc, fees, location, grade }) => {
            return (
              <><div key={id} data-aos='fade-up' className="singleDestination">
                <div className="imgdiv">
                <img src={imgSrc} alt={desTitle} />
                </div>
           
                <div className="cardinfo">
                  <h4 className="cardtitle">{desTitle}</h4>
                  <span className='carddescription flex'>
                    <GrLocation className='icon' /><span className='location'>{location}</span>
                  </span>
                  <div className="cardfees flex">
                    <div className="grade"><span>{grade}<small>+1</small></span></div>
                    <div className="price"><h5>{fees}</h5></div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>DETAILS
                    <LuClipboardCheck className='icon' />

                  </button>
                </div>
                </div>
              </>

            )

          })
        }

      </div>
    </div>
  )
}
