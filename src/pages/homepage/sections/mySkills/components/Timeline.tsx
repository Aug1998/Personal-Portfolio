import theme from "resources/theme"
import styled from "styled-components"

export default function Timeline() {
  return (
   <TimelineContainer>
      <TimelineYearContainer>
         <Year>2022</Year>
         <ItemContainer>
            <TimelineItem>
                  <TimelineItemTitle>Xometry</TimelineItemTitle>
                  <TimelineItemText>Full-time job | React Developer | React + TypeScript</TimelineItemText>
                  <TimelineItemLink target="_blank" href="https://www.xometry.com/">Go to Xoemtry's Website {'->'}</TimelineItemLink>
               </TimelineItem>
            </ItemContainer>
      </TimelineYearContainer>
      <TimelineYearContainer>
         <Year>2021</Year>
         <ItemContainer>
            <TimelineItem>
               <TimelineItemTitle>MangooDev</TimelineItemTitle>
               <TimelineItemText>Full-time job | Fullstack Developer | React + java</TimelineItemText>
            </TimelineItem>
            <TimelineItem>
               <TimelineItemTitle>UX/UI Design</TimelineItemTitle>
               <TimelineItemText>CoderHouse</TimelineItemText>
            </TimelineItem>
         </ItemContainer>
      </TimelineYearContainer>
      <TimelineYearContainer>
         <Year>2020</Year>
         <ItemContainer>
            <TimelineItem>
               <TimelineItemTitle>Node</TimelineItemTitle>
               <TimelineItemText>Courses Online</TimelineItemText>
            </TimelineItem>
            <TimelineItem>
               <TimelineItemTitle>React</TimelineItemTitle>
               <TimelineItemText>Courses Online</TimelineItemText>
            </TimelineItem>
         </ItemContainer>
      </TimelineYearContainer>
      <TimelineYearContainer>
         <Year>2019</Year>
         <ItemContainer>
            <TimelineItem>
               <TimelineItemTitle>Freelance Web Development</TimelineItemTitle>
               <TimelineItemText>Part-time job</TimelineItemText>
            </TimelineItem>
            <TimelineItem>
               <TimelineItemTitle>PHP</TimelineItemTitle>
               <TimelineItemText>Course | Udemy</TimelineItemText>
            </TimelineItem>
         </ItemContainer>
      </TimelineYearContainer>
      <TimelineYearContainer>
         <Year>2018</Year>
         <ItemContainer>
            <TimelineItem>
               <TimelineItemTitle>CalculaTuCosto</TimelineItemTitle>
               <TimelineItemText>Part-time job | Wordpress Support</TimelineItemText>
            </TimelineItem>
            <TimelineItem>
               <TimelineItemTitle>Java</TimelineItemTitle>
               <TimelineItemText>Object Oriented Programming Course | UTN Rosario</TimelineItemText>
            </TimelineItem>
         </ItemContainer>
      </TimelineYearContainer>
   </TimelineContainer>
  )
}

const TimelineContainer = styled.div`
   width: 100%;
   height: 100%;
`

const TimelineYearContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 6fr;
   margin-top: 16px;
`

const Year = styled.h5`
   color: ${theme.primary};
   text-align: center;
   padding-top: 13px;
`

const ItemContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 12px 14px;
   & div:not(:last-of-type){
      margin-bottom: 18px;
   }
`

const TimelineItem = styled.div`
   box-sizing: border-box;
`

const TimelineItemTitle = styled.h5`
   font-size: 0.9rem;
   color: ${theme.black};
   margin-bottom: 4px;
`
const TimelineItemText = styled.p`
   font-size: 0.85rem;
   color: ${theme.TimelineSubtitle};
`

const TimelineItemLink = styled.a`
   font-size: 0.85rem;
   color: ${theme.TimelineSubtitle};
`
