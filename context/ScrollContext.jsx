'use client'

import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext({
  isScrollSectionActive: false,
  setIsScrollSectionActive: () => {},
});

export function ScrollProvider({ children }) {
  const [isScrollSectionActive, setIsScrollSectionActive] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrollSectionActive, setIsScrollSectionActive }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}