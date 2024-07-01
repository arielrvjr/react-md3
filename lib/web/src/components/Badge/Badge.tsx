"use client";
import React from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography';

type BadgeSize = 'small' | 'large'

export type BadgeProps = {
	size: BadgeSize,
	label?: string
}

const Badge: React.FC<BadgeProps> = ({ size, label }) => {
	return (
		<BadgeStl size={size}>
			{size === 'large' && (<Typography variant='label' size='small' color='onError'>{label}</Typography>)}
		</BadgeStl>
	);
};

const BadgeStl = styled.div<Pick<BadgeProps, 'size'>>(({ theme, size }) => ({
	...theme.shape.corner.full,
	backgroundColor: theme.color.error,
	height: 6,
	width: 6,
	...(size === 'large' && {
		paddingLeft: 4,
		paddingRight: 4,
		height: 16,
		width: 'fit-content',
		verticalAlign: 'middle'
	}),
	'&>span': {
		verticalAlign: 'middle'
	}
}));

export default Badge;
