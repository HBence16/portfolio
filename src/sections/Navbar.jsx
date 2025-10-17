import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => {
  const { t } = useTranslation();

  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={onClick}>
            {t(item.nameKey)}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto flex justify-end items-center py-5 c-space">
        {/* Desktop menu */}
        <nav className="sm:flex hidden">
          <NavItems />
          <button
            onClick={() => changeLanguage(i18n.language === 'hu' ? 'en' : 'hu')}
            className="ml-4 w-8 h-8 rounded-full flex items-center justify-center text-lg  text-neutral-400"
            aria-label="Toggle language"
          >
            {i18n.language === 'hu' ? '🇭🇺' : '🇬🇧'}
          </button>
        </nav>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex text-neutral-400 hover:text-white ml-4"
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? import.meta.env.BASE_URL + 'assets/close.svg' : import.meta.env.BASE_URL + 'assets/menu.svg'}
            alt="toggle"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`nav-sidebar transition-max-h duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5 flex flex-col gap-3">
          <NavItems onClick={closeMenu} />
          <button
            onClick={() => changeLanguage(i18n.language === 'hu' ? 'en' : 'hu')}
            className="w-8 h-8 rounded-full flex items-center justify-center text-lg mt-3  text-neutral-400"
          >
            {i18n.language === 'hu' ? '🇭🇺' : '🇬🇧'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
