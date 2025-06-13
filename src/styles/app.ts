import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center; 

background-color: blue;
background-size: cover;
height: 100vh; 
overflow: hidden;

@media (max-width: 1250px) {
    flex-direction: column;
    height:100%;
  }
`

export const City = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;

backdrop-filter: blur(8px) saturate(180%);
-webkit-backdrop-filter: blur(8px) saturate(180%);
background-color: rgba(100, 100, 100, 0.35);

padding: 1em; 
margin-bottom:3%;

@media (max-width: 1250px) {
    margin-top:3em;
  }
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
    color: rgb(50,50,50);
    font-size: .7em;
} 

:focus{
    outline: none;
}

@media (max-width: 700px) {
    width: 100%;
 }

`

export const Left = styled.div`
display: flex;
flex-direction:column;

@media (max-width: 700px) {
    width: 22em;
  }

  

`