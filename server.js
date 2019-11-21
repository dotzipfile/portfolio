const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('build'), (req, res) => res.send('Nothing here...'));

app.listen(port, () => console.log(`Listening on port: ${3000}`));
