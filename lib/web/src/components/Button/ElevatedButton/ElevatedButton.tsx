'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import elevation from '../../../function/elevation';
import { BaseButton, BaseButtonProps } from '../BaseButton/BaseButton';
import { hexToRgba } from 'libs/web/src/function';

const ElevatedButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <ElevatedButtonStl {...props}>{children}</ElevatedButtonStl>;
};

export const ElevatedButtonStl = styled(BaseButton)(({ theme }) => ({
  boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
  backgroundColor: theme.color.surfaceContainerLow,
  color: theme.color.surfaceTint,
  border: 0,
  '&:hover:enabled': {
    color: theme.color.primary,
    boxShadow: elevation(theme.elevation.level2, theme.color.shadow),
    backgroundColor: hexToRgba(theme.color.primary,theme.state.hover.container),
  },
  '&:active:enabled': {
    backgroundColor: hexToRgba(theme.color.primary,theme.state.pressed.container),
    boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
  },
}));

export default ElevatedButton;
