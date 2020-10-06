import React, { useState } from 'react';

import NavTabs from '../../components/NavTabs';
import Button from '../../components/Button';
import Task from '../../components/Task';
import TabTasks, { TaskInterface } from '../../components/TabTasks';
import FormAddTask from '../../components/FormAddTask';

import styles from './index.module.scss';

const App: React.FC = () => {
  const [tabShow, setTabShow] = useState<string>('all');
  const [allTasks, setAllTasks] = useState<TaskInterface[] | []>([]);
  const completedTask: TaskInterface[]= allTasks.filter(task => task?.completed === true);
  const activeTasks: TaskInterface[] = allTasks.filter(task => task?.completed !== true);

  const handleAddNewTask = (newTask: TaskInterface) => {
    setAllTasks(tasks => [...tasks, newTask])
  }

  return (
    <div className={styles.containerApp}>
      <div>
        <header>
          <h1 className={styles.titleApp}>#todo</h1>
        </header>
        <NavTabs  setTabShow={setTabShow} />
        { tabShow === 'all' && (
          <TabTasks tasks={allTasks} showAllTask>
            <FormAddTask onAddNewTask={handleAddNewTask} />
          </TabTasks>
        )}
        { tabShow === 'active' && (
          <TabTasks tasks={activeTasks} showTaskComplete={false}>
            <FormAddTask onAddNewTask={handleAddNewTask} />
          </TabTasks>
        )}
        { tabShow === 'completed' && (
          <TabTasks positionChild="bottom" tasks={completedTask} showTaskComplete>
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
