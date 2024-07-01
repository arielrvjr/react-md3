"use client";
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { TopAppBarBase, TopRow } from '../TopAppBarBase';
import { BottomRow, TopAppBarProps, LeadingIcon, TrailingIcons } from '../TopAppBarBase';
import { Typography } from '../../../Typography';


const TopAppBarLarge: React.FC<PropsWithChildren<TopAppBarProps>> = ({ leadingIcon, headline, trailingIcons }) => {
	return (
		<TopAppBarLargeStl>
			<TopRow>
				<LeadingIcon leadingIcon={leadingIcon} />
				<TrailingIcons trailingIcons={trailingIcons} />
			</TopRow>
			<BottomRow>
				<Typography variant='headline' size='medium' color="onSurface">{headline}</Typography>
			</BottomRow>
		</TopAppBarLargeStl >
	);
};

export const TopAppBarLargeStl = styled(TopAppBarBase)(({ theme }) => ({
	height: 152,
	paddingTop: 20,
	paddingBottom: 28

}));
export default TopAppBarLarge;
