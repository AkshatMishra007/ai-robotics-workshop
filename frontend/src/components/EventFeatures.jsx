function EventFeatures() {
  const features = [
    'Professional supervision',
    'All materials included',
    'Age-appropriate activities',
    'Safe online environment',
    'Certificate of completion',
    'Recorded session access',
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-blue-600 mb-4">Event Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2.5 border border-gray-100 rounded-lg px-4 py-2.5">
            <span className="text-green-500 flex-shrink-0">✅</span>
            <span className="text-gray-700 text-sm">{f}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventFeatures
