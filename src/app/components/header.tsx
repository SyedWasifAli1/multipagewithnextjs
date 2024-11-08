"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when user clicks outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      // Type assertion to ensure `e.target` exists and is an HTML element
      if (e.target instanceof HTMLElement && !e.target.closest(`.${styles.header}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Sye Wasif Ali</h1>
      
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu} 
        aria-label="Toggle menu">
        ☰
      </button>
    </header>
  );
}
