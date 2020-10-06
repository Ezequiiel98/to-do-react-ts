import React from 'react';

import NavTabs from '../../components/NavTabs';

import styles from './index.module.scss';

const App: React.FC = () => (
  <div className={styles.containerApp}>
    <header>
      <h1 className={styles.titleApp}>#todo</h1>
    </header>
    <NavTabs />
  </div>
);

export default App;
