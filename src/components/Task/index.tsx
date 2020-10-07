import React from 'react';

import iconDelete from  '../../assets/icons/delete.svg';
import Button from '../Button';

import styles from './index.module.scss';

type TaskProps = {
  name: string;
  id: string | number;
  completed: boolean;
  onClickDelete: Function;
  onChangeCheked: Function;
}

const Task: React.FC<TaskProps> = ({ name, id, completed, onClickDelete, onChangeCheked}) => (
  <div className={styles.task}> 
    <input type="checkbox" className={styles.check} onChange={() => onChangeCheked(id)} checked={completed}/>
    <p>{name}</p>
    <Button onClick={() => onClickDelete(id)}>
      <img src={iconDelete} className={styles.iconTrash} alt="Delete, icon trash" />
    </Button>
  </div>
);

export default Task;
