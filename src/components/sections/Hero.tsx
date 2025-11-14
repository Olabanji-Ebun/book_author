import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Author Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto aspect-square rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center">
                  <span className="text-8xl">👩</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gray-200 rounded-full -z-10 opacity-50"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
              The Author That{' '}
              <span className="text-orange-500">Writes About</span>{' '}
              Your Lifetime
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                READ MORE
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Book Covers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 gap-4"
        >
          <div className="w-32 h-40 bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 rounded-lg shadow-xl transform rotate-12"></div>
          <div className="w-32 h-40 bg-gradient-to-br from-green-400 via-blue-500 to-green-600 rounded-lg shadow-xl transform -rotate-12 mt-8"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
