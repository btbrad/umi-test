export default {
  routes: [
    {
      path: "/about",
      exact: true,
      component: 'about',
      Routes: ['components/PrivateRoute']
    },
    {
      path: "/",
      exact: true,
      component: 'index'
    },
    {
      path: "/goods",
      exact: true,
      component: 'goods'
    },
    {
      path: "/login",
      exact: true,
      component: 'login'
    },
    {
      path: "/users",
      "routes": [
        {
          path: "/users/:id",
          exact: true,
          component: './users/$id'
        },
        {
          path: "/users",
          exact: true,
          component: './users/index'
        }
      ],
      component: './users/_layout'
    },
    {
      component: 'NotFound'
    }
  ]
}
