import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
    @font-face {
        font-family: 'Sofia Pro';
        src: url('/fonts/sofia-pro/SofiaProLight.woff2') format('woff2'),
             url('/fonts/sofia-pro/SofiaProLight.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Sofia Pro';
        src: url('/fonts/sofia-pro/SofiaProRegular.woff2') format('woff2'),
             url('/fonts/sofia-pro/SofiaProRegular.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Sofia Pro';
        src: url('/fonts/sofia-pro/SofiaProRegular.woff2') format('woff2'),
             url('/fonts/sofia-pro/SofiaProRegular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    font-family: 'Sofia Pro';
        src: url('/fonts/sofia-pro/SofiaProSemiBold.woff2') format('woff2'),
             url('/fonts/sofia-pro/SofiaProSemiBold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'Sofia Pro';
        src: url('/fonts/sofia-pro/SofiaProSemiBold.woff2') format('woff2'),
             url('/fonts/sofia-pro/SofiaSemiBold.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }
  /* Normalize */
  * {
    font-family: ${({ theme }) => theme.font.family.primary};
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  ol, ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  button {
    outline: none;
  }
  a {
    color: inherit;
  }
`;

export default BaseStyles;
