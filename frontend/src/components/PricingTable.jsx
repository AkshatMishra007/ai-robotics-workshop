function PricingTable() {
  const rows = [
    {
      track: 'Free Trial Session',
      desc: 'Introductory live demo class with a mentor. No commitment required.',
      duration: '1 Trial Class',
      fee: 'FREE',
      freeHighlight: true,
    },
    {
      track: 'Explorer Pack',
      desc: 'AI fundamentals, Python intro, and basic robotics concepts.',
      duration: '8 Sessions (~2 Weeks)',
      fee: '₹999',
      freeHighlight: false,
    },
    {
      track: 'Builder Pack',
      desc: 'Hands-on robotics builds, sensor integration, and automation projects.',
      duration: '16 Sessions (~3 Weeks)',
      fee: '₹1,999',
      freeHighlight: false,
    },
    {
      track: 'Full Summer Workshop',
      desc: 'Complete AI & Robotics curriculum with final project presentation.',
      duration: '24 Sessions (4 Weeks)',
      fee: '₹2,999',
      freeHighlight: false,
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <span>📊</span>
          <h2 className="text-lg font-bold text-gray-800">Workshop Packages & Fees</h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-100">
              <th className="text-left px-6 py-3 font-semibold text-gray-700">Package Track</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Duration & Sessions</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Total Fee (₹)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-800">{row.track}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{row.desc}</p>
                </td>
                <td className="px-4 py-4 text-gray-600">{row.duration}</td>
                <td className="px-4 py-4">
                  <span className={`font-bold ${row.freeHighlight ? 'text-green-600' : 'text-blue-600'}`}>
                    {row.fee}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PricingTable
