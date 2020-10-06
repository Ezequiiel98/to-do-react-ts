import React, { useState } from 'react';

import Button from '../Button';

import styles from './index.module.scss';

type FormAddTaskProps = {
  onAddNewTask: Function; 
};

const FormAddTask: React.FC<FormAddTaskProps> = ({ onAddNewTask }) => {
  const [nameTask, setNameTask] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameTask(e.target.value);
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddNewTask && nameTask.trim() !== '') {
      const newTask = { id: new Date().getTime(), nameTask, completed: false };
      onAddNewTask(newTask);
      setNameTask('');
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error && <p className={styles.errorMessage}>Name task is required</p>}
      <form className={styles.formAddTask} onSubmit={handleSubmit}>
        <input 
          placeholder="Add task..."
          className={error ? styles.inputError : styles.inputTask}
          type="text" value={nameTask}
          onChange={handleChange}
        />
        <Button {...{ type: 'submit' }} primary>
          Add
        </Button>
      </form>
    </>
  );
};

export default FormAddTask;
