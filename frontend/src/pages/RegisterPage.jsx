import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

function RegisterPage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address'
    }
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(form.phone)) {
      e.phone = 'Must be exactly 10 digits'
    }
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // clear error for this field as user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    try {
      const res = await axios.post('http://localhost:5000/api/enquiry', form)
      if (res.data.success) {
        setSuccess(true)
      } else {
        setServerError(res.data.message || 'Something went wrong.')
      }
    } catch {
      setServerError('Unable to submit. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-lg mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">You're Enrolled!</h2>
            <p className="text-gray-500 mb-6">
              Thanks, <strong>{form.name}</strong>! We've received your registration for the
              AI & Robotics Summer Workshop. Check your email at <strong>{form.email}</strong> for next steps.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Back to Workshop
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm mb-6 transition-colors"
        >
          ‹ Back to Workshop
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* ── Workshop summary card ── */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-20">
              {/* Coloured header */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white text-center">
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="font-bold text-base">AI & Robotics Summer Workshop</h3>
              </div>

              <div className="p-4 space-y-3">
                {[
                  { icon: '📅', label: 'Start Date', value: '15 July 2026' },
                  { icon: '⏳', label: 'Duration', value: '4 Weeks' },
                  { icon: '💻', label: 'Mode', value: 'Online (Live)' },
                  { icon: '👦', label: 'Age Group', value: '8–14 Years' },
                  { icon: '💰', label: 'Fee', value: '₹2,999' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 py-1.5 border-b border-gray-50 last:border-0">
                    <span className="text-base">{item.icon}</span>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-gray-500 text-xs">{item.label}</span>
                      <span className="text-gray-800 text-sm font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    82 seats still available
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Registration form ── */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-1">Register Your Child</h2>
              <p className="text-gray-500 text-sm mb-6">Fill in the details below to secure your spot.</p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Child's / Parent's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                    placeholder="Enter full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <span>⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {serverError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  {loading ? 'Submitting...' : 'Complete Registration'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By registering, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RegisterPage
