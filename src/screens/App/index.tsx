import React, { useState, useEffect } from 'react';

import NavTabs from '../../components/NavTabs';
import Button from '../../components/Button';
import Task from '../../components/Task';
import TabTasks, { TaskInterface } from '../../components/TabTasks';
import FormAddTask from '../../components/FormAddTask';

import styles from './index.module.scss';


const ALL_TASKS = localStorage.getItem('ALL_TASKS');
const initState: TaskInterface[] = ALL_TASKS ? JSON.parse(ALL_TASKS) : [];

const App: React.FC = () => {
  const [tabShow, setTabShow] = useState<string>('all');
  const [allTasks, setAllTasks] = useState<TaskInterface[] | []>(initState);
  const completedTask: TaskInterface[] = allTasks.filter((task) => task?.completed);
  const activeTasks: TaskInterface[] = allTasks.filter((task) => !task?.completed);

  const handleAddNewTask = (newTask: TaskInterface) => {
    setAllTasks((tasks) => [...tasks, newTask]);
  };

  const handleDeleteTask = (id: number | string) => {
    const tasks = allTasks.filter((task) => task.id !== id);
    setAllTasks(tasks);
  };

  const handleCheckTask = (id: number | string) => {
    const tasks = (allTasks as TaskInterface[]).map((task) => {
      if (task.id === id) {
        return ({ ...task, completed: !task.completed });
      }

      return task;
    });

    setAllTasks(tasks);
  };

  const handleDeleteCompleteTasks = () => {
    setAllTasks(activeTasks);
  };
 
  useEffect(() => {
    const saveTasks = () => {
      localStorage.setItem('ALL_TASKS', JSON.stringify(allTasks));
    };

    saveTasks();
  }, [allTasks]);

  return (
    <div className={styles.containerApp}>
      <div>
        <header>
          <h1 className={styles.titleApp}>#ToDo</h1>
        </header>
        <NavTabs setTabShow={setTabShow} />
        { tabShow === 'all' && (
          <TabTasks tasks={allTasks} onCheckTask={handleCheckTask} onDeleteTask={handleDeleteTask}>
            <FormAddTask onAddNewTask={handleAddNewTask} />
          </TabTasks>
        )}
        { tabShow === 'active' && (
          <TabTasks
            tasks={activeTasks}
            onCheckTask={handleCheckTask}
            onDeleteTask={handleDeleteTask}
          >
            <FormAddTask onAddNewTask={handleAddNewTask} />
          </TabTasks>
        )}
        { tabShow === 'completed' && (
          <TabTasks
            positionChild="bottom"
            tasks={completedTask}
            onCheckTask={handleCheckTask}
            onDeleteTask={handleDeleteTask}
          >
            {completedTask.length >= 1 && (<Button position="right" onClick={handleDeleteCompleteTasks} danger>
                Delete All
              </Button>
            )}
          </TabTasks>
        )}
      </div>
    </div>
  );
};

export default App;
