import type { Meta, StoryObj } from "@storybook/react"
import Typography from "./Typography"

const meta = {
    title: 'Typography',
    component: Typography,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default = {
    args: {
        children: 'Hello React Material 3',
        variant: 'body',
        size: 'large'
    },
} satisfies Story;
