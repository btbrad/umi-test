import React, { useEffect } from 'react';
import { Button, Card } from 'antd'
import styles from './goods.css';
import { connect } from 'dva'

export default connect(
  state => ({
    loading: state.loading,
    goodsList: state.goods
  }),
  {
    addGoods: (title) => ({
      type: 'goods/addGoods',
      payload: {
        title
      } 
    }),
    getList: () => ({
      type: 'goods/getList'
    })
  }
)(({ goodsList, addGoods, getList, loading }) => {

  useEffect(()=> {
    getList()
  }, [])
  return (
    <div>
      <h1 className={styles.title}>Page goods</h1>
      {loading.models.goods && <h1>LOADING...</h1>}
      { goodsList && goodsList.map((goods, index) => (
        <Card key={index}>{goods.title}</Card>
      )) }
      <Button type="primary" onClick={() => addGoods('商品'+new Date().toLocaleTimeString())}>添加</Button>
    </div>
  );
})
