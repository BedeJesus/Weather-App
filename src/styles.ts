import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content:space-around;
align-items: center; 
background: linear-gradient(skyblue, cornflowerblue); // light mode
height: 100vh; 
overflow: hidden;

@media (max-width: 1200px) {
    flex-direction: column;
    height:100%
  }
`

export const City = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: rgba(255,255,255, 0.4);
padding: 1em; 
margin-bottom:3%;
z-index: 1;

box-shadow:  8px 8px 16px #5e3e6e,
             -8px -8px 16px #88599e;

@media (max-width: 1200px) {
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
    color: grey;
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
    width: 28em;
  }

  

`