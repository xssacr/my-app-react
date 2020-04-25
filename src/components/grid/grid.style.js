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
      padding: 0 0.1rem;
      img{
        width: 100%;
        border-radius: 0.2rem;
      }
      span{
        display:block;
        width:100%;
        text-align:center;
        height:.55rem;
        line-height:.55rem;
      }
    }
   }
`

export {
  GridContainer
}