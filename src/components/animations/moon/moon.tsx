import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const moveShadow = keyframes`
0% {
    transform: translateY(1.5px);
    transform: translateX(5.4px);
    background-color: white;
  }

  50% {
    transform: translateY(1.5px);
    transform: translateX(5.4px);
    background-color: black;
  }

  100% {
    transform: translateY(1.5px);
    transform: translateX(5.4px);
    background-color: white;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
`;

const Moon = styled.div`
  height: 40px;
  width: 49px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid white;
`;

const Shadow = styled.div`
  height: 35px;
  width: 41px;
  border-radius: 50%;
  background-color: white;
  animation: ${moveShadow} 10s infinite 1.5s;
`;

const MoonAnimation = () => (
  <Content>
    <Moon>
      <Shadow />
    </Moon>
  </Content>
);

export default MoonAnimation;
