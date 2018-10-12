const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const port = 1337;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/static')));

app.listen(port, () => {
  console.log('its game time on ', port);
})