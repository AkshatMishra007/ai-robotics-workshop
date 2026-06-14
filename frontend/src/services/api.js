import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

// sends the registration form data to the backend
export const submitEnquiry = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/enquiry`, formData)
  return response.data
}
