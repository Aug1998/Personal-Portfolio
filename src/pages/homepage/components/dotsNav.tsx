import theme from "resources/theme"
import styled from "styled-components"


export default function DotsNav() {

  return (
     <DotsNavContainer>
      <Dot isActive={true} />
      <Dot isActive={false} />
      <Dot isActive={false} />
      <Dot isActive={false} />
      <Dot isActive={false} />
     </DotsNavContainer>
  )
}

const DotsNavContainer = styled.div`
   position: fixed;
   right: 6%;
   top: 43%;
   display: flex;
   flex-direction: column;
   height: 140px;
   width: 40px;
   box-sizing: border-box;
   align-items: center;
   justify-content: space-around;
`

interface IDot {
   isActive: boolean;
}

const Dot = styled.button<IDot>`
   cursor: pointer;
   width: 8px;
   height: 8px;
   ${props => props.isActive ? 'transform: scale(1.6);' : ''}
   border: none;
   outline: none;
   background-color: ${props => props.isActive ? theme.primary : theme.black};
   box-sizing: border-box;
   transition: 0.1s;
   &:hover{
     transform: scale(1.6);
   }
`