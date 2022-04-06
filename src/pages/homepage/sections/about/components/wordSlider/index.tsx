import Slider from "react-slick";
import styled from "styled-components";

export default function WordSlider() {
   const items = [
      "Technology",
      "Fashion",
      "Sport",
      "Science",
      "Music",
      "Travel",
      "Friends",
      "Self Improvement",
   ]

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear",
      draggable: false,
      swipe: false,
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
      <div className="techs">
        <Slider {...settings}>
          {items.map((item, index) => (
            <SliderItemContainer key={index}>
               <SliderItemWord>
                  {item}
               </SliderItemWord>
              <h2>
                 -
              </h2>
            </SliderItemContainer>
          ))}
        </Slider>
      </div>
   );
}


const SliderItemContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
`

const SliderItemWord = styled.p`
   font-size: 3rem;
   text-transform: uppercase;
`