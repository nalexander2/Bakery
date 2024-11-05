import React from "react";
import {motion} from 'framer-motion';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductPage from "./ProductPage";

export default function HomePage(){

    const settings={
        dots:true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
    }
    return(
        <div>
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}>
            <center><h1>Welcome to my bakery</h1></center>

            <Slider {...settings}>
           
                <div>
                    <motion.img 
                    src='https://i.pinimg.com/originals/ab/9b/8a/ab9b8af4c94e4aa0e39069815c5c6c96.jpg'
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    style={{width:900,height:500}}/>
               
                </div>
                <div>
                    <motion.img 
                    src='https://bonnibakery.com/wp-content/uploads/2021/01/ChocolateCake-2-500x500.jpg'
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    style={{width:900,height:500}}/>
               
                </div>
                <div>
                    <motion.img 
                    src="https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2022/05/double-chocolate-chip-muffins-3-scaled.jpg?fit=1200%2C800&ssl=1"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    style={{width:1000,height:500}}/>
               
                </div>
                <div>
                    <motion.img 
                    src="https://i.redd.it/h3qtvpoul2311.jpg"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    style={{width:1000,height:500}}/>
               
                </div>

            </Slider>
           
          </motion.div>
        </div>
    )
}