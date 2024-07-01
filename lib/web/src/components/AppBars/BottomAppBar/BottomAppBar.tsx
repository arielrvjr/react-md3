'use client';
import React from 'react';
import styled from 'styled-components';
import { elevation } from '../../../function';
import { IconProps } from '../../Icon';
import { BaseIconButtonProps } from '../../Buttons/IconButton/BaseIconButton/BaseIconButton';
import { IconButton, Fab, FabProps } from '../../Buttons';

export type BottomAppBarProps = {
	icons: BottomAppBarIconProps[],
	fab?: BottomAppBarFabProps
};

const BottomAppBar: React.FC<BottomAppBarProps> = ({ icons, fab }) => {
	return (
		<BottomAppBarStl hasFAB={!!fab}>
			<BottomAppBarIcons>
				{icons.map(i => <BottomAppBarIconButton {...i} />)}
			</BottomAppBarIcons>
			{fab && (<Fab variant='primary' elevation={0} onClick={fab.onClick}><Fab.Icon iconName={fab.iconName} size={24} /></Fab>)}
		</BottomAppBarStl >
	);
};

const BottomAppBarIcons = styled.div(() => ({
	display: 'flex',
	columnGap: 16
}));

type BottomAppBarIconProps = Pick<IconProps, 'iconName'> & BaseIconButtonProps
type BottomAppBarFabProps = Pick<IconProps, 'iconName'> & Pick<FabProps, 'onClick'>
const BottomAppBarIconButton = ({ iconName, onClick }: BottomAppBarIconProps) => (
	<IconButton variant='standard' onClick={onClick}><IconButton.Icon iconName={iconName} size={16} /></IconButton>
);

export const BottomAppBarStl = styled.div<{ hasFAB: boolean }>(
	({ theme, hasFAB }) => ({
		...theme.shape.corner.none,
		backgroundColor: theme.color.surfaceContainer,
		boxShadow: elevation(theme.elevation.level2, theme.color.shadow),
		color: theme.color.surfaceTint,
		height: hasFAB ? 72 : 80,
		width: '100%',
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 12,
		paddingBottom: 12,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	})
);

export default BottomAppBar;
