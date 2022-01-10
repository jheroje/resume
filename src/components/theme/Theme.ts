enum Theme {
  LIGHT = 'light',
  NAVY = 'navy',
  DARK = 'dark',
}

export const ThemeInfo = {
  [Theme.LIGHT]: {
    next: Theme.NAVY,
    icon: '🌘',
  },
  [Theme.NAVY]: {
    next: Theme.DARK,
    icon: '🌗',
  },
  [Theme.DARK]: {
    next: Theme.LIGHT,
    icon: '🌖',
  },
};

export default Theme;
