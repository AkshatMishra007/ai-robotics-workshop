function Reviews() {
  const reviews = [
    { name: 'Priya S.', rating: 5, date: '2 weeks ago', text: 'My daughter absolutely loved this workshop! The instructors were patient and the content was perfectly paced for her age.', initial: 'P' },
    { name: 'Rajan M.', rating: 5, date: '1 month ago', text: 'Fantastic experience for my son. He built his first AI project and couldn\'t stop talking about it. Highly recommend!', initial: 'R' },
    { name: 'Anita K.', rating: 4, date: '3 weeks ago', text: 'Well-structured sessions, great mentors. The live format kept my child engaged throughout all 4 weeks.', initial: 'A' },
  ]

  const starBreakdown = [
    { stars: 5, pct: 78 },
    { stars: 4, pct: 15 },
    { stars: 3, pct: 5 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">What People Are Saying</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Rating summary */}
        <div className="md:w-48 flex-shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-3xl font-bold text-gray-800">4.7</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">48 reviews</p>
          <div className="space-y-1.5">
            {starBreakdown.map((s) => (
              <div key={s.stars} className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 w-10">{s.stars} stars</span>
                <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                  <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${s.pct}%` }}></div>
                </div>
                <span className="text-gray-400 w-8">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div className="flex-1 space-y-4">
          {reviews.map((r) => (
            <div key={r.name} className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{r.name}</p>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">★</span>
                        ))}
                      </div>
                      <span className="text-gray-400 text-xs">{r.rating}.0</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Verified · {r.date}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{r.text}</p>
            </div>
          ))}

          <div className="border border-dashed border-gray-200 rounded-xl p-5 text-center bg-gray-50">
            <p className="text-gray-500 text-sm mb-3">Share your experience</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
