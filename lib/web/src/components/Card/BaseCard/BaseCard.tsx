'use client';
import React from 'react';
import styled from 'styled-components';
import { elevation, hexToRgba } from '../../../function';

export type BaseCardProps = {
  disabled?: boolean;
};

export const BaseCard = styled.div<BaseCardProps>(({ theme, disabled }) => ({
  ...theme.shape.corner.medium,
  padding: '16px',
  margin: '8px',
  textAlign: 'start',
  ...(disabled && {
    boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
    backgroundColor: hexToRgba(
      theme.color.surface,
      theme.state.disabled.container
    ),
    color: hexToRgba(theme.color.onSurface, theme.state.disabled.content),
  }),
}));

export default BaseCard;
