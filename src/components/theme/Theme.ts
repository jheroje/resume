enum Theme {
  LIGHT = 'light',
  NAVY = 'navy',
  DARK = 'dark',
}

export type ThemeProps = {
  current: Theme;
  next: Theme;
  icon: string;
  colors: {
    primary: string;
  };
};

export type ThemeInfo = {
  [key: string]: ThemeProps;
};

export const Themes: ThemeInfo = {
  [Theme.LIGHT]: {
    current: Theme.LIGHT,
    next: Theme.NAVY,
    icon: '🌘',
    colors: {
      primary: '#20c997',
    },
  },
  [Theme.NAVY]: {
    current: Theme.NAVY,
    next: Theme.DARK,
    icon: '🌗',
    colors: {
      primary: '#ffcc66',
    },
  },
  [Theme.DARK]: {
    current: Theme.DARK,
    next: Theme.LIGHT,
    icon: '🌖',
    colors: {
      primary: '#6a4ddf',
    },
  },
};

export default Theme;
