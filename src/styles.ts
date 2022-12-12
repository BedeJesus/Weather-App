import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content:space-around;
align-items: center; // mudar dps para ficar responsivo

background: linear-gradient(skyblue, cornflowerblue); // light mode
background: linear-gradient(#868f96, #596164); //dark mode

height: 100vh; //mudar dps para fazer responsivo
`

export const City = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: rgba(255,255,255, 0.4);
padding: 1em; 
margin-bottom:3%;

`

export const Input = styled.input`
display: flex;
justify-content: center;
font-size: 5em;
text-align: center;
background-color: transparent;
border: none;
width: 7em;


::placeholder{
    color: grey;
    font-size: .7em;
} 

:focus{
    outline: none;
}

`

export const Left = styled.div`
display: flex;
flex-direction:column;

`