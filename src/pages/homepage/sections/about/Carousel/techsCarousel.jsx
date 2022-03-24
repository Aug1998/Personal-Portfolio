import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.scss'
import logo_js from './img/js.png';
import logo_html from './img/html.png';
import logo_css from './img/css.png';
import logo_sass from './img/sass.png';
import logo_jquery from './img/jquery.gif';
import logo_php from './img/php.png';
import logo_java from './img/java.png';
import logo_react from './img/react.png';
import logo_wordpress from './img/wordpress.png';
import logo_photoshop from './img/photoshop.png';
import logo_illustrator from './img/illustrator.png';
import logo_mysql from './img/mysql.png';

export default class Carousel extends Component {
    state = { 
        items: [
            { id: 1, title: 'HTML', img: logo_html },
            { id: 2, title: 'CSS', img: logo_css },
            { id: 3, title: 'Sass', img: logo_sass },
            { id: 4, title: 'JavaScript', img: logo_js },
            { id: 5, title: 'Jquery', img: logo_jquery },
            { id: 6, title: 'React', img: logo_react },
            { id: 7, title: 'php', img: logo_php },
            { id: 8, title: 'Java', img: logo_java },
            { id: 9, title: 'Wordpress', img: logo_wordpress },
            { id: 10, title: 'MySQL', img: logo_mysql },
            { id: 11, title: 'Photoshop', img: logo_photoshop },
            { id: 12, title: 'Illustrator', img: logo_illustrator },
        ]
    }

  render() {
    const { items } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 0,
      cssEase: "linear",
      draggable: "false",
      swipe: "false",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
      ]
    };
    return (
      <div>
        <Slider {...settings}>
        {items.map(item => 
            <div className="tech" key={item.id}>
              <img src={item.img} alt={item.title}/>
            </div>
        )}
        </Slider>
      </div>
    );
  }
}

