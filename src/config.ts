export interface SocialLink {
  icon: string;
  name: string;
  url: string;
}

export interface Tab {
  content: string;
  href: string;
}

export interface Config {
  siteTitle: string;
  manifestName: string;
  manifestShortName: string;
  manifestStartUrl: string;
  manifestBackgroundColor: string;
  manifestThemeColor: string;
  manifestDisplay: string;
  manifestIcon: string;
  pathPrefix: string;
  firstName: string;
  lastName: string;
  socialLinks: SocialLink[];
  tabs: Tab[];
  email: string;
  address: string;
}

const config: Config = {
  siteTitle: 'Javier Hernandez Ojeda', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#1cb386',
  manifestThemeColor: '#1cb386',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: '/resume/', // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Javier',
  lastName: 'Hernandez Ojeda',
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/jheroje',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/javier-hernandez-ojeda-1932abb8/',
    },
  ],
  tabs: [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Education', href: 'education' },
    { content: 'Skills', href: 'skills' },
  ],
  email: 'javierho93@gmail.com',
  address: 'Las Palmas de Gran Canaria',
};

export default config;
