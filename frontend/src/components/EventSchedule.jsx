function EventSchedule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-blue-600 mb-4">Event Schedule</h2>

      <div className="flex items-center gap-3">
        <span className="text-blue-400">📅</span>
        <div>
          <p className="font-medium text-gray-800">Jul 15 – Aug 10, 2026</p>
          <p className="text-gray-500 text-sm">Sessions begin 10 minutes before start time. Please join on time.</p>
        </div>
      </div>
    </div>
  )
}

export default EventSchedule
