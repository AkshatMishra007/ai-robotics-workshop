function LocationCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <span className="text-lg">📍</span>
        <h3 className="font-semibold text-gray-800">Event Location</h3>
      </div>

      <div className="p-5">
        <p className="font-semibold text-gray-800">Online, India</p>
        <p className="text-gray-500 text-sm mb-1">Live sessions via Zoom</p>
        <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
          <span>📍</span>
          <span>Online</span>
        </div>

        {/* Map placeholder styled like screenshot */}
        <div className="rounded-lg overflow-hidden mb-3 bg-blue-50 h-32 flex items-center justify-center border border-blue-100">
          <div className="text-center text-blue-400">
            <div className="text-3xl mb-1">🗺️</div>
            <p className="text-xs">Online Workshop</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Get Link
          </button>
          <button className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium py-2 rounded-lg transition-colors">
            Share Location
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
