"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { BaseIconButton } from '../BaseIconButton';
import { BaseButtonProps } from '../../Button/BaseButton';

export type FilledIconButtonProps = {
	// types...
}

const FilledIconButton = (props: PropsWithChildren<BaseButtonProps>) => {
	return (
		<FilledIconButtonStl {...props} />
	);
};

export const FilledIconButtonStl = styled(BaseIconButton)(({ theme, disabled }) => ({
	backgroundColor: theme.color.primary,
	'&>i': {
		color: theme.color.surfaceContainerHighest
	},
	...(disabled && {
		"&:disabled": {
			backgroundColor: theme.color.onSurface,
			opacity: 0.12
		}
	}),
}));

export default FilledIconButton;
