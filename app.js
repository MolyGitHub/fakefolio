const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.get('/', (req, res) => res.send('Hello Javascript!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))