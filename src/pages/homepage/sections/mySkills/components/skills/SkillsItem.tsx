import theme from "resources/theme"
import styled from "styled-components"

interface ISkillsItem {
   img: string,
   description: string,
}

export default function SkillsItem({img, description}: ISkillsItem) {
  return (
   <SkillItem>
      <ImageCircle>
         <ItemImage src={img}/>
      </ImageCircle>
      <ItemDescription>
         {description}
      </ItemDescription>
   </SkillItem>   
  )
}

const SkillItem = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const ImageCircle = styled.div`
   width: 84px;
   height: 84px;
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 1000px;
   background-color: ${theme.grey_bg};
   margin-bottom: 8px;
`

const ItemImage = styled.img`
   width: 100px;
`

const ItemDescription = styled.p`
   color: ${theme.black};
`
