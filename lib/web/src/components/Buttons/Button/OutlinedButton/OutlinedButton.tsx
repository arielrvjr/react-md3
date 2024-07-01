'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
  BaseButton,
  BaseButtonProps,
  StateBase,
  StateBaseProps,
} from '../BaseButton';
import { elevation, hexToRgba } from '../../../../function';

const OutlinedButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return (
    <OutlinedButtonStl {...props}>
      {children}
      <StateLayer disabled={props.disabled} />{' '}
    </OutlinedButtonStl>
  );
};

export const OutlinedButtonStl = styled(BaseButton)(({ theme, disabled }) => ({
  outline: `${theme.color.outline} solid 1px`,
  backgroundColor: 'transparent',
  color: theme.color.primary,
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
    '&:disabled': {
      backgroundColor: 'transparent',
      boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
      color: hexToRgba(theme.color.onSurface, theme.state.disabled.content),
      outline: `${hexToRgba(theme.color.onSurface, 0.12)} solid 1px`,
    },
  }),
}));

const StateLayer = styled(StateBase)<StateBaseProps>(
  ({ theme, disabled }) =>
    !disabled && {
      '&:hover': {
        backgroundColor: theme.color.primary,
        opacity: theme.state.hover.container,
      },
      '&:active': {
        backgroundColor: theme.color.primary,
        opacity: theme.state.pressed.container,
      },
    }
);

export default OutlinedButton;
