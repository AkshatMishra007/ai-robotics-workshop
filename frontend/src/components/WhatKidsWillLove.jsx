function WhatKidsWillLove() {
  const items = [
    {
      emoji: '🚀',
      title: 'Custom AI Projects:',
      desc: 'Building functional AI models and small apps using beginner-friendly platforms and Python basics.',
    },
    {
      emoji: '🤖',
      title: 'Robotics & Sensor Circuits:',
      desc: 'Connecting virtual sensor elements, configuring automation logic, and writing scripts to command hardware simulations.',
    },
    {
      emoji: '🏆',
      title: 'Milestone Project Rewards:',
      desc: 'Showcasing finished products, solving digital challenges, and earning certified project completion documents.',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-4">
        <span>🎮</span>
        <h2 className="text-lg font-bold text-blue-600">What Kids Will Love Most</h2>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-xl flex-shrink-0">{item.emoji}</span>
            <div>
              <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
              <span className="text-gray-600 text-sm"> {item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatKidsWillLove
