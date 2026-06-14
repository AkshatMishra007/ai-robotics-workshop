function WhatYoullLearn() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Left blue border accent like screenshot */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-800">What you'll learn</h2>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        This 4-week online workshop introduces kids aged 8–14 to the exciting world of Artificial
        Intelligence and Robotics. Through hands-on activities and guided projects, children will
        build real skills in AI fundamentals, sensor integration, and automation — all while having fun
        and developing critical thinking abilities that will serve them for life.
      </p>

      {/* Topics */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-green-500">🏷️</span>
        <h3 className="font-medium text-gray-700">Topics</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {['#ai', '#robotics', '#automation', '#sensors', '#python', '#stem', '#camp', '#coding'].map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 hover:bg-blue-50 text-gray-600 text-xs px-3 py-1.5 rounded-full cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default WhatYoullLearn
