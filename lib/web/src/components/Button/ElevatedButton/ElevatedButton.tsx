'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import elevation from '../../../function/elevation';
import { BaseButton, BaseButtonProps, StateBase, StateBaseProps } from '../BaseButton/BaseButton';

const ElevatedButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <ElevatedButtonStl {...props} >{children}<StateLayer disabled={props.disabled} /></ElevatedButtonStl>;
};

const ElevatedButtonStl = styled(BaseButton)(({ theme }) => ({
  boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
  backgroundColor: theme.color.surfaceContainerLow,
  color: theme.color.surfaceTint,
  border: 0,
  '&:hover:enabled': {
    boxShadow: elevation(theme.elevation.level2, theme.color.shadow),
  },
  '&:active:enabled': {
    boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
  },

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

export default ElevatedButton;
