'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import BaseCard, { BaseCardProps } from '../BaseCard/BaseCard';
import { elevation, hexToRgba } from '../../../function';

export type OutlinedCardProps = {
  // types...
};

const OutlinedCard = ({
  children,
  ...props
}: PropsWithChildren<BaseCardProps>) => {
  return <OutlinedCardStl {...props}>{children}</OutlinedCardStl>;
};

export const OutlinedCardStl = styled(BaseCard)(({ theme, disabled }) => ({
  backgroundColor: theme.color.surface,
  boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
  color: theme.color.surfaceTint,
  border: `1px solid ${theme.color.outlineVariant}`,
  ...(disabled && {
    color: hexToRgba(theme.color.outline, theme.state.disabled.content),
    border: `1px solid ${hexToRgba(
      theme.color.outline,
      theme.state.disabled.content
    )}`,
  }),
  ...(!disabled && {
    '&:hover': {
      boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
      backgroundColor: hexToRgba(
        theme.color.onSurface,
        theme.state.hover.container
      ),
    },
    '&:active': {
      boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
      backgroundColor: hexToRgba(
        theme.color.onSurface,
        theme.state.pressed.container
      ),
    },
  }),
}));

export default OutlinedCard;
