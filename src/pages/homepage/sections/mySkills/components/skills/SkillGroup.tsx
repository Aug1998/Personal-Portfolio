import theme from "resources/theme"
import styled from "styled-components"

interface ISkillsItem {
   title: string,
   children: any
}

export default function SkillGroup({title, children}: ISkillsItem) {
  return (
   <SkillGroupContainer>
      <SkillGroupTitle>
         {title}
      </SkillGroupTitle>
      <SkillsGrid>
         {children}
      </SkillsGrid>
   </SkillGroupContainer>   
  )
}

const SkillGroupContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-bottom: 58px;
`

const SkillGroupTitle = styled.p`
   margin-left: 20px;
   margin-bottom: 16px;
   font-size: 0.9rem;
   color: ${theme.primary};
   font-weight: 600;
   letter-spacing: 1px;
   text-transform: uppercase;
`

const SkillsGrid = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-template-rows: min-content;
   row-gap: 40px;
`
