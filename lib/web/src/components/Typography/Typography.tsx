"use client";
import React, { PropsWithChildren } from 'react';
import { ColorPaletteType, TypeScaleScaleType, TypeScaleType } from '@react-md3/style';
import styled from 'styled-components';


export type TypographyProps = {
	variant: keyof TypeScaleType,
	size: keyof TypeScaleScaleType,
	color?: keyof ColorPaletteType
}

const Typography = ({ children, ...props }: PropsWithChildren<TypographyProps>) => {
	return (
		<TypographyStl {...props}>
			{children}
		</TypographyStl>
	);
};

export const TypographyStl = styled.span<TypographyProps>(({ theme, variant, size, color }) => ({
	fontFamily: theme.typeScale[variant][size].fontFamily,
	lineHeight: `${theme.typeScale[variant][size].lineHeight}px`,
	fontSize: theme.typeScale[variant][size].fontSize,
	fontWeight: theme.typeScale[variant][size].fontWeight,
	letterSpacing: theme.typeScale[variant][size].letterSpacing,
	...(color && { color: theme.color[color] })
}));

export default Typography;
