const express = require('express')
const config = require('config')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = config.get('port') || 5005

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    )
  } catch (e) {
    console.error('Server Error', e.message)
    process.exit(1)
  }
}

start()

//sudo pkill node
