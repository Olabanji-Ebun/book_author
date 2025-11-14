import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCommentDots, FaChevronRight, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBooksDropdownOpen, setIsBooksDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ]

  const booksSubmenu = [
    { name: 'Books', path: '/books' },
    { name: 'Book Detail', path: '/book-detail' },
  ]

  const isActive = (path: string) => location.pathname === path
  const isBooksActive = () => location.pathname === '/books' || location.pathname === '/book-detail'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white text-lg font-bold">★</span>
            </motion.div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">MYRRA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* HOME */}
            <Link
              to="/"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive('/')
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              HOME
            </Link>
            {/* ABOUT */}
            <Link
              to="/about"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive('/about')
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              ABOUT
            </Link>
            {/* Books Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsBooksDropdownOpen(true)}
              onMouseLeave={() => setIsBooksDropdownOpen(false)}
            >
              <button
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isBooksActive()
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                BOOKS
              </button>
              <AnimatePresence>
                {isBooksDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                  >
                    {booksSubmenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                          isActive(item.path)
                            ? 'text-orange-500 bg-orange-50'
                            : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsBooksDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* BLOG */}
            <Link
              to="/blog"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive('/blog')
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              BLOG
            </Link>
            {/* CONTACT */}
            <Link
              to="/contact"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                isActive('/contact')
                  ? 'text-orange-500'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Let's Talk Button */}
          <motion.div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold uppercase tracking-wide rounded-lg hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCommentDots className="text-sm" />
              <span className="text-sm">Let's Talk!</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : {}}
                className="block h-0.5 w-full bg-gray-900"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full bg-gray-900"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : {}}
                className="block h-0.5 w-full bg-gray-900"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay and Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Slide-in Menu */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* Header with Logo and Close Button */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <Link
                      to="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">★</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900 tracking-tight">MYRRA</span>
                    </Link>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Close menu"
                    >
                      <FaTimes className="text-gray-700 text-xl" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col p-6 space-y-4 flex-grow">
                    {/* HOME */}
                    <Link
                      to="/"
                      className={`text-sm font-semibold uppercase tracking-wide py-2 ${
                        isActive('/')
                          ? 'text-orange-500'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      HOME
                    </Link>
                    {/* ABOUT */}
                    <Link
                      to="/about"
                      className={`text-sm font-semibold uppercase tracking-wide py-2 ${
                        isActive('/about')
                          ? 'text-orange-500'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ABOUT
                    </Link>
                    {/* Books Dropdown for Mobile */}
                    <div className="flex flex-col space-y-2">
                      <button
                        className={`flex items-center justify-between text-sm font-semibold uppercase tracking-wide text-left py-2 ${
                          isBooksActive()
                            ? 'text-orange-500'
                            : 'text-gray-700'
                        }`}
                        onClick={() => setIsBooksDropdownOpen(!isBooksDropdownOpen)}
                      >
                        <span>BOOKS</span>
                        <motion.div
                          animate={{ rotate: isBooksDropdownOpen ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaChevronRight className="text-xs" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isBooksDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-2 pt-2">
                              {booksSubmenu.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={`block text-sm font-semibold uppercase tracking-wide py-2 ${
                                    isActive(item.path)
                                      ? 'text-orange-500'
                                      : 'text-gray-600'
                                  }`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setIsBooksDropdownOpen(false)
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {/* BLOG */}
                    <Link
                      to="/blog"
                      className={`text-sm font-semibold uppercase tracking-wide py-2 ${
                        isActive('/blog')
                          ? 'text-orange-500'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      BLOG
                    </Link>
                    {/* CONTACT */}
                    <Link
                      to="/contact"
                      className={`text-sm font-semibold uppercase tracking-wide py-2 ${
                        isActive('/contact')
                          ? 'text-orange-500'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      CONTACT
                    </Link>
                    {/* Let's Talk Button for Mobile */}
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white font-semibold uppercase tracking-wide rounded-lg hover:bg-orange-600 transition-colors mt-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FaCommentDots className="text-sm" />
                      <span className="text-sm">Let's Talk!</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header