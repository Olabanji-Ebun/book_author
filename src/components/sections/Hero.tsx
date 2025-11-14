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
      className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden"
    >
      {/* Animated Background Features */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                             linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Author Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative"
          >
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto aspect-square rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center">
                  <span className="text-8xl">👩</span>
                </div>
                {/* Semi-circular background shape */}
                <div className="absolute -bottom-20 -left-20 w-full h-full bg-gray-100 rounded-full -z-10 opacity-50"></div>
              </div>
            </div>
          </motion.div>

          {/* Middle - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
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

          {/* Right Side - Book Covers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 hidden lg:flex flex-col gap-6 items-end"
          >
            {/* First Book Cover */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="w-32 h-40 bg-gradient-to-br from-yellow-200 via-green-200 to-red-500 rounded-lg shadow-2xl transform rotate-12 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-orange-500 text-xl font-bold">★</div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Orange decorative element */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full opacity-30 blur-xl"></div>
            </motion.div>

            {/* Second Book Cover */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -8 }}
              className="relative mt-8"
            >
              <div className="w-32 h-40 bg-gradient-to-br from-purple-400 via-green-500 to-orange-400 rounded-lg shadow-2xl transform -rotate-12 relative overflow-hidden">
                <div className="absolute top-2 left-2 text-orange-500 text-xl font-bold">★</div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Orange decorative element */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-500 rounded-full opacity-30 blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
