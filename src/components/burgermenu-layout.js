import React from 'react';
import { useLocation } from 'react-router-dom';
import BurgerMenu from './burgermenu';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const excludedPaths = ['/login', '/registration', '/']; // Pfade, auf denen das Menü nicht angezeigt wird

  const shouldShowMenu = !excludedPaths.includes(pathname);

  return (
    <div>
      {shouldShowMenu && <BurgerMenu />} {/* Anzeige des Burgermenüs basierend auf dem aktuellen Pfad */}
      {children}
    </div>
  );
};

export default Layout;
