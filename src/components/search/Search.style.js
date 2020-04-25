import styled from 'styled-components';
import SearchIcon from 'assets/images/search.png'
import { Border } from 'components/style/Border'

// 最外层的容器
const SearchContainer = styled.div`
  height:1.3rem;
  /* 接收参数 */
  background: ${({ conbgcolor }) => conbgcolor};  
  padding:0.3rem;
  box-sizing:border-box;
`

// 图标和输入框的容器
const InputContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  /* border: 1px solid #ccc; */
  border-radius:.15rem;
  height: .8rem;
  background:${({ inputbgcolor }) => inputbgcolor};
  i{
    background:url(${SearchIcon});
    display:block;
    width: .35rem;
    height: .35rem;
    background-size:cover;
  }
  input{
    width: 4rem;
  }
`

const InputContainerBorder = Border({
  Component: InputContainer,
  borderColor: ({ bordercolor }) => bordercolor,
  radius: 0.15,
})
export {
  SearchContainer,
  InputContainer,
  InputContainerBorder
}