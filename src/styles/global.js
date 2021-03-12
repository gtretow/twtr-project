import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    color: black;
  }
  html,body, #root {

   max-height: 100vh;
   max-width: 100vw;

   width: 100%;
   height: 100%;

  }

  *, button, input {

   border:0; 
   background: none;
   font-family: -apple-system, system-ui;

  }
  html {

background: var(--primary);

  }

  :root {   
    --primary: #FFF;
    --secondary: #15181C;
    --search: #EBEEF0;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #cfcccc;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #E8F5FE;
    --twitter-light-hover: #2C8ED6;}
`;
