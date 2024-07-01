'use client';
import React from 'react';
import styled from 'styled-components';

export type BaseIconButtonProps = {
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const BaseIconButton = styled.button(({ theme, disabled }) => ({
  ...theme.shape.corner.full,
  position: 'relative',
  overflow: 'hidden',
  width: '40px',
  height: '40px',
  padding: 0,
  border: 0,

  '&>i': {
    fontSize: 24,
  },
}));

export default BaseIconButton;
