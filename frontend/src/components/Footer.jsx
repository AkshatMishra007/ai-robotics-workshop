function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-500">Kid</span>
              <span className="text-pink-500">rove</span>
            </div>
            <p className="text-gray-500 text-sm">Discover and book the best activities for your kids.</p>
            <div className="flex gap-3 mt-4">
              {['f', 't', 'in', 'yt', 'li'].map((s) => (
                <div key={s} className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-blue-600">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
            {['About Us', 'Blog', 'Contact Us', 'FAQs', 'Partner with Us'].map((l) => (
              <p key={l} className="text-gray-500 text-sm mb-1.5 hover:text-blue-500 cursor-pointer">{l}</p>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
            {['Afterschool Activities', 'Arts and Crafts', 'Baby & Toddler', 'Birthday Deals'].map((l) => (
              <p key={l} className="text-gray-500 text-sm mb-1.5 hover:text-blue-500 cursor-pointer">{l}</p>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-3">Subscribe for updates on new activities and promotions.</p>
            <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your email" />
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-4 flex justify-between text-xs text-gray-400">
          <span>© 2026 Kidrove. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-blue-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-500 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
