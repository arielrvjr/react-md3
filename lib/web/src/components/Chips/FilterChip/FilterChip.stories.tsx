import type { Meta, StoryObj } from "@storybook/react"
import FilterChip from "./FilterChip"

const meta = {
    title: 'Chips/FilterChip',
    component: FilterChip,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof FilterChip>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
