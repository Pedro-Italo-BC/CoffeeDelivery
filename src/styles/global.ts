import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        /* font-family: 'Baloo 2', cursive; */
        font-family: 'Roboto', sans-serif;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    body{
        background-color: ${(props) => props.theme['app-background']};
    }


    
    body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }

`
