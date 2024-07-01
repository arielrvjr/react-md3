import type { Meta, StoryObj } from '@storybook/react';
import BottomAppBar from './BottomAppBar';
import styled from 'styled-components';
import { Fab } from '../../Fab';
import { fn } from '@storybook/test';
import { Icon } from '../../Icon';
const StyledDiv = styled.div(({ theme }) => ({
  backgroundColor: theme.color.background,
  display: 'flex',
  flexGrow: '1',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vh',
}));

const meta = {
  title: 'AppBar/BottomAppBar',
  component: BottomAppBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: ({ ...args }) => (
    <StyledDiv>
      <BottomAppBar {...args} />
    </StyledDiv>
  ),
} satisfies Meta<typeof BottomAppBar>;

export default meta;

type Story = StoryObj<typeof BottomAppBar>;

export const Default = {
  args: {
    icons: [
      { iconName: 'edit', onClick: fn() },
      { iconName: 'mic', onClick: fn() },
    ],
  },
} satisfies Story;

export const withFab = {
  args: {
    icons: [
      { iconName: 'edit', onClick: fn() },
      { iconName: 'mic', onClick: fn() },
    ],
    fab: { iconName: 'add', onClick: fn() }
  },

} satisfies Story;
