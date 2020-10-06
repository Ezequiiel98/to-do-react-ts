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
}

const TabTasks: React.FC<TabTasksProps> = ({ children, tasks, onDeleteTask, positionChild = 'top' }) => {

  return (
    <div className={styles.containerTabTask}>
      { positionChild === 'top' && children }
      { tasks.map(({ id, nameTask, completed }) => (
        <Task id={id} name={nameTask} onClick={(idTask: number | string) => onDeleteTask(idTask)}/>
       ))}
      { positionChild === 'bottom' && tasks.length >= 1 && children }
     </div>
  );
};

export default TabTasks;
