"use client";
import React from 'react';
import styled from 'styled-components';

export type CarouselProps = {
	// types...
}

const Carousel: React.FC<CarouselProps> = ({ }) => {
	return (
		<CarouselStl>
			Carousel works!
		</CarouselStl>
	);
};

export const CarouselStl = styled.div(() => ({

}));

export default Carousel;
