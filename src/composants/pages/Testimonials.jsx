import React from 'react'
import {testimonials} from '../donnee/data'; 
import { FormatQuote } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
        <section className="Testimonials hero">
            <div className="container1">
            <Slider {...settings}>
               {
                 testimonials.map((val)=>(
                    <div className="box" key={val.id}>
                        <i>
                            <FormatQuote />
                        </i>
                        <p>{val.text}</p>
                        <div className="image">
                            <img src={val.image} alt="" />
                        </div>
                        <h3>{val.name}</h3>
                        <label >{val.post}</label>
                    </div>
                ))
               }
               </Slider>
            </div>
        </section>
    </>
  )
}
