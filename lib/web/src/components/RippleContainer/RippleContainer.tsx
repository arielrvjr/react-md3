"use client";
import styled, { keyframes } from 'styled-components';
import { RippleProps } from '../../hooks/useRipple';

const ripple = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

const RippleContainer = styled.span<RippleProps>`
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  transform: scale(0);
  animation: ${ripple} 0.6s linear;
  pointer-events: none;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
`;

export default RippleContainer;
