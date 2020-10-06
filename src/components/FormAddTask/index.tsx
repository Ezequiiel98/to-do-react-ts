import React, { useState } from 'react';

import Button from '../Button';

import styles from './index.module.scss';

type FormAddTaskProps = {
  onSubmit?(e: React.FormEvent): void; 
};

const FormAddTask: React.FC<FormAddTaskProps> = ({ onSubmit }) => {
  return (
    <form className={styles.formAddTask} onSubmit={onSubmit}>
      <input placeholder="Add task..." className={styles.inputTask} type="text" />
      <Button {...{ type: 'submit' }} primary>
        Add
      </Button>
    </form>
  );
};

export default FormAddTask;
