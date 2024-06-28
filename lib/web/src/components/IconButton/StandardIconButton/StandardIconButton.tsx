"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseIconButton } from '../BaseIconButton';
import { BaseButtonProps } from '../../Button/BaseButton';

export type StandardIconButtonProps = {
	// types...
}

const StandardIconButton = (props: PropsWithChildren<BaseButtonProps>) => {
	return (
		<StandardIconButtonStl {...props} />

	);
};

export const StandardIconButtonStl = styled(BaseIconButton)(({ theme }) => ({
	backgroundColor: 'transparent',
	'&>i': {
		color: theme.color.onSurfaceVariant
	},
}));

export default StandardIconButton;
