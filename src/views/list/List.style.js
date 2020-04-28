import styled from 'styled-components'
import { Border } from 'components/style/Border'

const ListContainer = styled.div`
  .am-navbar{
    background:#ff7300;
  }

  input{
    border:0;
    background:rgba(255,255,255,.3);
    width: 5.2rem;
    height:.55rem;
    border-radius:.1rem;
    padding: .3rem .1rem;
    box-sizing:border-box;
    color:#FFF;
    &::placeholder {
      color: #fff;
    }
  }
`


const ListItemsContainer = styled.div`
  ul{
   
  }
`

const LI = styled.li`
  display:flex;
  padding:.22rem;
  >div:nth-child(1){
    margin-right:.3rem;
    width: 2.3rem;
    img{
      width: 2.3rem;
      height: 1.5rem;
    }
  }

  >div:nth-child(2){
    flex:1;
    width:0;
    h3{
      font-size:.35rem;
      font-weight:bold;
      line-height: .5rem;
    }
    p{
      font-size: .3rem;
      color:#8f8f8f;
      line-height: .5rem;
    }
  }
`
const TextBlockEllipsis = styled.p`
  width: 98%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`

const ItemContainer = Border({
  borderWidth: '0 0 1px 0',
  borderColor: '#dedede',
  Component: LI
})

export {
  ListContainer,
  ListItemsContainer,
  ItemContainer,
  TextBlockEllipsis
}