import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const NotFound = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 404 Error Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50 min-h-[70vh] flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4 font-serif">
              ERROR PAGE
            </p>
            
            <div className="mb-6">
              <h1 className="text-8xl md:text-9xl font-serif font-bold text-gray-900 flex items-center justify-center gap-2">
                <span>4</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-orange-500 text-8xl md:text-9xl"
                >
                  ★
                </motion.span>
                <span>4</span>
              </h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Oops, page not found!
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, dapibus leo.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Back to Homepage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default NotFound

