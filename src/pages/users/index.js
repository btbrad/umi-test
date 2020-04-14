import React from 'react';
import styles from './index.css';

import {Link, history} from 'umi'

export default () => {

  // 模拟数据
  const users = [
    {
      id: 1,
      name: 'tom'
    },
    {
      id: 2,
      name: 'jerry'
    }
  ]

  console.log('........')

  return (
    <div>
      <h1 className={styles.title}>Page users/index</h1>
      <h1>用户列表</h1>
      <ul>
        {
          users.map(item => (
            // 声明式
            // <li key={item.id}>
            //   <Link to={`/users/${item.id}`}>{item.name}</Link>
            // </li>
            // 命令式
            <li key={item.id} onClick={() => history.push(`/users/${item.id}`)}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
