import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
--purple-300: rgba(124, 252, 0, 0.75);
--purple-600: #1996FA;       
--purple-900: #E6FF1F;      
--font-black: #29D9E3;     
--font-white: #2EFFC6;    
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;        
}

html {
@media(max-width: 1080px) {
  font-size: 93.75%;        
}
@media(max-width: 720px) {
  font-size: 87.5%;        
}         
}`;
