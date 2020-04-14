import React from 'react';
import styles from './NotFound.css';

export default ({location}) => {
  return (
    <div>
      <h1 className={styles.title}>Page NotFound</h1>
      <div>{location.pathname} 未找到</div>
    </div>
  );
}
