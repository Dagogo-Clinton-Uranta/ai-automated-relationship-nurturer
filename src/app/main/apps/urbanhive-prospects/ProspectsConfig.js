import { lazy } from 'react';

const ProspectsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/apps/prospects',
      component: lazy(() => import('./ProspectsApp')),
    },
  ],
};

export default ProspectsAppConfig;
