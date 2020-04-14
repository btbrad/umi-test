import { ApplyPluginsType } from '/Users/bt/Documents/study/umi-project/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/about",
    "exact": true,
    "component": require('/Users/bt/Documents/study/umi-project/src/pages/about').default,
    "Routes": [
      "components/PrivateRoute"
    ]
  },
  {
    "path": "/",
    "exact": true,
    "component": require('/Users/bt/Documents/study/umi-project/src/pages/index').default
  },
  {
    "path": "/goods",
    "exact": true,
    "component": require('/Users/bt/Documents/study/umi-project/src/pages/goods').default
  },
  {
    "path": "/login",
    "exact": true,
    "component": require('/Users/bt/Documents/study/umi-project/src/pages/login').default
  },
  {
    "path": "/users",
    "routes": [
      {
        "path": "/users/:id",
        "exact": true,
        "component": require('/Users/bt/Documents/study/umi-project/src/pages/users/$id').default
      },
      {
        "path": "/users",
        "exact": true,
        "component": require('/Users/bt/Documents/study/umi-project/src/pages/users/index').default
      }
    ],
    "component": require('/Users/bt/Documents/study/umi-project/src/pages/users/_layout').default
  },
  {
    "component": require('/Users/bt/Documents/study/umi-project/src/pages/NotFound').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
