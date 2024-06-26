import type { Meta, StoryObj } from "@storybook/react"
import IconButton from "./IconButton"

const meta = {
    title: 'IconButton',
    component: IconButton,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
