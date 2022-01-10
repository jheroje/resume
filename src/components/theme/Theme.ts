enum Theme {
  LIGHT = 'light',
  NAVY = 'navy',
  DARK = 'dark',
}

export type ThemeProps = {
  current: Theme;
  next: Theme;
  icon: string;
};

export type ThemeInfo = {
  [key: string]: ThemeProps;
};

export const Themes: ThemeInfo = {
  [Theme.LIGHT]: {
    current: Theme.LIGHT,
    next: Theme.NAVY,
    icon: '🌘',
  },
  [Theme.NAVY]: {
    current: Theme.NAVY,
    next: Theme.DARK,
    icon: '🌗',
  },
  [Theme.DARK]: {
    current: Theme.DARK,
    next: Theme.LIGHT,
    icon: '🌖',
  },
};

export default Theme;
