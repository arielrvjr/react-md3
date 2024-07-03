import type { Meta, StoryObj } from "@storybook/react"
import SuggestionChip from "./SuggestionChip"

const meta = {
    title: 'Chips/SuggestionChip',
    component: SuggestionChip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
} satisfies Meta<typeof SuggestionChip>;

export default meta;

type Story = StoryObj<typeof SuggestionChip>;

export const Default = {
    args: {
        label: 'Suggestion chip'
    },
} satisfies Story;

export const DefaultWidthIcon = {
    args: {
        iconName: 'car_crash',
        label: 'Suggestion chip'
    },
} satisfies Story;

export const Elevated = {
    args: {
        elevated: true,
        label: 'Suggestion chip'
    },
} satisfies Story;

export const ElevatedWidthIcon = {
    args: {
        elevated: true,
        iconName: 'car_crash',
        label: 'Suggestion chip'
    },
} satisfies Story;