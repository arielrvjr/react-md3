'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { hexToRgba, elevation } from '../../../function';

export type TonalButtonProps = {
  // types...
};

const TonalButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <TonalButtonStl {...props}>{children}</TonalButtonStl>;
};

export const TonalButtonStl = styled(BaseButton)(({ theme, disabled }) => ({
  backgroundColor: theme.color.secondaryContainer,
  color: theme.color.onSecondaryContainer,
  boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  border: 0,
  '&:hover:enabled': {
    boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
    color: theme.color.onSecondaryContainer,
    backgroundColor: hexToRgba(theme.color.secondaryContainer, 1 - theme.state.hover.container),
  },
  '&:active:enabled': {
    boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
    backgroundColor: hexToRgba(theme.color.secondaryContainer, 1 - theme.state.pressed.container),
  },
}));
export default TonalButton;
