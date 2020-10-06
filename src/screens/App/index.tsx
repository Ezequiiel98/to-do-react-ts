import React from 'react';

import NavTabs from '../../components/NavTabs';
import Button from '../../components/Button';
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

      <Task name="pepe" id={2} onClick={(i: number) => console.log(i)}/>
      </div>
  </div>
);

export default App;
