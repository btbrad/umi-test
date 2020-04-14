import React from 'react';
import styles from './users.css';

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page /users/</h1>
      <p>用户id: {props.match.params.id}</p>
    </div>
  );
}
