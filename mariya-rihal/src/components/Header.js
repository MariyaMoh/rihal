import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

const navItems = [
  {
    href: '/AddStudent',
    title: 'Add Student',
  },
  {
    href: '/DeleteStudent',
    title: 'Delete Student',
  },
  {
    href: '/UpdateStudent',
    title: 'Update Student',
  },
  {
    href: '/ListOfStudents',
    title: 'Search Student',
  },
];

export const Header = () => (
  <header className={styles.header}>
    <motion.h1
      transition={{ type: 'spring', velocity: 10, stiffness: 30 }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className={styles.pageTitle}
    >
      <Link to="/">StudentWEB</Link>
    </motion.h1>
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <motion.span
          key={item.title}
          transition={{
            type: 'spring',
            velocity: 100,
            stiffness: 30,
          }}
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
        >
          <Link to={item.href} className={styles.navLink}>
            {item.title}
          </Link>
        </motion.span>
      ))}
    </nav>
  </header>
);
