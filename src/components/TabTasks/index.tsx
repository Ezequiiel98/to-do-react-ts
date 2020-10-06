import React from 'react';

import Task from '../Task';

import styles from './index.module.scss';

type TabTasksProps = {
  positionChild?: string | undefined;
  children?: React.ReactNode;
}

const TabTasks: React.FC<TabTasksProps> = ({ children, positionChild = 'top' }) => {

  return (
    <div>
      { positionChild === 'top' && children }
      <Task id="1" name="pepe" onClick={ (i: number | string) => console.log(i) } />
      { positionChild === 'bottom' && children }
    </div>
  );
};

export default TabTasks;
