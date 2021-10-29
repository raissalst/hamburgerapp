import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-size: 100%;
  text-decoration: none;
  line-height: 1;
}
    
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        
        --gray-scale-600: #333333;
        --gray-scale-300: #828282;
        --gray-scale-100: #e0e0e0;
        --gray-scale-0: #f5f5f5;


        --font-primary: #313131;
        --font-primary-light: #656565;
        --font-secondary: #FFFFFF;
        --alert-error: #FF5555; 
        --alert-succes: #81FF64;
        --bg-with-transp: rgba(0, 0, 0, 0.61);

        --font-type-standart: Courier;
        --font-type-cursive: 'Sail';
        --font-type-details: 'Saira';
        --font-type-body: 'Raleway';
        --font-type-formal: 'PT Serif';

        --font-size-xsmall: 0.8rem;
        --font-size-small: 1rem;
        --font-size-standart: 1.2rem;
        --font-size-medium: 1.7rem;
        --font-size-large: 2.3rem;
        --font-size-xlarge: 3rem;

        --font-w-xthin: 200;
        --font-w-thin: 300;
        --font-w-normal: 400;
        --font-w-bold: 600;
    }
`;

export default GlobalStyles;
