import React from 'react';

import Button from '../Button';

import styles from './index.module.scss';

const FormAddTask: React.FC = () => (
  <form className={styles.formAddTask}>
    <input placeholder="Add task..." className={styles.inputTask} type="text" />
    <Button primary>
      Add
    </Button>
  </form>
);

export default FormAddTask;
