import theme from 'resources/theme'
import styled from 'styled-components'
import Container from 'pages/homepage/styled-components/Container'
import Title from 'pages/homepage/styled-components/Title'
import Timeline from './components/Timeline'
import Skills from './components/skills'

export default function MySkills() {
  return (
   <Container backgroundColor={theme.white} verticalPadding="100px">
      <MySkillsContainer>
         <Title>My Skills & Experience</Title>
         <MySkillsContent>
            <Skills/>
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
   margin-top: 36px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap: 70px;
   width: 100%;
`
