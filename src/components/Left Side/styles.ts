import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
height: 29em;
justify-content: space-between;
backdrop-filter: blur(8px) saturate(180%);
-webkit-backdrop-filter: blur(8px) saturate(180%);
background-color: rgba(100, 100, 100, 0.35);
padding: 1em;

`

export const City = styled.input`
display: flex;
justify-content: center;
font-size: 5em;
text-align: center;
background-color: transparent;
border: none;
width: 7em;

::placeholder{
    color: grey;
} 

:focus{
    outline: none;
}

`

export const Date = styled.h2`
display: flex;
justify-content: center;
font-size: 1.5em;
`

export const Temperature = styled.h2`
display: flex;
justify-content: center;
font-size: 10em;
`

export const Weather = styled.h3`
display: flex;
justify-content: center;
font-size: 3em;
`

export const MinMax = styled.div`
display: flex;
justify-content: space-evenly;

h4{
    display: flex;
    align-items:center;
    font-size:2em;
}
`