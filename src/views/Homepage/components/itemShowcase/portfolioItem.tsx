import styled from "styled-components";
import { useRef } from "react";
import theme from "resources/theme"
import useHover from "hooks/useHover";
import { BsArrowRight } from 'react-icons/bs';
import { VscArrowRight } from 'react-icons/vsc';

   interface IPortfolioItem {
      title: string;
      info1: string;
      info2: string;
      info3: string;
      link: string;
      img: string;
   }

   export default function PortfolioItem({title, info1, info2, info3, link, img}:IPortfolioItem) {
   const itemRef = useRef(null)
   const isHover = useHover(itemRef)

   return (  
      <PortfolioItemContainer ref={itemRef} isHover={isHover} style={ { backgroundImage: `url(${img})`} } >
            <h5>{title}</h5>
            <PortfolioItemInfoContainer parentIsHover={isHover}>
               <h5>{title}</h5>
               <p>{info1}</p>
               <p>{info2}</p>
               <p>{info3}</p>
               <PortfolioItemLink target="_blank" href={link}>
                  <div>
                     <p>Visitar la web</p>
                     <BsArrowRight/>
                  </div>
               </PortfolioItemLink> 
            </PortfolioItemInfoContainer>
      </PortfolioItemContainer>
   );
}
 
const PortfolioItemContainer = styled.div<IPortfolioItemContainer>`
   overflow: hidden;
   width: 300px;
   height: 420px;
   position: relative;
   background-position: center;
   background-size: cover;
   transition: all 0.3s;
   h5{
       font-size: 1.8rem;
       font-weight: 500;
       color: ${theme.item_info_title};
       position: absolute;
       top: 40px; left: 40px;
       transition: 0.2s;
       width: 240px;
       line-height: 2.2rem;
       overflow: hidden;
   }
   &::before{
       content: "";
       position: absolute;
       width: 100%; height: 100%;
       left: 0; top: 0;
       background-color:rgba(0, 0, 0, 0.2);
       transition: 0.3s;
   }   
`
interface IPortfolioItemContainer {
   isHover: boolean;
}

interface IPortfolioItemInfoContainer {
   parentIsHover: boolean;
}

const PortfolioItemInfoContainer = styled.div<IPortfolioItemInfoContainer>`
   display: flex; 
   flex-direction: column;
   justify-content: space-between;
   opacity: ${props => props.parentIsHover? "100%" : "0%"};
   transform: ${props => props.parentIsHover? "translateY(0%)" : "translateY(8%)"};
   width: 100%; height: 100%;
   position: absolute;
   top: 0; left: 0;
   padding: 11% 11%;
   background-color: ${theme.hover_background};
   transition: 0.3s;
   border: 1px solid rgba(64, 64, 64, 0.2);
   a{
      width: max-content;
   }
   p{
      color: ${theme.hover_text};
      font-size: 0.95rem;
      font-weight: 300;
      line-height: 1.3rem;
   }
   h5{
      position: relative;
      top: 0; left: 0;
      color: ${theme.hover_title};
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.2rem;
   }
   a p{
      font-weight: 500;
   }
`
const PortfolioItemLink = styled.a`
div{
   display: flex;
   align-items: center;
   position: relative;
   width: max-content;
   &::before{
    content: "";
    position: absolute;
    height: 100%; width: 100%;
    left: -100%; bottom: 0;
    border-bottom: solid 1px ${theme.hover_link_decoration};
    transition: 0.4s;
   }
   p{
      margin-right: 20px;
      transition: 0.2s;
      z-index: 3;
      color: ${theme.hover_link};
   }
   svg{
      margin-top: 1px;
      color: ${theme.hover_link_decoration};

      height: 20px;
      width: 20px;
      transition: all 0.3s;
      transform: translateX(-15px);
   }
   &:hover{
      &::before{
         left: 0;
      }
      svg{
         transform: translateX(0px);
         }
      }
   }
`