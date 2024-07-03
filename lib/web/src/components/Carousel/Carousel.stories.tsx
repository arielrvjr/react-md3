import type { Meta, StoryObj } from "@storybook/react"
import Carousel from "./Carousel"

const meta = {
    title: 'Carousel',
    component: Carousel,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
