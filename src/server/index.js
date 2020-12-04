import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import Home from './component/Home';

const PORT = process.env.PORT || 3006;
const app = express();
  
app.use(express.static('./client-build'));

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<Home />);
  
    const indexFile = path.resolve('./index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      res.send(
        data.replace('<div id="client"></div>', `<div id="client">${app}<script src="client.js" type="module"></script></div>`)
      );
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });