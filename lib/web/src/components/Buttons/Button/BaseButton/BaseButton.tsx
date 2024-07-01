'use client';
import styled from 'styled-components';
import { elevation, hexToRgba } from '../../../function';

export type BaseButtonProps = {
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const BaseButton = styled.button(({ theme, disabled }) => ({
  ...theme.shape.corner.full,
  height: '40px',
  paddingLeft: 24,
  paddingRight: 24,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  border: 0,
  fontFamily: theme.typeScale.label.large.fontFamily,
  lineHeight: `${theme.typeScale.label.large.lineHeight}px`,
  fontSize: theme.typeScale.label.large.fontSize,
  fontWeight: theme.typeScale.label.large.fontWeight,
  letterSpacing: theme.typeScale.label.large.letterSpacing,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: 8,
  '&>i': {
    marginLeft: -8,
    fontSize: 18,
  },
  ...(disabled && {
    '&:disabled': {
      boxShadow: elevation(theme.elevation.level0, theme.color.shadow),
      backgroundColor: hexToRgba(theme.color.onSurface, 0.12),
      color: hexToRgba(theme.color.onSurface, theme.state.disabled.content),
    },
  }),
}));

export type StateBaseProps = {
  disabled?: boolean;
};

export const StateBase = styled.span(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}));
