function WhyFamiliesLoveIt() {
  const cards = [
    {
      title: 'Hyper-Personalised Attention:',
      desc: 'Small batch sizes ensuring every child gets direct, mentor-led guidance throughout the sessions.',
      color: 'border-blue-400 bg-blue-50',
    },
    {
      title: 'Unmatched Schedule Flexibility:',
      desc: 'Fully online classes that blend seamlessly with busy household routines and school schedules.',
      color: 'border-green-400 bg-green-50',
    },
    {
      title: 'Logical Brain Building:',
      desc: 'Shifts children away from passive digital consumption toward software thinking, algorithms, and engineering.',
      color: 'border-blue-400 bg-blue-50',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span>✨</span>
        <h2 className="text-lg font-bold text-blue-600">Why Families Love It</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {cards.map((card, i) => (
          <div key={i} className={`border-l-4 rounded-r-lg p-4 ${card.color}`}>
            <p className="font-semibold text-gray-800 text-sm mb-1">{card.title}</p>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyFamiliesLoveIt
