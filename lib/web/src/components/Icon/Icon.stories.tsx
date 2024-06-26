import type { Meta, StoryObj } from "@storybook/react"
import Icon from "./Icon"

const meta = {
    title: 'Icon',
    component: Icon,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
