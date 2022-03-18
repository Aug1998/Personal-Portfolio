import theme from 'resources/theme'
import styled from 'styled-components'
import Container from 'views/Homepage/styled-components/Container'
import Title from 'views/Homepage/styled-components/Title'

export default function MySkills() {
  return (
   <Container backgroundColor={theme.white} verticalPadding="80px">
      <MySkillsContainer>
         <Title>My Skills & Experience</Title>
      </MySkillsContainer>
   </Container>
  )
}

const MySkillsContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`
