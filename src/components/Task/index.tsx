import React from 'react';

import iconDelete from  '../../assets/icons/delete.svg';
import Button from '../Button';

import styles from './index.module.scss';

type TaskProps = {
  name: string;
  id: string | number;
  onClick: Function;
}

const Task: React.FC<TaskProps> = ({ name, id, onClick }) => (
  <div className={styles.task}>
    <input type="checkbox" className={styles.check} />
    <p>{name}</p>
    <Button onClick={ () => onClick(id)}>
      <img src={iconDelete} className={styles.iconTrash} alt="Delete, icon trash" />
    </Button>
  </div>
);

export default Task;
