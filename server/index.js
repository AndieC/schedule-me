const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
