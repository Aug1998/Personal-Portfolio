import { ReactNode } from 'react';
import styled from 'styled-components'

interface IContainer {
   children?: ReactNode;
   backgroundColor?: string;
   verticalPadding?: string;
}

interface IParentContainer {
   backgroundColor?: string;
}

interface IContentContainer {
   verticalPadding?: string;
}


export default function Container({children={}, backgroundColor = "", verticalPadding="0"}: IContainer) { 
   return (
     <ParentContainer backgroundColor={backgroundColor}>
        <ContentContainer verticalPadding={verticalPadding}>
          {children}
        </ContentContainer>
     </ParentContainer>
   )
 }


const ParentContainer = styled.div<IParentContainer>`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
`

const ContentContainer = styled.div<IContentContainer>`
   display: flex;
   justify-content: center;
   max-width: 1200px;
   width: 100%;
   padding: ${props => props.verticalPadding} 0;
`
