import { createGlobalStyle } from "styled-components";
import "../Fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
    *:not(input) {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }

    html  body {
        line-height: 1;
        background-color: ${(props) => props.theme.main_gray};
        position: relative;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote, q {
        &:before, &:after {
            content: '';
            content: none;
        }
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }

    /* Fonts */

    body, html {
        line-height: 1.5;
        font-smoothing: antialiased;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;
        min-height: 100%;
        font-family: 'Segoe';
    }

    a {
        text-decoration: none;
        outline: none;
        color: inherit;
        &:visited {
            color: inherit;
        }
    }

    //KAKO VISITED DA GO STAVIME VNATRE VO A SELEKTOROT ?

    strong {
        font-weight: bold;
    }


    textarea {
        font-family: 'Segoe', sans-serif;
    }

    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 20px;
        background: #E6E7EB;
    }

    &::-webkit-scrollbar-track {
        background: #f7f7f7;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background: #E6E7EB;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #E5E5E5;
        border-radius: 20px;
    }

    input, textarea {
        background-color: ${(props) => props.theme.dark_gray3};
        color: ${(props) => props.theme.white};
        font-family: 'Segoe', sans-serif;
        font-size: ${(props) => props.theme.smallText};
    }

    textarea {
        column-count: 1;
        resize: none;
    }

    ::placeholder {
        font-family: 'Segoe', sans-serif;
        color: ${(props) => props.theme.lightBlack};
    }

    .uppercase {
        text-transform: uppercase;
    }

    button {
        :focus, :visited, :active {
            outline: none;
            box-shadow: none;
        }
    }

    h5, p, a{
        font-family: 'Segoe UI';
        color: ${(props) => props.theme.text_gray};
    }
}
`;

export default GlobalStyle;
