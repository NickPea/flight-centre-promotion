//

const express = require('express');
const path = require('path');
const app = express();

app.use('/assets',express.static('assets'));

app.use('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(8080, () => {
    console.log(`-- listening on port 8080 -- `);
})