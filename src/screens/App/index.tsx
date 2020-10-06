import React, { useState } from 'react';

import NavTabs from '../../components/NavTabs';
import Button from '../../components/Button';
import Task from '../../components/Task';
import TabTasks from '../../components/TabTasks';
import FormAddTask from '../../components/FormAddTask';

import styles from './index.module.scss';

interface TaskInterface {
  id: number | string | undefined;
  name: string | undefined;
  completed: boolean | undefined;
}

const App: React.FC = () => {
  const [tabShow, setTabShow] = useState<string>('all');
  const [allTasks, setAllTasks] = useState<TaskInterface[] | []>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className={styles.containerApp}>
      <div>
        <header>
          <h1 className={styles.titleApp}>#todo</h1>
        </header>
        <NavTabs  setTabShow={setTabShow} />
        { tabShow === 'all' && (
          <TabTasks>
            <FormAddTask onSubmit={handleSubmit} />
          </TabTasks>
        )}
        { tabShow === 'active' && (
          <TabTasks>
            <FormAddTask onSubmit={handleSubmit} />
          </TabTasks>
        )}
        { tabShow === 'completed' && (
          <TabTasks positionChild="bottom">
            <Button position="right" danger>
              Delete All
            </Button>
          </TabTasks>
        )}
      </div>
    </div>
  );
};

export default App;
