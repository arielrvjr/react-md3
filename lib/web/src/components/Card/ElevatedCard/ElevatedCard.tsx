'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import BaseCard, { BaseCardProps } from '../BaseCard/BaseCard';
import { elevation, hexToRgba } from '../../../function';

const ElevatedCard = ({
  children,
  ...props
}: PropsWithChildren<BaseCardProps>) => {
  return <ElevatedCardStl {...props}>{children}</ElevatedCardStl>;
};

export const ElevatedCardStl = styled(BaseCard)(
  ({ theme, disabled }) =>
    !disabled && {
      backgroundColor: theme.color.surfaceContainerLow,
      boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
      '& > i': {
        color: theme.color.primary,
        height: '24px',
      },
      '&:hover': {
        boxShadow: elevation(theme.elevation.level2, theme.color.shadow),
        background: hexToRgba(
          theme.color.surfaceContainerLow,
          theme.state.hover.container
        ),
      },
      '&:active': {
        boxShadow: elevation(theme.elevation.level1, theme.color.shadow),
        backgroundColor: hexToRgba(
          theme.color.onSurface,
          theme.state.pressed.container
        ),
        transition: 'background 0s',
      },
    }
);

export default ElevatedCard;
