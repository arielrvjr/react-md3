import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./Badge"

const meta = {
    title: 'Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default = {
    args: {
        size: 'small'
    },
} satisfies Story;

export const Large = {
    args: {
        size: 'large',
        label: '1'
    },
} satisfies Story;

export const LargeLongLabrl = {
    args: {
        size: 'large',
        label: '999+'
    },
} satisfies Story;