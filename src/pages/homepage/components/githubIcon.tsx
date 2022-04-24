import theme from "resources/theme"
import styled from "styled-components"

export default function GithubIcon() {
   return (
      <ButtonContainer target="_blank" href="https://github.com/Aug1998">
         <svg viewBox="0 0 384.75 384.75">
            <path className="path1" d="M693,355V646a11.2,11.2,0,0,0-.72,2.06c-4,25.44-25.27,44.27-50.88,44.31q-140.42.2-280.84,0a51.68,51.68,0,0,1-51.43-51.42q-.22-140.43,0-280.85a51.67,51.67,0,0,1,37.75-49.42c2.85-.82,5.75-1.45,8.63-2.17h291a14.39,14.39,0,0,0,2.06.72q32.73,6.06,42.49,37.88C691.84,349.69,692.36,352.36,693,355ZM523,555.87c6.21,6.75,7.49,15.09,7.35,23.93-.15,9.5-.11,19-.09,28.5,0,5.61,3.44,8.2,8.87,6.7,1.92-.53,3.78-1.29,5.64-2,68.88-26.4,97.13-107,59.49-169.85C577.71,398.92,526,377.33,473.5,388.6,415.71,401,375,456.29,381.72,515c5.61,49,33.18,81.66,78.76,99.52a14.52,14.52,0,0,0,5.47.9c3-.07,5.07-1.85,5.15-4.88.19-6.84.06-13.69.06-20.72-3.75.37-7.07.79-10.4,1-13.81.87-25.07-5.38-29.91-16.82-3.19-7.55-7.5-14-14.63-18.47-1.41-.88-2.17-2.79-3.22-4.23,1.92-.6,3.83-1.23,5.77-1.76a4,4,0,0,1,1.47.25c7.86,1.46,12.85,6.61,17.05,13,7.46,11.29,19.8,14.84,32.19,9.4a4.22,4.22,0,0,0,2.15-1.79c2.11-4.94,4.07-9.94,6.1-15a6.31,6.31,0,0,1-1-.18c-7.37-1.82-15-2.92-22.05-5.63-16.61-6.39-25.58-19.31-28.6-36.54-2.94-16.71-2.06-32.66,9.78-46.31a3.84,3.84,0,0,0,.23-3.06c-2.48-8.29-2-16.46.22-24.75,1-3.79,2.72-5,6.55-4.53,9,1.22,16.89,5.26,24.39,10a9,9,0,0,0,7.63,1.27c14.63-3.55,29.51-4.44,44.22-1.34,8.16,1.71,14.76.94,22-3.49,5.53-3.41,12.51-4.53,18.91-6.45,2.34-.71,3.87.43,4.65,3,2.62,8.56,3.28,17.1,1,25.85a7,7,0,0,0,1,4.55c2,3.59,4.59,6.86,6.37,10.54,5.12,10.61,4.62,21.87,2.93,33.08C573,530.46,563,544.18,544.32,550.48,537.49,552.78,530.32,554.05,523,555.87Z" transform="translate(-308.25 -308.5)"/>
            <path className="path2" d="M523,555.87c7.37-1.82,14.54-3.09,21.37-5.39,18.69-6.3,28.68-20,31.57-39.14,1.69-11.21,2.19-22.47-2.93-33.08-1.78-3.68-4.39-6.95-6.37-10.54a7,7,0,0,1-1-4.55c2.33-8.75,1.67-17.29-1-25.85-.78-2.53-2.31-3.67-4.65-3-6.4,1.92-13.38,3-18.91,6.45-7.22,4.43-13.82,5.2-22,3.49-14.71-3.1-29.59-2.21-44.22,1.34a9,9,0,0,1-7.63-1.27c-7.5-4.77-15.36-8.81-24.39-10-3.83-.51-5.54.74-6.55,4.53-2.19,8.29-2.7,16.46-.22,24.75a3.84,3.84,0,0,1-.23,3.06c-11.84,13.65-12.72,29.6-9.78,46.31,3,17.23,12,30.15,28.6,36.54,7,2.71,14.68,3.81,22.05,5.63a6.31,6.31,0,0,0,1,.18c-2,5-4,10-6.1,15a4.22,4.22,0,0,1-2.15,1.79c-12.39,5.44-24.73,1.89-32.19-9.4-4.2-6.37-9.19-11.52-17.05-13a4,4,0,0,0-1.47-.25c-1.94.53-3.85,1.16-5.77,1.76,1.05,1.44,1.81,3.35,3.22,4.23,7.13,4.44,11.44,10.92,14.63,18.47,4.84,11.44,16.1,17.69,29.91,16.82,3.33-.21,6.65-.63,10.4-1,0,7,.13,13.88-.06,20.72-.08,3-2.13,4.81-5.15,4.88a14.52,14.52,0,0,1-5.47-.9C414.9,596.61,387.33,564,381.72,515,375,456.29,415.71,401,473.5,388.6c52.47-11.27,104.21,10.32,130.71,54.55C641.85,506,613.6,586.6,544.72,613c-1.86.71-3.72,1.47-5.64,2-5.43,1.5-8.85-1.09-8.87-6.7,0-9.5-.06-19,.09-28.5C530.44,571,529.16,562.62,523,555.87Z" transform="translate(-308.25 -308.5)"/>
         </svg>
      </ButtonContainer>
   )
}

const ButtonContainer = styled.a`
   width: fit-content;
   height: fit-content;
   cursor: pointer;
   &:hover{
      .path1{
         fill: ${theme.primary};
      }
   }
   svg{
      width: 38px;
      .path1{
         transition: 0.15s;
         fill: ${theme.black};
      }
      .path2{
         fill: transparent;
      }
   }
`