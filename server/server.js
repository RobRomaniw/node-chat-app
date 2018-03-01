const path = require('path'),
      express = require('express'),
      bodyParser = require('body-parser'),
      publicPath = path.join(__dirname, '../public');

var app = express(),
    port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started up at port ${port}`)
})
