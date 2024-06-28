'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps, StateBase, StateBaseProps } from '../BaseButton';
import { hexToRgba, elevation } from '../../../function';

const TonalButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <TonalButtonStl {...props}>{children}<StateLayer disabled={props.disabled} /></TonalButtonStl>;
};

const TonalButtonStl = styled(BaseButton)(({ theme, disabled }) => ({
  backgroundColor: theme.color.secondaryContainer,
  color: theme.color.onSecondaryContainer,
  boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  border: 0,
  '&:hover:enabled': {
    boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
    color: theme.color.onSecondaryContainer,
  },
  '&:active:enabled': {
    color: theme.color.onSecondaryContainer,
    boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  },
}));

const StateLayer = styled(StateBase)<StateBaseProps>(({ theme, disabled }) => (!disabled && {
  '&:hover': {
    backgroundColor: theme.color.onSecondaryContainer,
    opacity: theme.state.hover.container
  },
  '&:active': {
    backgroundColor: theme.color.onSecondaryContainer,
    opacity: theme.state.pressed.container
  },

}));
export default TonalButton;
