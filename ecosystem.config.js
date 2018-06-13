module.exports = {
  apps: [
    {
      name: 'aalam.online',
      script: './server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
