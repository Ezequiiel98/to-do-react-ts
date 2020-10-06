import React, { useState } from 'react';
import styles from './index.module.scss';

const NavTabs: React.FC = () => {
  const [left, setLeft] = useState<number | undefined>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { offsetLeft } = e.target as HTMLElement;
    setLeft(offsetLeft);
  };

  return (
    <nav className={styles.navTabs}>
      <button className={styles.nameTab} type="button" onClick={handleClick}>
        All
      </button>
      <button className={styles.nameTab} type="button" onClick={handleClick}>
        Active
      </button>
      <button className={styles.nameTab} type="button" onClick={handleClick}>
        Completed
      </button>
      <span className={styles.navMarker} style={{ left: `${left}px` }} />
    </nav>
  );
};

export default NavTabs;
