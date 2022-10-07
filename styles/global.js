import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    //COLOR PRIMARY
    --primary: 29, 53, 87; //#1d3557
    
    //GREY SCALE
    --grey-1: 248, 249, 250; //#F8F9FA
}

* {
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    list-style: none;
}

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
}

#__next {
    width: 100%;
    height: 100%;

}

#app {
    width: 100%;
    height: 100%;
    display: flex;
}
`;
