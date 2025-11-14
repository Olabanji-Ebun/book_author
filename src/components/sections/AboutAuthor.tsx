import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const AboutAuthor = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white"
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
              {/* Signature overlay */}
              <div className="absolute bottom-0 right-0 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                <span className="text-2xl font-serif italic text-gray-800">Myrrha</span>
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
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              ABOUT ME
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Author With the Less Fattening Centres
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutAuthor

