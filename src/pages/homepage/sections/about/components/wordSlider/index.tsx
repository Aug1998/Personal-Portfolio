import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";
import theme from "resources/theme";
import styled from "styled-components";
import useElementWidth from "./useElementWidth";

interface IWordSlider {
   direction?: 'normal' | 'backwards';
}

export default function WordSlider( {direction = 'normal'}:IWordSlider) {
   const Sport = useElementWidth();
   const Science = useElementWidth();
   const Music = useElementWidth();
   const Friends = useElementWidth();
   const Improvement = useElementWidth();

   const sliderItems = [
      {
         word: 'Sport',
         width: Sport.elementWidth,
         ref: Sport.elementRef,
      },
      {
         word: 'Science',
         width: Science.elementWidth,
         ref: Science.elementRef,
      },
      {
         word: 'Music',
         width: Music.elementWidth,
         ref: Music.elementRef,
      },
      {
         word: 'Friends',
         width: Friends.elementWidth,
         ref: Friends.elementRef,
      },
      {
         word: 'Improvement',
         width: Improvement.elementWidth,
         ref: Improvement.elementRef,
      }
   ]

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 0,
      cssEase: "linear",
      draggable: false,
      swipe: false,
      variableWidth: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 5,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 425,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <SliderContainer direction={direction}>
        <Slider {...settings}>
          {sliderItems.map((item, index) => {
             return ( 
               <div style={{ width: item.width }}>
                  <SliderItemContainer ref={item.ref} key={index}>
                     <SliderItemWord direction={direction}>
                        {item.word}
                     </SliderItemWord>
                     <SliderItemDash/>
                  </SliderItemContainer>
               </div>
             )
          })}
        </Slider>
      </SliderContainer>
   );
}

interface ISliderContainer {
   direction?: 'normal' | 'backwards';
}

const SliderContainer = styled.div<ISliderContainer>`
   transform: ${props => props.direction === 'backwards' ? 'scaleX(-1)' : ''};
`

const SliderItemContainer = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 100%;
`

interface ISliderItemWord {
   direction?: 'normal' | 'backwards';
}

const SliderItemWord = styled.p<ISliderItemWord>`
color: white;
   text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
   text-shadow: -1px -1px 0 ${theme.primary}, 1px -1px 0 ${theme.primary}, -1px 1px 0 ${theme.primary}, 1px 1px 0 ${theme.primary};
   font-size: 5rem;
   text-transform: uppercase;
   transform: ${props => props.direction === 'backwards' ? 'scaleX(-1)' : ''};
`

const SliderItemDash = styled.div`
   width: 72px;
   height: 7px;
   border: solid 1px ${theme.primary};
   margin: 0 34px;
`