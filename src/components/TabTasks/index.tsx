import React from 'react';

import Task from '../Task';

import styles from './index.module.scss';

export interface TaskInterface {
  id: number | string;
  nameTask: string ;
  completed: boolean;
}

type TabTasksProps = {
  positionChild?: string | undefined;
  children?: React.ReactNode;
  tasks: TaskInterface[];
  onDeleteTask: Function;
  onCheckTask: Function;
  onDeleteAllTasks?: Function;
}

const TabTasks: React.FC<TabTasksProps> = ({ children, tasks, onDeleteTask, onCheckTask, onDeleteAllTasks, positionChild = 'top' }) => {

  const deleteTask = (idTask: number | string) => onDeleteTask(idTask);
  const checkTask = (idTask: number | string) => onCheckTask(idTask);
  
  return (
    <div className={styles.containerTabTask}>
      { positionChild === 'top' && children }
      { tasks.map(({ id, nameTask, completed }) => (
        <Task key={id} id={id} name={nameTask} completed={completed} onClickDelete={deleteTask} onChangeCheked={checkTask} />
       ))}
      { positionChild === 'bottom' && tasks.length >= 1 && children }
     </div>
  );
};

export default TabTasks;
