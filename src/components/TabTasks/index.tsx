import React from 'react';
import PropTypes from 'prop-types';

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

const TabTasks: React.FC<TabTasksProps> = ({ children, tasks, onDeleteTask, onCheckTask, onDeleteAllTasks, positionChild }) => {

  const deleteTask = (idTask: number | string) => onDeleteTask(idTask);
  const checkTask = (idTask: number | string) => onCheckTask(idTask);
 
  return (
    <div className={styles.containerTabTask}>
      { positionChild === 'top' && children }
      { tasks.map(({ id, nameTask, completed }) => (
        <Task
          key={id}
          id={id}
          name={nameTask}
          completed={completed}
          onClickDelete={deleteTask}
          onChangeCheked={checkTask}
        />
      ))}
      { positionChild === 'bottom' && tasks.length >= 1 && children }
    </div>
  );
};

TabTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCheckTask: PropTypes.func.isRequired,
  onDeleteAllTasks: PropTypes.func,
  positionChild: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node,
};

TabTasks.defaultProps = {
  onDeleteAllTasks: () => {},
  children: '',
  positionChild: 'top',
};

export default TabTasks;
