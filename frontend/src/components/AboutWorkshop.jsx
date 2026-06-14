function AboutWorkshop() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Tab bar like screenshots 8-9 */}
      <div className="flex border-b border-gray-200">
        <button className="px-6 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
          About
        </button>
        <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
          Location
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-lg font-bold text-blue-600 mb-3">About This Workshop</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          This AI & Robotics Summer Workshop is designed to spark curiosity and build real-world
          technical skills in children aged 8–14. Over 4 action-packed weeks, young learners will
          explore how robots think, move, and interact with the world around them.
        </p>

        {/* Banner image placeholder like screenshot 9 */}
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 mb-4 h-40 flex flex-col items-center justify-center border border-blue-100">
          <div className="text-5xl mb-2">🤖</div>
          <p className="font-bold text-blue-700 text-lg tracking-wide">AI & ROBOTICS WORKSHOP</p>
          <p className="text-blue-500 text-xs mt-1">Empowering young minds with future-ready skills</p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          If you are searching for a summer program that perfectly balances future-ready tech education
          with creative play, our AI & Robotics Workshop stands out as a premier STEM destination.
          Offering highly interactive courses in AI concepts, Python basics, and hands-on robotics
          builds, this beginner-friendly program turns screen time into an intellectual asset.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          With live instructor-led sessions, children learn to think logically, solve complex problems,
          and build functional projects they can proudly present to their families at the end of the program.
        </p>
      </div>
    </div>
  )
}

export default AboutWorkshop
