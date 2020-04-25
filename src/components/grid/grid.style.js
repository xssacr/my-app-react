import styled from 'styled-components';

const GridContainer = styled.div`
   ul{
     display:flex;
     flex-wrap: wrap;
     padding: 0 0.1rem;
     li{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width: ${({ col }) => 100 / col}%;
      padding: 0.1rem;
      padding-top:0;
      img{
        width: 100%;
        border-radius: 0.2rem;
      }
      span{
        display:block;
        line-height:.55rem;
      }
    }
   }
`

export {
  GridContainer
}