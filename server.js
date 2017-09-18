const express = require('express')
const PORT  = 8080
const app = express()

app.use(express.static('./server/static'))
app.use(express.static('./client/dist'))

app.get('/' , (req, res) => {
    res.status(200).sendFile(__dirname + '/server/static/index.html')
})


app.listen(PORT, () => {
    console.log('Server is currently running on port: %s', PORT)
})