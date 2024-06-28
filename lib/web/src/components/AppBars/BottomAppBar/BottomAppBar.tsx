"use client";
import React, { PropsWithChildren, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { elevation } from '../../../function';
import Fab, { FabProps } from '../../Fab/Fab';
import IconButton, { IconButtonProps } from '../../IconButton/IconButton';

export type BottomAppBarProps = {
	// types...
}

type ContextProps = {
	hasFAB: boolean,
	updateFAB: (hasFAB: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const BottomAppBarContext = React.createContext<ContextProps>({ hasFAB: false, updateFAB: () => { } });

const BottomAppBar = ({ children }: PropsWithChildren<BottomAppBarProps>) => {
	const [hasFAB, setHasFAB] = React.useState(false);
	const updateFAB = (hasFAB: boolean) => setHasFAB(hasFAB);
	return (
		<BottomAppBarContext.Provider value={{ hasFAB, updateFAB }}>
			<BottomAppBarStl hasFAB={hasFAB}>
				{children}
			</BottomAppBarStl>
		</BottomAppBarContext.Provider>
	);
};

const BottomAppBarFAB = ({ ...args }: PropsWithChildren<FabProps>) => {
	const { updateFAB } = useContext(BottomAppBarContext);
	useEffect(() => updateFAB(true), [updateFAB]);
	return <Fab {...args} elevation={0} />
}
const BottomAppBarIcons = ({ children }: PropsWithChildren) => (<div>{children}</div>);
const BottomAppBarIcon = ({ ...args }: PropsWithChildren<IconButtonProps>) => (<IconButton {...args} />)


export const BottomAppBarStl = styled.div<{ hasFAB: boolean }>(({ theme, hasFAB }) => ({
	...theme.shape.corner.none,
	backgroundColor: theme.color.surfaceContainer,
	boxShadow: elevation(theme.elevation.level2, theme.color.shadow),
	color: theme.color.surfaceTint,
	height: hasFAB ? 72 : 80,
	padding: '12px 16px 12px 4px',
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between'
}));
BottomAppBar.Icons = BottomAppBarIcons;
BottomAppBar.Icon = BottomAppBarIcon;
BottomAppBar.FAB = BottomAppBarFAB;
export default BottomAppBar;
