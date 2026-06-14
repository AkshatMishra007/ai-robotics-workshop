import { useNavigate } from 'react-router-dom'

function BookingCard() {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Card header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <span className="text-lg">🔗</span>
        <h3 className="font-semibold text-gray-800">Book This Event</h3>
      </div>

      <div className="p-5">
        {/* Info notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 flex gap-2">
          <span className="text-amber-500 mt-0.5 flex-shrink-0">ℹ️</span>
          <div>
            <p className="text-amber-800 font-medium text-sm">Direct Booking</p>
            <p className="text-amber-700 text-xs mt-0.5">
              Register directly on this page. Fill in your details to secure your spot.
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-gray-500 text-sm">Starting from</span>
          <div className="text-2xl font-bold text-blue-600">₹2,999</div>
          <span className="text-gray-400 text-xs">per child</span>
        </div>

        {/* Seats available */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          <span className="text-green-500">●</span>
          <span>Available Now · 100 seats open</span>
        </div>

        <button
          onClick={() => navigate('/register')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
        >
          Enroll Now
        </button>

        <p className="text-center text-xs text-gray-400 mt-3">
          Secure your child's spot today
        </p>
      </div>
    </div>
  )
}

export default BookingCard
