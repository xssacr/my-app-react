import styled from 'styled-components';

const Border = ({ Component, borderColor = "", radius = 0, borderWidth = '1px' }) => {
  return styled(Component)`
      position: relative;
      &::before {
        content:'';
        position:absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;

        border-style: solid;
        border-width: ${borderWidth};
        border-color: ${borderColor};
        transform-origin:0 0;
        /* 设置伪元素不响应鼠标事件 */
        pointer-events:none; 
        z-index:1;
        @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
        height: 150%;
        width: 150%;
        transform:scale(0.75);
        border-radius: ${radius * 1.5}rem;
    }

    @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
        height: 200%;
        width: 200%;
        transform:scale(0.5);
        border-radius: ${radius * 2}rem;
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        height: 300%;
        width: 300%;
        transform:scale(0.33333);
        border-radius: ${radius * 3}rem;
      }
    }

  `
}

export {
  Border
}