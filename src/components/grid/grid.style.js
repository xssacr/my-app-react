import styled from 'styled-components';

const GridContainer = styled.div`
   ul{
     display:flex;
     flex-wrap: wrap;
     li{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width: ${({ col }) => 100 / col}%;
      height:1.5rem;
    }
   }
`

export {
  GridContainer
}