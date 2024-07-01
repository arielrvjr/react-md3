import type { Meta, StoryObj } from '@storybook/react';
import TopAppBar from './TopAppBar';
import { fn } from '@storybook/test';

const meta = {
  title: 'AppBar/TopAppBar',
  component: TopAppBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} satisfies Meta<typeof TopAppBar>;

export default meta;

type Story = StoryObj<typeof TopAppBar>;

export const CenterVariant = {
  args: {
    leadingIcon: { iconName: 'menu', onClick: fn() },
    headline: 'Center Variant',
    trailingIcons: [
      { iconName: 'account_circle', onClick: fn() },
      { iconName: 'settings', onClick: fn() },
      { iconName: 'more_vert', onClick: fn() }

    ],

  },

} satisfies Story;

export const SmallVariant = {
  args: {
    variant: 'small',
    leadingIcon: { iconName: 'menu', onClick: fn() },
    headline: 'Small Variant',
    trailingIcons: [
      { iconName: 'account_circle', onClick: fn() },
      { iconName: 'settings', onClick: fn() },
      { iconName: 'more_vert', onClick: fn() }

    ],

  },

} satisfies Story;

export const MediumVariant = {
  args: {
    variant: 'medium',
    leadingIcon: { iconName: 'arrow_back', onClick: fn() },
    headline: 'Medium Variant',
    trailingIcons: [
      { iconName: 'account_circle', onClick: fn() },
      { iconName: 'settings', onClick: fn() },
      { iconName: 'more_vert', onClick: fn() }

    ],
  },

} satisfies Story;


export const LargeVariant = {
  args: {
    variant: 'large',
    leadingIcon: { iconName: 'arrow_back', onClick: fn() },
    headline: 'Large Variant',
    trailingIcons: [
      { iconName: 'account_circle', onClick: fn() },
      { iconName: 'settings', onClick: fn() },
      { iconName: 'more_vert', onClick: fn() }

    ],
  },

} satisfies Story;