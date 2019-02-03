const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('dist'))

app.get('/api/getUsername', (req, res) => res.send({ username: 'Emad' }))

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
)
