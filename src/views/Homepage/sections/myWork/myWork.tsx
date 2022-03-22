import styled from "styled-components";
import Container from "views/Homepage/styled-components/Container";
import Title from "views/Homepage/styled-components/Title";
import ItemShowcase from "../../components/itemShowcase/itemShowcase";

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