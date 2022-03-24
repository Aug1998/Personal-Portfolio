import styled from "styled-components";
import Container from "pages/homepage/styled-components/Container";
import Title from "pages/homepage/styled-components/Title";
import ItemShowcase from "./components/portfolio/itemShowcase";

export default function MyWork() {
  return (
      <Container>
         <MyWorkContainer>
            <Title>Mi trabajo</Title>
            <ItemShowcase/>
         </MyWorkContainer>
      </Container>
  )
}

const MyWorkContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
`