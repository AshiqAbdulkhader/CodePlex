import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

  :root {
    --maxWidth: calc(100%-200px);
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: #131516;
    width: 100vw;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;
