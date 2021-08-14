import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${props => props.theme.colors.background};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.4rem 'Open Sans', sans-serif;
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  @media(max-width: 1080px) {
    :root {
      font-size: 55%;
    }
  }

  @media(max-width: 915px) {
    :root {
      font-size: 52%;
    }
  }

  @media(max-width: 440px) {
    :root {
      font-size: 50%;
    }
  }
`;
