function InstructorCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
        <span className="text-lg">🏫</span>
        <h3 className="font-semibold text-gray-800">Event Organizer</h3>
      </div>

      <div className="p-5">
        {/* Avatar + info */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            WS
          </div>
          <div>
            <p className="font-medium text-gray-800 text-sm">workshop@airobots.com</p>
            <p className="text-gray-500 text-xs">+91 98765 43210</p>
          </div>
        </div>

        <p className="text-gray-500 text-xs mb-1 font-medium">Professional Workshop Organizer</p>
        <p className="text-gray-500 text-xs mb-4">
          Specialising in AI & Robotics programs for children aged 8–14.
        </p>

        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Contact
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium py-2 rounded-lg transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstructorCard
