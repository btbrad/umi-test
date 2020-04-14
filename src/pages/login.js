import React from 'react';
import styles from './login.css';
import { Button } from 'antd'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page login</h1>
      <Button>登录</Button>
    </div>
  );
}
