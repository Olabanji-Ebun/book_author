import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const BookCollection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const books = [
    {
      title: 'THE GAVE OF DESTINY',
      genre: 'FICTION, MYSTERY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      gradient: 'from-yellow-400 via-pink-500 to-red-600',
    },
    {
      title: 'THE LOST LIGHTS',
      genre: 'FICTION, DRAMA',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
      gradient: 'from-pink-400 via-purple-500 to-black',
    },
    {
      title: 'SHARD & THE HEARTS',
      genre: 'ROMANCE, FICTION',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
      gradient: 'from-red-400 via-purple-500 to-blue-600',
    },
    {
      title: 'FARTHER THAN PLUTO',
      genre: 'SCI-FI, ADVENTURE',
      description: 'Duis aute irure dolor in reprehenderit in voluptate.',
      gradient: 'from-green-400 via-purple-500 to-blue-600',
    },
  ]

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
              BOOK COLLECTION
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Numerous Script. Best Ledger
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/books"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              VIEW ALL
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`w-full h-64 bg-gradient-to-br ${book.gradient} rounded-lg shadow-lg mb-4 transform group-hover:scale-105 transition-transform`}></div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-orange-500">★</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                {book.title}
              </h3>
              <p className="text-sm text-orange-500 font-semibold mb-2 uppercase">
                {book.genre}
              </p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {book.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookCollection
