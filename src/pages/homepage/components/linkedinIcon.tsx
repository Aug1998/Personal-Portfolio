import theme from "resources/theme"
import styled from "styled-components"

export default function LinkedinIcon() {
  return (
      <ButtonContainer target="_blank" href="https://www.linkedin.com/in/augusto-pruvost/">
      <svg viewBox="0 0 384.75 384.75">
         <path className="path1" d="M693,355V646a24.24,24.24,0,0,0-.7,2.49c-4.41,25.63-25.7,44-51.59,44q-139.83.1-279.65,0a52,52,0,0,1-52-52q-.14-140,.08-280c.05-20.87,10.17-36.52,28.72-46.11,5.44-2.81,11.75-3.92,17.66-5.8h291a20.65,20.65,0,0,0,2.12.65c21.8,4.07,35.9,16.79,42.48,37.89C691.91,349.64,692.38,352.34,693,355ZM513.53,478.19c0-3.32.08-6.65,0-10-.15-5.76-2.83-8.42-8.64-8.45q-16.68-.09-33.36,0c-6.08,0-8.76,2.66-8.76,8.65q0,71.59,0,143.19c0,6.15,2.76,8.86,9,8.88,10.24,0,20.49,0,30.74,0,8.8,0,10.9-2.06,10.9-10.74,0-24,0-48,0-72,0-9.15,2-17.87,7.09-25.62,6.19-9.46,15.28-12.36,26-10.91,9.85,1.33,16.45,7.15,18.75,16.5a108.24,108.24,0,0,1,2.91,24c.35,23.11.07,46.23.08,69.34,0,6.78,2.56,9.31,9.27,9.33q16.68,0,33.36,0c6.69,0,9.34-2.65,9.33-9.33,0-26.23.3-52.48-.24-78.71a172.89,172.89,0,0,0-3.68-32.65c-4.24-19.73-15.06-34.5-35.57-39.92a78.93,78.93,0,0,0-18.49-2.48C543.18,457,526,461.46,513.53,478.19ZM389.22,540.12q0,34.86,0,69.71c0,8.11,2.6,10.67,10.83,10.67h29.61c7.36,0,10.25-2.82,10.26-10.17q0-70.27,0-140.55c0-7.35-2.82-10.07-10.31-10.1q-15,0-30,0c-7.71,0-10.39,2.71-10.39,10.35Q389.22,505.07,389.22,540.12Zm58-126.82a32.7,32.7,0,1,0-33,32.57A32.66,32.66,0,0,0,447.2,413.3Z" transform="translate(-308.25 -308.5)"/>
         <path className="path2" d="M513.53,478.19C526,461.46,543.18,457,562.24,457.35a78.93,78.93,0,0,1,18.49,2.48c20.51,5.42,31.33,20.19,35.57,39.92A172.89,172.89,0,0,1,620,532.4c.54,26.23.23,52.48.24,78.71,0,6.68-2.64,9.31-9.33,9.33q-16.68,0-33.36,0c-6.71,0-9.27-2.55-9.27-9.33,0-23.11.27-46.23-.08-69.34a108.24,108.24,0,0,0-2.91-24c-2.3-9.35-8.9-15.17-18.75-16.5-10.76-1.45-19.85,1.45-26,10.91-5.07,7.75-7.06,16.47-7.09,25.62-.06,24,0,48,0,72,0,8.68-2.1,10.74-10.9,10.74-10.25,0-20.5,0-30.74,0-6.21,0-9-2.73-9-8.88q0-71.6,0-143.19c0-6,2.68-8.63,8.76-8.65q16.68-.07,33.36,0c5.81,0,8.49,2.69,8.64,8.45C513.61,471.54,513.53,474.87,513.53,478.19Z" transform="translate(-308.25 -308.5)"/>
         <path className="path3" d="M389.23,540.12q0-35.06,0-70.09c0-7.64,2.68-10.33,10.39-10.35q15,0,30,0c7.49,0,10.31,2.75,10.31,10.1q0,70.28,0,140.55c0,7.35-2.9,10.16-10.26,10.17H400.06c-8.23,0-10.83-2.56-10.83-10.67Q389.22,575,389.23,540.12Z" transform="translate(-308.25 -308.5)"/>
         <path className="path4" d="M447.2,413.3a32.7,32.7,0,1,1-65.4-.35,32.7,32.7,0,0,1,65.4.35Z" transform="translate(-308.25 -308.5)"/>
      </svg>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.a`
   width: fit-content;
   height: fit-content;
   cursor: pointer;
   svg{
      width: 38px;
      .path1{
         transition: 0.15s;
         fill: ${theme.black};
      }
      .path2, .path3, .path4{
         fill: transparent;
      }  
   }
   &:hover{
      .path1{
         fill: ${theme.primary};
      }
   }
`

const SvgContainer = styled.svg`
   

   
`