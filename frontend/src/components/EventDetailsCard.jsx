function EventDetailsCard() {
  const details = [
    { label: 'Created', value: 'Jun 10, 2026' },
    { label: 'Last Updated', value: 'Jun 14, 2026' },
    { label: 'Event Type', value: 'Workshop' },
    { label: 'Venue Type', value: 'Online' },
    { label: 'Status', value: '✅ Published', highlight: true },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <span className="text-lg">📋</span>
        <h3 className="font-semibold text-gray-800">Event Details</h3>
      </div>

      <div className="p-5">
        {details.map((item) => (
          <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
            <span className="text-gray-500 text-sm">{item.label}</span>
            <span className={`text-sm font-medium ${item.highlight ? 'text-green-600' : 'text-gray-700'}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Is this your event? */}
      <div className="mx-5 mb-5 border border-blue-100 rounded-lg p-4 bg-blue-50">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-blue-500">✅</span>
          <p className="font-medium text-gray-800 text-sm">Is this your event?</p>
        </div>
        <p className="text-gray-500 text-xs mb-3">Claim this event as its vendor</p>
        <div className="text-xs text-gray-500 space-y-1 mb-3">
          {['Update event details', 'Access booking analytics', 'Manage tickets and pricing'].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
          Claim as vendor
        </button>
      </div>
    </div>
  )
}

export default EventDetailsCard
