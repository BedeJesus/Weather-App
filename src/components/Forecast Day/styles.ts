import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 20% 40% 40%;
border-radius: 10px;
backdrop-filter: blur(8px) saturate(180%);
-webkit-backdrop-filter: blur(8px) saturate(180%);
background-color: rgba(100, 100, 100, 0.35);
align-items: center;
width: 100%;
padding: .7em;

`

export const Icon = styled.div`
display: flex;
flex-direction:column;
align-items: center;
text-align: start;

h1{
    font-size:3em;
}
`

export const Line = styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: space-between;

h1{
   font-size: 1.4em;

   @media (max-width: 700px) {
        margin-left: .3em;
    
    }   
}

h2{
   text-align: end;
}

`