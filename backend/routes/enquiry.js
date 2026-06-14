const express = require('express')
const router = express.Router()

// POST /api/enquiry
router.post('/enquiry', (req, res) => {
  const { name, email, phone } = req.body

  // check if all required fields are present
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    })
  }

  // in a real app, we would save this to a database here
  console.log('New enquiry received:', { name, email, phone })

  return res.status(200).json({
    success: true,
    message: 'Enquiry submitted successfully',
  })
})

module.exports = router
