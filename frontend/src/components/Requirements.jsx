function Requirements() {
  const reqs = [
    {
      label: 'Hardware Prerequisites:',
      detail: 'Ensure your child has a modern laptop or tablet alongside a stable, high-speed internet connection.',
    },
    {
      label: 'Custom Tracks Available:',
      detail: 'Families can choose custom study tracks focused directly on AI concepts, physical robotics, or Python coding.',
    },
    {
      label: 'Early Booking Value:',
      detail: 'Due to low student-mentor ratios and capped batch sizes, slots fill up quickly during summer holidays.',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-blue-400 border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span>💡</span>
        <h2 className="text-lg font-bold text-blue-600">Pre-Workshop Planning & Setup Requirements</h2>
      </div>

      <ul className="space-y-3">
        {reqs.map((r, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <span className="text-blue-400 mt-0.5">•</span>
            <div>
              <span className="font-semibold text-gray-700">{r.label} </span>
              <span className="text-blue-600">{r.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Requirements
