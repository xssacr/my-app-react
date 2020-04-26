import styled from 'styled-components';
import { Border } from 'components/style/Border'

const CategoryContainer = styled.div`
  display:flex;
  height:100%;
  div:nth-child(1){
    width:1.8rem;
    height:100%;
    overflow-y:auto;
    ul{
      li{
        text-align:center;
        color:#424242;
        line-height:.95rem;
        &.active{
          color:#ff7300;
          background-color:#FFF;
         position: relative;
          &::before{
            content:'';
            position:absolute;
            height: .02rem;
            bottom:0;
            left:.5rem;
            right:.5rem;
            background-color:#ff7300;
          }
        }
      }
      
    }
  }

  div:nth-child(2){
    flex:1;
    overflow-y:auto;
    background:#fff;
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        width: 33.3333%;
        text-align:center;
        line-height:.95rem;
      }
    }
  }
`

const BorderCateContainer = Border({
  Component: CategoryContainer,
  borderColor: '#c1c1c1',
  borderWidth: '1px 0 0 0'
})

export {
  CategoryContainer,
  BorderCateContainer
}