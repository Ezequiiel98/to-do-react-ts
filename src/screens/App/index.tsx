import React from 'react';

import NavTabs from '../../components/NavTabs';
import Task from '../../components/Task';
import FormAddTask from '../../components/FormAddTask';

import styles from './index.module.scss';

const App: React.FC = () => (
  <div className={styles.containerApp}>
    <div>
      <header>
        <h1 className={styles.titleApp}>#todo</h1>
      </header>
      <NavTabs />
        <FormAddTask />
         <Task />
      </div>
  </div>
);

export default App;
