const express = require('express')
const app = express()

const port = process.env.PORT || 7000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => console.log(`My Server is on http://localhost:${port}`))