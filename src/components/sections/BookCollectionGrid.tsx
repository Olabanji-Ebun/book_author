import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const BookCollectionGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const books = [
    {
      id: 1,
      title: 'THE GAME OF DESTINY',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      gradient: 'from-yellow-200 via-green-200 to-red-500',
      stripes: 'bg-gradient-to-b from-yellow-200 via-green-200 to-red-500',
    },
    {
      id: 2,
      title: 'THE LOST LIGHTS',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      gradient: 'from-pink-300 via-yellow-200 to-gray-300',
      stripes: 'bg-gradient-to-b from-pink-300 via-yellow-200 to-gray-300',
    },
    {
      id: 3,
      title: 'SHARD & THE HEARTS',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      gradient: 'from-purple-400 via-green-500 to-orange-400',
      stripes: 'bg-gradient-to-b from-purple-400 via-green-500 to-orange-400',
    },
    {
      id: 4,
      title: 'FARTHER THAN PLUTO',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      gradient: 'from-green-400 via-purple-500 to-blue-400',
      stripes: 'bg-gradient-to-b from-green-400 via-purple-500 to-blue-400',
    },
    {
      id: 5,
      title: 'THE GAME OF DESTINY',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      gradient: 'from-yellow-200 via-green-200 to-red-500',
      stripes: 'bg-gradient-to-b from-yellow-200 via-green-200 to-red-500',
    },
    {
      id: 6,
      title: 'THE LOST LIGHTS',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      gradient: 'from-pink-300 via-yellow-200 to-gray-300',
      stripes: 'bg-gradient-to-b from-pink-300 via-yellow-200 to-gray-300',
    },
    {
      id: 7,
      title: 'SHARD & THE HEARTS',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      gradient: 'from-purple-400 via-green-500 to-orange-400',
      stripes: 'bg-gradient-to-b from-purple-400 via-green-500 to-orange-400',
    },
    {
      id: 8,
      title: 'FARTHER THAN PLUTO',
      genre: 'DRAMA, SCIENCE',
      rating: 4.5,
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      gradient: 'from-green-400 via-purple-500 to-blue-400',
      stripes: 'bg-gradient-to-b from-green-400 via-purple-500 to-blue-400',
    },
  ]

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
            BOOK COLLECTION
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Numerous Script, Best Ledger
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/book-detail?id=${book.id}`}>
                <div className="relative mb-4">
                  <div className={`w-full h-80 bg-gradient-to-b ${book.gradient} rounded-lg shadow-lg relative overflow-hidden`}>
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
  )
}

export default BookCollectionGrid

