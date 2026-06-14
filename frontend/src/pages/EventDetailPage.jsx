import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingCard from '../components/BookingCard'
import InstructorCard from '../components/InstructorCard'
import LocationCard from '../components/LocationCard'
import EventDetailsCard from '../components/EventDetailsCard'
import WhatYoullLearn from '../components/WhatYoullLearn'
import ClassInsights from '../components/ClassInsights'
import AboutWorkshop from '../components/AboutWorkshop'
import WhyFamiliesLoveIt from '../components/WhyFamiliesLoveIt'
import WhatKidsWillLove from '../components/WhatKidsWillLove'
import LocationAndCampSlots from '../components/LocationAndCampSlots'
import PricingTable from '../components/PricingTable'
import Requirements from '../components/Requirements'
import CTASection from '../components/CTASection'
import EventSchedule from '../components/EventSchedule'
import EventFeatures from '../components/EventFeatures'
import AdditionalInfo from '../components/AdditionalInfo'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import AskQuestion from '../components/AskQuestion'

function EventDetailPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* ── Back button ── */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm mb-4 transition-colors"
        >
          ‹ Back to Events
        </button>

        {/* ── Category badges ── */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            courses-camps-workshops
          </span>
          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            Online
          </span>
          <span className="bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
            🔥 Featured
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
            Event
          </span>
          <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
            ✅ Published
          </span>
        </div>

        {/* ── Workshop title ── */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <span className="text-3xl">🤖</span>
          AI & Robotics Summer Workshop
        </h1>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ════ LEFT COLUMN ════ */}
          <div className="flex-1 min-w-0 space-y-5">

            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 h-72 md:h-96">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-7xl mb-3">🤖</div>
                <p className="text-2xl font-bold">AI & Robotics</p>
                <p className="text-sm opacity-80 mt-1">Summer Workshop 2026</p>
              </div>
              {/* Overlaid info bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm px-5 py-3 flex items-center justify-between text-white text-sm">
                <span className="flex items-center gap-1.5">👁️ 248 views</span>
                <span className="flex items-center gap-1.5">📍 Online, India</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available Now
                </span>
              </div>
            </div>

            {/* Date / Mode / Age quick-info bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: '📅', label: 'DATE RANGE', value: 'Jul 15 – Aug 10, 2026' },
                { icon: '💻', label: 'TEACHING MODE', value: 'Online' },
                { icon: '👦', label: 'AGE GROUP', value: '8–14 years' },
                { icon: '📚', label: 'SUBJECT', value: 'AI & Robotics' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex items-start gap-2.5">
                  <span className="text-blue-400 text-lg flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-gray-400 text-xs">{item.label}</p>
                    <p className="text-gray-800 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main content sections */}
            <WhatYoullLearn />
            <ClassInsights />
            <AboutWorkshop />
            <WhyFamiliesLoveIt />
            <WhatKidsWillLove />
            <LocationAndCampSlots />
            <PricingTable />
            <Requirements />
            <CTASection />
            <EventSchedule />
            <EventFeatures />
            <AdditionalInfo />
            <Reviews />
            <FAQ />
            <AskQuestion />
          </div>

          {/* ════ RIGHT SIDEBAR ════ */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-4">
              <BookingCard />
              <InstructorCard />
              <LocationCard />
              <EventDetailsCard />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EventDetailPage
