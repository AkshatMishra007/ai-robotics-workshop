function LocationAndCampSlots() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Location Options */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span>📌</span>
          <h3 className="font-semibold text-gray-800">Location Options</h3>
        </div>
        <p className="font-medium text-gray-700 text-sm mb-1">100% Online Format</p>
        <p className="text-gray-500 text-sm">
          Live instructor-led virtual sessions accessible from anywhere in India.
          All you need is a laptop and a stable internet connection.
        </p>
      </div>

      {/* Camp Slots */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span>🕐</span>
          <h3 className="font-semibold text-gray-800">Camp Slots</h3>
        </div>
        <p className="text-gray-500 text-sm">
          Flexible multi-week modules running through morning and afternoon time blocks.
          Separate tracks available for absolute beginners and those with some prior experience.
        </p>
      </div>
    </div>
  )
}

export default LocationAndCampSlots
