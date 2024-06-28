"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseIconButton } from '../BaseIconButton';
import { BaseButtonProps } from '../../Button/BaseButton';

export type OutlinedIconButtonProps = {
	// types...
}

const OutlinedIconButton = (props: PropsWithChildren<BaseButtonProps>) => {
	return (
		<OutlinedIconButtonStl {...props}>
		</OutlinedIconButtonStl>
	);
};

export const OutlinedIconButtonStl = styled(BaseIconButton)(({ theme }) => ({
	backgroundColor: 'transparent',
	outline: `${theme.color.outline} solid 1px`,
	'&>i': {
		color: theme.color.inverseSurface
	},
}));

export default OutlinedIconButton;
