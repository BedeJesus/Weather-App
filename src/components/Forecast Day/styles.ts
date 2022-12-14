import styled from "styled-components";

export const Container = styled.div`
display: flex;
border-radius: 10px;
background-color: rgba(255,255,255, 0.4);;
align-items: center;
padding: 0em 1em;
width: 130%;
margin:.46em 0;

@media (max-width: 1200px) {
    width: 151%;
    
  }

  @media (max-width: 700px) {
    width: 115%;
    
  }
`

export const Icon = styled.div`
display: flex;
flex-direction:column;
align-items: center;

h1{
    font-size:3em;
}
`

export const Info = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
width: 100%;
margin: 0 0 0 1em;
`

export const Line = styled.div`
display: flex;
justify-content: space-between;
padding: .78em 0;


h1{
   font-size: 1.7em;
   
}

h2{
    display: flex;
    align-items: center;
    
};


`






