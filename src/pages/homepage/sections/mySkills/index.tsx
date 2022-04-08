import theme from 'resources/theme'
import styled from 'styled-components'
import Container from 'pages/homepage/styled-components/Container'
import Title from 'pages/homepage/styled-components/Title'
import Timeline from './components/Timeline'

export default function MySkills() {
  return (
   <Container backgroundColor={theme.white} verticalPadding="100px">
      <MySkillsContainer>
         <Title>My Skills & Experience</Title>
         <MySkillsContent>
            <SkillsGrid>
            </SkillsGrid>
            <Timeline/>
         </MySkillsContent>
      </MySkillsContainer>
   </Container>
  )
}

const MySkillsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`

const MySkillsContent = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   width: 100%;
`

const SkillsGrid = styled.div`
   background-color: gray;
`
