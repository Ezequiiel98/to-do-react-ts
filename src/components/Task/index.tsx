import React from 'react';

import styles from './index.module.scss';

const Task: React.FC = () => (
  <div className={styles.task}>
    <input type="checkbox" className={styles.check} />
    <p>Taskarea 1</p>
    <button type="button" className={styles.buttonDelete}>d</button>
  </div>
);

export default Task;
