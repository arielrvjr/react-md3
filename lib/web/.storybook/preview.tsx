import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createThemes } from '@react-md3/style';
import { createGlobalStyle } from 'styled-components';
import { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/provider';

const themes = createThemes();

const GlobalStyles = createGlobalStyle(({ theme }) => ({
  backgroundColor: theme.color.background,
}));

export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        { name: 'light', value: themes.light.color.background },
        { name: 'dark', value: themes.dark.color.background },
      ],
    },
  },
};

export default preview;
