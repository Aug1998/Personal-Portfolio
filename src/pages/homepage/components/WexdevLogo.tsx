import theme from "resources/theme"
import styled from "styled-components"

export default function WexdevLogo( { className }: any) {
  return (
   <WexdevSvg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.27 96.31">
      <path id="gear" d="M87.14,37.83c-7.76,1.06-11-8.21-3.46-12.07L78.9,17.21c-7.06,4-13.87-2.07-9-9L61.2,3.28C56.94,10.51,48.36,8,49,0H39.17C39.83,8,31.25,10.51,27,3.28L18.27,8.21c4.89,6.93-1.92,13-9,9L4.51,25.76c7.55,3.86,4.3,13.13-3.45,12.07L1,43.14v0l.09,5.31c7.75-1.06,11,8.21,3.45,12.07l4.78,8.55c7.06-4,13.87,2.07,9,9L27,83c4.26-7.23,12.84-4.7,12.18,3.28H49c-.67-8,7.91-10.51,12.17-3.28l8.72-4.93c-4.89-6.93,1.92-13,9-9l4.78-8.55c-7.54-3.86-4.3-13.13,3.46-12.07l.08-5.31v0Zm-15,5.34a28,28,0,0,1-56.09,0v0a28,28,0,0,1,56.09,0Z"/>
      <path id="white-screen" className="cls-1" d="M87.42,23,46.56,44.52,0,75.84S53.52,105.19,70.08,93.6C94.08,76.8,87.42,23,87.42,23Z"/>
      <path parallax-speed="1" id="mejilla" className="cls-2" d="M28.51,53.19l5.64,6.46a8.07,8.07,0,0,1,1.91,4.29l.84,6.83,2.9-11.14Z"/>
      <polygon parallax-speed="2" id="ojo" className="cls-3" points="40.42 47.49 54.14 53.05 54.14 58.9 62.83 51.13 40.42 47.49"/>
      <path id="cabeza" data-name="cabeza" d="M78.76,43.94A36.78,36.78,0,0,0,75.4,29.05l-.67-1.46L69.58,30l-.19,1,1.39,3.09a22.87,22.87,0,0,1,1.62,5.52l0,.46.19,8.32-4.7,5V69.62H56.79L61,73.08v3.16H48.34l9.36,4.29c.45.34.36,1.42-.3,1.55l-6.09,0,3.63,4.69,0,4.29L39.12,84.66c-.54-.22-7.58-2.52-9.45-4.24L25.91,77a3.17,3.17,0,0,1-1-2.17l-.48-10.08-4.83,11a3.22,3.22,0,0,0,.56,3c1.21,1.92,7.77,6.8,7.77,6.8,1.24,1.1,5.58,2.55,9,4.06.69.3,12.2,4.47,15.34,5.54l2.33.8a4,4,0,0,0,5.31-3.68V86.13a32.88,32.88,0,0,1,2.19-2.63,1.63,1.63,0,0,0,.41-1.11V81.16a1.66,1.66,0,0,0-.88-1.46l-2.09-1.1,6.37.05L66,74h8V54.68l4.85-4.87Z"/>
   </WexdevSvg>
  )
}

const WexdevSvg = styled.svg`
   transform: scaleX(-1) rotateZ(-8deg);
   right: 12vw; bottom: 8vh;
   z-index: 1;
   #white-screen{
      fill: ${theme.hero_bg};
   }
   #gear, #cabeza, #mejilla{
      fill: ${theme.black};
      transform-origin: center;
      transform-box: fill-box;
   }
   #ojo{
      fill: ${theme.primary};
      transform: rotateZ(10deg);
      transform-origin: center;
      transform-box: fill-box;
   }
   #mejilla{
      transform: rotateZ(10deg);
      transform-origin: center;
      transform-box: fill-box;
   }
   #gear{
      animation: gear 18s infinite linear;
   }
   
   @keyframes gear{
    from{
        transform: rotateZ(0deg);
    }
    to{
        transform: rotateZ(360deg);
    }
}
`