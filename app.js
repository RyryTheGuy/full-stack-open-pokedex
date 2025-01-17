const express = require('express')
const app = express()

// Heroku dynamically sets a port
/*eslint-env node*/
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_request, response) => {
  response.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
