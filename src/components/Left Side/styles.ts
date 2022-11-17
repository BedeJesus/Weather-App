import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: rgba(255,255,255, 0.4);;
padding: 1em;
`

export const City = styled.h1`
display: flex;
justify-content: center;
font-size: 5em;

`

export const Date = styled.h2`
display: flex;
justify-content: center;
font-size: 1.5em;
margin-bottom: 2em;
`

export const Temperature = styled.h2`
display: flex;
justify-content: center;
font-size: 10em;
margin-bottom: .5em;
`

export const Weather = styled.h3`
display: flex;
justify-content: center;
font-size: 3em;
margin: 0 0 .5em 0;
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