import theme from 'resources/theme';
import styled from 'styled-components';

type ButtonType = 'primary' | 'transparent';

interface ButtonProps{
   className?: any;
   children: React.ReactNode;
   type: ButtonType;
   onClick?: () => void;
}

export default function Button( {children, type}: ButtonProps ) {
   switch (true) {
      case type === 'primary':
         return (
            <PrimaryButton>
               {children}
            </PrimaryButton>
         );

      case type === 'transparent':
         return (
            <TransparentButton>
               {children}
            </TransparentButton>
         );

      default:
         return (
            <></>
         );
   }
}

const BaseButton = styled.button`
   display: flex;
   align-items: center;
   position: relative;
   transition: 0.3s;
   z-index: 1;
   border: solid 2px ${theme.primary};
   font-size: 1.1rem;
   outline: none;
   width: max-content;
   cursor: pointer;
   border-radius: 5px;
   i{
      overflow: hidden;
      margin-left: 15px;
   }
`

const PrimaryButton = styled(BaseButton)`
   background-color: ${theme.primary};
   border-color: ${theme.primary};
   color: ${theme.white};
   padding: 14px 32px;
   transition: 0.3s;
   &:hover{
      background-color: transparent;
      color: ${theme.primary};
   }
`

const TransparentButton = styled(BaseButton)`
   background-color: transparent;
   color: ${theme.primary};
   height: max-content;
   padding: 6px 14px;
   margin-left: 20px;
   font-size: 1rem;
   border: solid 1px;
   &:hover{
      text-decoration: underline;
   }
`