import { ReactNode } from 'react';
import styled from 'styled-components'

interface IContainer {
   children?: ReactNode;
   backgroundColor?: string;
   verticalPadding?: string;
   direction?: string;
   className?: any;
}

interface IParentContainer {
   backgroundColor?: string;
}

interface IContentContainer {
   verticalPadding?: string;
   direction?: string;
}


export default function Container({className, children={}, backgroundColor = "", verticalPadding="0", direction="row"}: IContainer) { 
   return (
     <ParentContainer className={className} backgroundColor={backgroundColor}>
        <ContentContainer verticalPadding={verticalPadding} direction={direction}>
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
   flex-direction: ${props => props.direction};
   align-items: center;
   justify-content: center;
   max-width: 1200px;
   width: 100%;
   padding: ${props => props.verticalPadding} 0;
`
