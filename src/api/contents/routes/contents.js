module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/healthz',
      handler: 'contents.healthz', 
      config: {
       policies: [],
       middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/register',
      handler: 'contents.register', 
      config: {
       policies: [],
       middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/create',
      handler: 'contents.create', 
      config: {
       policies: [],
       middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/read',
      handler: 'contents.read', 
      config: {
       policies: [],
       middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/update',
      handler: 'contents.update', 
      config: {
       policies: [],
       middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/delete',
      handler: 'contents.delete', 
      config: {
       policies: [],
       middlewares: [],
      },
    },
  ],
};
