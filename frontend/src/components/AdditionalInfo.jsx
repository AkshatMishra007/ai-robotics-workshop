function AdditionalInfo() {
  const info = [
    { label: 'Age Range', value: '8–14 years' },
    { label: 'Capacity', value: '100 participants' },
    { label: 'Duration', value: '4 Weeks' },
    { label: 'Mode', value: 'Online (Live)' },
    { label: 'Start Date', value: '15 July 2026' },
    { label: 'Language', value: 'English / Hindi' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-bold text-blue-600 mb-4">Additional Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {info.map((item) => (
          <div key={item.label}>
            <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
            <p className="text-gray-800 font-medium text-sm">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdditionalInfo
