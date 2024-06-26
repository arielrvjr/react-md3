'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { elevation, hexToRgba } from '../../../function';

const FilledButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <FilledButtonStl {...props}>{children}</FilledButtonStl>;
};

export const FilledButtonStl = styled(BaseButton)(({ theme }) => ({
  boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  backgroundColor: theme.color.primary,
  color: theme.color.onPrimary,
  border: 0,
  '& > i' : {
    color: theme.color.onPrimary,
  },
  '&:hover:enabled': {
    boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
    color: theme.color.onPrimary,
    backgroundColor: hexToRgba(
      theme.color.primary,
      1 - theme.state.hover.container
    ),
  },
  '&:active:enabled': {
    color: theme.color.onPrimary,
    backgroundColor: hexToRgba(
      theme.color.primary,
      1 - theme.state.pressed.container
    ),
    boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  },
}));

export default FilledButton;
