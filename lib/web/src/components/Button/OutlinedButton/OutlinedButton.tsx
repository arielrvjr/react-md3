'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { elevation, hexToRgba } from '../../../function';

const OutlinedButton = ({
  children,
  ...props
}: PropsWithChildren<BaseButtonProps>) => {
  return <OutlinedButtonStl {...props}>{children} </OutlinedButtonStl>;
};

export const OutlinedButtonStl = styled(BaseButton)(({ theme, disabled }) => ({
  border: `1px solid ${theme.color.outline}`,
  backgroundColor: theme.color.surface,
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
		"&:disabled": {
      backgroundColor: theme.color.surface,
			boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
			color: hexToRgba(theme.color.onSurface,theme.state.disabled.content),
      border: `1px solid ${hexToRgba(theme.color.onSurface,0.12)}`,
		}
	}),
}));

export default OutlinedButton;
