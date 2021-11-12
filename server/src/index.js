const path = require('path');

const express = require('express');

const app = express();
const port = 3000;

//middle ware form
app.use(express.urlencoded({
  extended: true
}));

//middle ware js
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
const route = require('./routes');

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
