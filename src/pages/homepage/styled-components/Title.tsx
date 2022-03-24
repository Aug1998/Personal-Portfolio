import React from 'react'
import theme from 'resources/theme'
import styled from 'styled-components'

export default function Title({children}: any) {
  return (
    <CustomTitle>
       {children}
    </CustomTitle>
  )
}

const CustomTitle = styled.h2`
   font-family: 'Poppins', sans-serif;
   font-size: 2.2rem;
   color: ${theme.title};
   font-weight: 700;
   position: relative;
   width: max-content;
   padding-bottom: 10px;
   margin-bottom: 10px;
   &::before{
      content: "";
      position: absolute;
      bottom: 0; left: 30%;
      height: 100%; width: 40%;
      border-bottom: solid 4px ${theme.primary};
   }
`