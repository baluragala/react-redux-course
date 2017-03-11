import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('../dist'));

app.get('/', (req, res) => {
  const today = new Date().toDateString();
  const initialState = { today };
  const dom = renderToString(<App {...initialState} />);

  res.send(template({
    body: dom,
    title: 'React on Server',
    initialState: JSON.stringify(initialState)
  }));
});

app.listen(PORT,()=>{
  console.log(`Server listening on ${PORT}`);
});

