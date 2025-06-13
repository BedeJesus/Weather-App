import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 37em;
  gap: 1em;
  @media (max-width: 1250px) {
    margin: 1em 0;
    width: 37em;
  }

  @media (max-width: 700px) {
    width: 22em;
  }

`