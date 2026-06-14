import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-white">Kid</span>
          <span className="text-yellow-300">rove</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-200 transition-colors">Find Activities</a>
          <a href="#" className="hover:text-yellow-200 transition-colors">Blog</a>
          <a href="#" className="hover:text-yellow-200 transition-colors">Kidrove Go</a>
          <a href="#" className="hover:text-yellow-200 transition-colors">FAQ</a>
          <a href="#" className="hover:text-yellow-200 transition-colors">Get In Touch</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-white text-blue-600 font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
            Login
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
