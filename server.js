const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})
