'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
  BaseButton,
  BaseButtonProps,
  StateBase,
  StateBaseProps,
} from '../BaseButton';
import { elevation, hexToRgba } from '../../../function';

const FilledButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return (
    <FilledButtonStl {...props}>
      {children}
      <StateLayer disabled={props.disabled} />
    </FilledButtonStl>
  );
};

const FilledButtonStl = styled(BaseButton)(({ theme }) => ({
  boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  backgroundColor: theme.color.primary,
  color: theme.color.onPrimary,
  border: 0,
  '& > i': {
    color: theme.color.onPrimary,
    fontSize: 20,
  },
  '&:hover:enabled': {
    boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
    color: theme.color.onPrimary,
  },
  '&:active:enabled': {
    color: theme.color.onPrimary,
    boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  },
}));

const StateLayer = styled(StateBase)<StateBaseProps>(
  ({ theme, disabled }) =>
    !disabled && {
      '&:hover': {
        backgroundColor: theme.color.onPrimary,
        opacity: theme.state.hover.container,
      },
      '&:active': {
        backgroundColor: theme.color.onPrimary,
        opacity: theme.state.pressed.container,
      },
    }
);

export default FilledButton;
