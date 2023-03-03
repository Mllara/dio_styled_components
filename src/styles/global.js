import { createGlobalStyle } from 'styled-components'; 
//createGlobalstyled=>é uma função que vai despertar estilos de forma global da aplicação, pois o styled components trablah de forma isolada para cada componente criando nomes unico de estilização para aquele css em si.
//por isso um nenhum estilo interfere em outro

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #1E192C;
        color: #FFFF;
    }
`