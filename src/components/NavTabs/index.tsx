import React, { useState } from 'react';
import styles from './index.module.scss';

type NavTabsProps = {
  setTabShow: Function;
}

const NavTabs: React.FC<NavTabsProps> = ({ setTabShow }) => {
  const [left, setLeft] = useState<number | undefined>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string) => {
    const { offsetLeft } = e.target as HTMLElement;
    setLeft(offsetLeft);
    setTabShow(name);
  };

  return (
    <nav className={styles.navTabs}>
      <button className={styles.nameTab} type="button" onClick={e => handleClick(e, 'all')}>
        All
      </button>
      <button className={styles.nameTab} type="button" onClick={e => handleClick(e, 'active')}>
        Active
      </button>
      <button className={styles.nameTab} type="button" onClick={e => handleClick(e, 'completed')}>
        Completed
      </button>
      <span className={styles.navMarker} style={{ left: `${left}px` }} />
    </nav>
  );
};

export default NavTabs;
