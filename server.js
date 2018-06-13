#!/usr/bin/env nodejs
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => app.render(req, res, '/'));
    server.get('*', (req, res) => handle(req, res));

    server.listen(8080, (err) => {
      if (err) throw err;
      global.console.log('> Ready on http://localhost:8080');
    });
  })
  .catch((ex) => {
    global.console.error(ex.stack);
    process.exit(1);
  });
