'use client';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseIconButton } from '../BaseIconButton';
import { BaseButtonProps } from 'components/Buttons/Button/BaseButton';

export type StandardIconButtonProps = {
  // types...
};

const StandardIconButton = (props: PropsWithChildren<BaseButtonProps>) => {
  return <StandardIconButtonStl {...props} />;
};

export const StandardIconButtonStl = styled(BaseIconButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  height: 24,
  width: 24,
  '&>i': {
    color: theme.color.onSurfaceVariant,
  },
}));

export default StandardIconButton;
