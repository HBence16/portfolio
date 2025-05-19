export const navLinks = [
  {
    id: 1,
    name: 'Kezdőlap',
    href: '#home',
  },
  {
    id: 2,
    name: 'Magamról',
    href: '#about',
  },
  {
    id: 3,
    name: 'Készségeim',
    href: '#work',
  },
  {
    id: 4,
    name: 'Elérhetőség',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Lucky Limits',
    desc: 'Online kaszinó szimulátor',
    subdesc:
      'Egy 3d-s térben megalkotott játékelosztó amit PlayCanvas webengine segítségével készült, a kaszinójátékokat reactban kódoltam.',
    texture: '/textures/project/luckylimits.mp4',
    logo: '/assets/casinoicon.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    
  },
  {
    title: 'Harry Potter The Death Eaters Attack',
    desc: 'Túlélő játék',
    subdesc:
      'Harry Potter világában játszódó túlélőjáték, ahol egyenkent jönnek a főellenségek, ha ők meghalnak új varázsige birtokába kerül a játékos. Gui-s javaban íródott',
    texture: '/textures/project/hp.mp4',
    logo: '/assets/hp.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    
  }

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    htmlLogoPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    javaLogoPosition: isSmall ? [-3, 4, 0] : isMobile ? [-5, 4, 0] : isTablet ? [-5, 4, 0] : [-12, 3, 0],
    tailwindLogoPosition: isSmall ? [-1, 5, 0] : isMobile ? [-1, 5, 0] : isTablet ? [-1, 6, 0] : [-8, 6, 0],
    jsLogoPosition: isSmall ? [-4, -5, -0] : isMobile ? [-5, -5, 0] : isTablet ? [-5, -5, 0] : [-9, -5,5, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Tanulékonyság',
    title:'Szeretek új dolgokkal kisérletezni, fejleszteni a tudásom. Sok programozási nyelvet, új módszereket önerőből is tanulok.',
  },
  {
    id: 2,
    name: 'Kreativitás',
    title: "Gyakran építek bele a projekteimbe kreatív, vizuálisan megfogó elemekket. Nekem a program funkciója mellett fontos szerepet játszik a kinézete is.",
  },
  {
    id: 3,
    name: 'Csapatjátékos',
    title: "Gyakran fejlesztek csapatban. Szeretek másokkal együtt dolgozni – közösen ötletelni, feladatokat megosztani és egymást segítve elérni a közös célt. Hiszek abban, hogy egy jó csapatban nem csak a munka halad gyorsabban, de sokkal inspirálóbb is",
  },
  {
  id: 4,
  name: 'Precizitás',
  title: 'Ügyelek a részletekre – legyen szó kódról, dizájnról vagy funkciókról. A hibakeresést és a finomhangolást is komolyan veszem.',
},
{
  id: 5,
  name: 'Problémamegoldás',
  title: 'Szeretek kihívásokkal szembenézni, és hatékony megoldásokat találni komplex problémákra is. A hiba nem akadály, hanem lehetőség.',
},
];
