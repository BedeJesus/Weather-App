import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-radius: 10px;
width: 37em;

@media (max-width: 1250px) {
  margin: 1em 0;
    width: 37em;
  }

  @media (max-width: 700px) {
    width: 28em;
  }

`