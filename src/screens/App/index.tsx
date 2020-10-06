import React from 'react';

import NavTabs from '../../components/NavTabs';
import Button from '../../components/Button';
import Task from '../../components/Task';
import TabTasks from '../../components/TabTasks';
import FormAddTask from '../../components/FormAddTask';

import styles from './index.module.scss';

const App: React.FC = () => (
  <div className={styles.containerApp}>
    <div>
      <header>
        <h1 className={styles.titleApp}>#todo</h1>
      </header>
      <NavTabs />
      <TabTasks />
      <TabTasks>
        <FormAddTask />
      </TabTasks>
      <TabTasks positionChild="bottom">
        <Button position="right" danger>
          Delete All
        </Button>
        
      </TabTasks>

      </div>
  </div>
);

export default App;
