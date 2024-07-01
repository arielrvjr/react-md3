"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { LeadingIcon, TopAppBarBase, TopAppBarProps, TrailingIcons } from '../TopAppBarBase';
import { Typography } from '../../../Typography';



const TopAppBarCenter: React.FC<PropsWithChildren<TopAppBarProps>> = ({ leadingIcon, headline, trailingIcons }) => {
	return (
		<TopAppBarCenterStl>
			<LeadingIcon leadingIcon={leadingIcon} />
			<Typography variant='title' size='large' color="onSurface">{headline}</Typography>
			<TrailingIcons trailingIcons={trailingIcons} />

		</TopAppBarCenterStl>
	);
};

export const TopAppBarCenterStl = styled(TopAppBarBase)(({ theme }) => ({
	height: 64,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	'&>span': {
		flexGrow: 1,
		textAlign: 'center',
	},
}))

export default TopAppBarCenter;
