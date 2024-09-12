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
                        <i data-aos='zoom-out-up'>
                            <FormatQuote />
                        </i>
                        <p data-aos='zoom-out-down'>{val.text}</p>
                        <div className="image" data-aos='zoom-out-right'>
                            <img src={val.image} alt="" />
                        </div>
                        <h3  data-aos='zoom-out-left'>{val.name}</h3>
                        <label data-aos='zoom-out'>{val.post}</label>
                    </div>
                ))
               }
               </Slider>
            </div>
        </section>
    </>
  )
}
