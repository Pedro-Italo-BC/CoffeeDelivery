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


    @media(max-width: 1150px){
        html{
            font-size: 85%; 
        }
    }

    @media(max-width: 900px){
        html{
            font-size: 75%; 
        }
    }

    @media(max-width: 850px){
        html{
            font-size: 60%;
        }
    }

    @media(max-width: 410px){
        html{
            font-size: 50%;
        }
    }

    @media(max-width: 369px){
        html{
            font-size: 40%;
        }
    }

`
