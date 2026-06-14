import { useNavigate } from 'react-router-dom'

function CTASection() {
  const navigate = useNavigate()

  return (
    <div className="bg-green-50 border border-green-100 rounded-xl p-8 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Claim Your Free Evaluation Session</h2>
      <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
        Book a free live trial class with a dedicated tech mentor or enrol in the full
        4-week AI & Robotics summer workshop today.
      </p>
      <button
        onClick={() => navigate('/register')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-full transition-colors text-sm tracking-wide"
      >
        ENROL NOW
      </button>
    </div>
  )
}

export default CTASection
