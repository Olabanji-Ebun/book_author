import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaStar, FaCheck } from 'react-icons/fa'

const BookDetail = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const [searchParams] = useSearchParams()
  const bookId = searchParams.get('id') || '1'

  const book = {
    id: bookId,
    title: 'THE GAME OF DESTINY',
    genre: 'DRAMA, SCIENCE',
    rating: 4.5,
    publisher: 'The Myth Books',
    release: '1 November 2023',
    pages: '670 Pages',
    language: 'English',
    gradient: 'from-yellow-200 via-green-200 to-red-500',
  }

  const features = [
    'Aenean sit amet libero et dui gravida rutrum.',
    'Vestibulum malesuada orci et massa',
    'Pellentesque tellus est, vehicula at magna a',
    'Suspendisse semper tincidunt odio in condim',
  ]

  const details = [
    'Sed sed eleifend nunc, vitae porttitor tellus.',
    'Nam sit amet nulla consectetur sem fringilla hendrerit',
    'Aliquam imperdiet velit molestie orci blandit, non aliquet',
    'Nullam id massa nec massa pulvinar semper',
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Breadcrumb */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Book Detail
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <span>→</span>
              <Link
                to="/books"
                className="hover:text-orange-500 transition-colors"
              >
                BOOKS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Synopsis Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className={`w-full max-w-md mx-auto h-96 bg-gradient-to-b ${book.gradient} rounded-lg shadow-xl relative overflow-hidden`}>
                <div className="absolute top-4 left-4 text-orange-500 text-3xl font-bold">★</div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 uppercase font-semibold mb-2">
                  {book.genre}
                </p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(book.rating)
                          ? 'text-orange-500 fill-current'
                          : i < book.rating
                          ? 'text-orange-500 fill-current opacity-50'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  {book.title}
                </h2>
              </div>
            </motion.div>

            {/* Right - Book Synopsis */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Book Synopsis
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Buy This Book
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Detail Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Book Detail
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Details</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <span className="text-sm font-semibold text-gray-700">Publisher:</span>
                <p className="text-gray-600">{book.publisher}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Release:</span>
                <p className="text-gray-600">{book.release}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Pages:</span>
                <p className="text-gray-600">{book.pages}</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700">Language:</span>
                <p className="text-gray-600">{book.language}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Books Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
                OTHER BOOKS
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                Numerous Script, Best Ledger
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/books"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                View More
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                title: 'THE GAME OF DESTINY',
                genre: 'DRAMA, SCIENCE',
                rating: 4.5,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                gradient: 'from-yellow-200 via-green-200 to-red-500',
              },
              {
                id: 2,
                title: 'THE LOST LIGHTS',
                genre: 'DRAMA, SCIENCE',
                rating: 4.5,
                description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
                gradient: 'from-pink-300 via-yellow-200 to-gray-300',
              },
              {
                id: 3,
                title: 'SHARD & THE HEARTS',
                genre: 'DRAMA, SCIENCE',
                rating: 4.5,
                description: 'Duis aute irure dolor in reprehenderit in voluptate.',
                gradient: 'from-purple-400 via-green-500 to-orange-400',
              },
              {
                id: 4,
                title: 'FARTHER THAN PLUTO',
                genre: 'DRAMA, SCIENCE',
                rating: 4.5,
                description: 'Excepteur sint occaecat cupidatat non proident.',
                gradient: 'from-green-400 via-purple-500 to-blue-400',
              },
            ].map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={`/book-detail?id=${book.id}`}>
                  <div className="relative mb-4">
                    <div className={`w-full h-64 bg-gradient-to-b ${book.gradient} rounded-lg shadow-lg relative overflow-hidden`}>
                      <div className="absolute top-4 left-4 text-orange-500 text-2xl font-bold">★</div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase font-semibold">
                      {book.genre}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(book.rating)
                              ? 'text-orange-500 fill-current'
                              : i < book.rating
                              ? 'text-orange-500 fill-current opacity-50'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {book.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default BookDetail

