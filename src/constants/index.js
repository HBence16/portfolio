export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    htmlLogoPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    javaLogoPosition: isSmall ? [-3, 4, 0] : isMobile ? [-5, 4, 0] : isTablet ? [-5, 4, 0] : [-12, 3, 0],
    tailwindLogoPosition: isSmall ? [-1, 5, 0] : isMobile ? [-1, 5, 0] : isTablet ? [-1, 6, 0] : [-8, 6, 0],
    jsLogoPosition: isSmall ? [-4, -5, 0] : isMobile ? [-5, -5, 0] : isTablet ? [-5, -5, 0] : [-9, -5.5, 0],
  };
};
export const myProjects = [
  {
    key: 'luckylimits',
    link: 'https://github.com/BeteriGabor/Vizsgaremek',
    texture: import.meta.env.BASE_URL + '/textures/project/luckylimits.mp4',
    logo: import.meta.env.BASE_URL + '/assets/casinoicon.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: import.meta.env.BASE_URL + '/assets/spotlight1.png',
  },
  {
    key: 'harrypotter',
    link: 'https://github.com/HBence16/HarryPotterDeathEatersAttack',
    texture: import.meta.env.BASE_URL + '/textures/project/hp.mp4',
    logo: import.meta.env.BASE_URL + '/assets/hp.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: import.meta.env.BASE_URL + '/assets/spotlight1.png',
  }
];

export const workExperiences = [
  { key: '0' },
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '4' }
];
export const navLinks = [
  { id: 1, nameKey: 'nav.home', href: '#home' },
  { id: 2, nameKey: 'nav.about', href: '#about' },
  { id: 3, nameKey: 'nav.work', href: '#work' },
  { id: 4, nameKey: 'nav.contact', href: '#contact' },
];
