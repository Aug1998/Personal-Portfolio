import styled from 'styled-components'

export default function Container({children, backgroundColor = ""}) { 
  return (
    <ParentContainer backgroundColor={backgroundColor}>
       <ContentContainer>
         {children}
       </ContentContainer>
    </ParentContainer>
  )
}


const ParentContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${porps => porps.backgroundColor};
`

const ContentContainer = styled.div`
   display: flex;
   max-width: 1200px;
   width: 100%;
   justify-content: space-between;
`
