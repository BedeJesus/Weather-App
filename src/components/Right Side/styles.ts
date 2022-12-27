import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 2em 3% 2em 3%;
border-radius: 10px;
width: 37em;

@media (max-width: 700px) {
    width: 28em;
  }

`