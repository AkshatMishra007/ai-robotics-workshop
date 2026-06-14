function ClassInsights() {
  const stats = [
    { label: 'Views', value: '248', icon: '👁️' },
    { label: 'Seats', value: '100', icon: '👥' },
    { label: 'Available', value: '82', icon: '✅' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-blue-500">📊</span>
        <h2 className="text-lg font-semibold text-gray-800">Class Insights</h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-gray-500 text-xs mb-1">{s.label}</p>
            <p className="text-2xl font-bold text-gray-800">{s.value}</p>
            <div className="flex justify-center mt-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-sm">
                {s.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassInsights
