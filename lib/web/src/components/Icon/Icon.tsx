'use client';
import React from 'react';
import '@material-design-icons/font';
import { MaterialIcon } from '@material-design-icons/font';

import styled from 'styled-components';
import { ColorPaletteType } from '@react-md3/style';

const VARIANTS = {
  filled: 'material-icons',
  outlined: 'material-icons-outlined',
  round: 'material-icons-round',
  sharp: 'material-icons-sharp',
  twoTone: 'material-icons-two-tone',
};

type SizeType = 16 | 20 | 24 | 36 | 40 | 48;

export type IconProps = {
  iconName: MaterialIcon;
  variant?: keyof typeof VARIANTS;
  size?: SizeType;
  color?: keyof ColorPaletteType;
};

const IconStl = styled.i<Pick<IconProps, 'size' | 'color'>>(
  ({ theme, size, color }) => ({
    color: color ? theme.color[color] : theme.color.primary,
    fontSize: size,
    fontWeight: 400,
  })
);

const Icon = ({
  iconName,
  color,
  variant = 'filled',
  size = 24,
}: IconProps) => {
  return (
    <IconStl className={VARIANTS[variant]} color={color} size={size}>
      {iconName}
    </IconStl>
  );
};

export default Icon;
