import express from 'express'
const app = express()
app.use(express.json())

const PORT = 8080

app.get('/ping', (_req, res) => {
    console.log('soy gay')
    res.send('yo tambien')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})