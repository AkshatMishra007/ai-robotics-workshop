const express = require('express')
const cors = require('cors')
const enquiryRoutes = require('./routes/enquiry')

const app = express()
const PORT = 5000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api', enquiryRoutes)

// simple test route
app.get('/', (req, res) => {
  res.send('Workshop backend is running')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
