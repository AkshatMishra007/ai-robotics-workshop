import axios from 'axios'

const API_BASE_URL =
  'https://ai-robotics-workshop-zinu.onrender.com/api'

export const submitEnquiry = async (formData) => {
  const response = await axios.post(
    `${API_BASE_URL}/enquiry`,
    formData
  )

  return response.data
}