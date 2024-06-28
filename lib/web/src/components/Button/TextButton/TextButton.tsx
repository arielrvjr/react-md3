'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps, StateBase, StateBaseProps } from '../BaseButton';
import { elevation, hexToRgba } from '../../../function';

const TextButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <TextButtonStl {...props}>{children}<StateLayer disabled={props.disabled} /></TextButtonStl>;
};

export const TextButtonStl = styled(BaseButton)(({ theme, disabled }) => ({
  border: 0,
  backgroundColor: 'transparent',
  color: theme.color.primary,
  boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  '&:hover:enabled': {
    color: theme.color.primary,
    backgroundColor: hexToRgba(
      theme.color.primary,
      theme.state.hover.container
    ),
  },
  '&:active:enabled': {
    color: theme.color.primary,
    backgroundColor: hexToRgba(
      theme.color.primary,
      theme.state.pressed.container
    ),
  },
  ...(disabled && {
    "&:disabled": {
      boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
      backgroundColor: 'transparent',
      color: hexToRgba(theme.color.onSurface, theme.state.disabled.content)
    }
  }),

}));
const StateLayer = styled(StateBase)<StateBaseProps>(({ theme, disabled }) => (!disabled && {
  '&:hover': {
    backgroundColor: theme.color.primary,
    opacity: theme.state.hover.container
  },
  '&:active': {
    backgroundColor: theme.color.primary,
    opacity: theme.state.pressed.container
  },

}));

export default TextButton;
