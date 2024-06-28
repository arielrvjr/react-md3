"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseButtonProps } from '../../Button/BaseButton';
import { BaseIconButton } from '../BaseIconButton';

export type TonalIconButtonProps = {
	// types...
}

const TonalIconButton = (props: PropsWithChildren<BaseButtonProps>) => {
	return (
		<TonalIconButtonStl {...props} />
	);
};

export const TonalIconButtonStl = styled(BaseIconButton)(({ theme }) => ({
	backgroundColor: theme.color.secondaryContainer,
	'&>i': {
		color: theme.color.onSurfaceVariant
	},
}));
export default TonalIconButton;
