import { Redirect } from 'umi'

export default (props) => {
  // 50%的概率要去登录页面
  const rate = Math.random()
  console.log(rate)
  if (rate > 0.5) {
    return <Redirect to={`/login`} />
  }

  return (
    <div>
      <div>PrivateRoute (routes/PrivateRoute.js)</div>
      {prop.children}
    </div>
  )

}
