import { PropsWithChildren, useMemo } from 'react';
import { ThemeType, createTheme, createThemeProps } from '@react-md3/style';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
const DEFAULT_THEME = 'light';

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}

const ThemeProvider = ({
  mode = DEFAULT_THEME,
  theme,
  palette,
  children,
}: PropsWithChildren<createThemeProps>) => {
  const internalTheme = useMemo(
    () => createTheme({ mode, palette }),
    [mode, palette]
  );
  const themeMemo = useMemo(() => ({ ...internalTheme, ...theme }), [internalTheme, theme]);

  return (
    <ThemeProviderStyled theme={themeMemo}>{children}</ThemeProviderStyled>
  );
};

export default ThemeProvider;
