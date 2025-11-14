import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCommentDots } from 'react-icons/fa'

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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 border-t border-gray-200 mt-2"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {/* HOME */}
                <Link
                  to="/"
                  className={`text-sm font-semibold uppercase tracking-wide ${
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
                  className={`text-sm font-semibold uppercase tracking-wide ${
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
                    className={`text-sm font-semibold uppercase tracking-wide text-left ${
                      isBooksActive()
                        ? 'text-orange-500'
                        : 'text-gray-700'
                    }`}
                    onClick={() => setIsBooksDropdownOpen(!isBooksDropdownOpen)}
                  >
                    BOOKS {isBooksDropdownOpen ? '−' : '+'}
                  </button>
                  {isBooksDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      {booksSubmenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block text-sm font-semibold uppercase tracking-wide ${
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
                  )}
                </div>
                {/* BLOG */}
                <Link
                  to="/blog"
                  className={`text-sm font-semibold uppercase tracking-wide ${
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
                  className={`text-sm font-semibold uppercase tracking-wide ${
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
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold uppercase tracking-wide rounded-lg hover:bg-orange-600 transition-colors mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaCommentDots className="text-sm" />
                  <span className="text-sm">Let's Talk!</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header