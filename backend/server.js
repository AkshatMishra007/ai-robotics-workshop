const express = require('express')
const cors = require('cors')
const enquiryRoutes = require('./routes/enquiry')

const app = express()

const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api', enquiryRoutes)

// test route
app.get('/', (req, res) => {
  res.send('Workshop backend is running')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})