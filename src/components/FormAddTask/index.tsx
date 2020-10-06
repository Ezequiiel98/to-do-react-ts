import React from 'react';

import styles from './index.module.scss';

const FormAddTask: React.FC = () => (
  <form className={styles.formAddTask}>
    <input placeholder="Add task..." className={styles.inputTask} type="text" />
    <button className={styles.buttonAdd} type="submit">Add</button>
  </form>
);

export default FormAddTask;
