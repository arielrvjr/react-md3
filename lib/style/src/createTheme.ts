import { DEFAULT_PALETTE, elevation, shape, state, typeScale } from './content';
import { createDarkTheme, createLightTheme } from './theme';
import { ThemeType, PaletteType, ThemeModeType, ColorThemeType } from './types';

export type createThemeProps = {
  mode?: ThemeModeType;
  theme?: ThemeType;
  palette?: PaletteType;
};

export const createThemes = (palette = DEFAULT_PALETTE) => {
  const darkTheme = createDarkTheme(palette);
  const lightTheme = createLightTheme(palette);
  return { dark: darkTheme, light: lightTheme };
};

export const createTheme = ({
  mode = 'light',
  palette = DEFAULT_PALETTE,
}: createThemeProps): ThemeType => {
  const themes = createThemes(palette);
  return {
    mode,
    elevation,
    shape,
    state,
    typeScale,
    ...themes[mode],
  };
};
