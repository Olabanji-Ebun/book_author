import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Clients = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const clients = [
    'MICHAEL ANDERSON',
    'MARS',
    'NATUSKA',
    'BREEZY',
    'MLON',
    'STELLAR',
    'NEXUS',
    'PRIME',
  ]

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
            MY CLIENTS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            My Beloved Customer & Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-gray-400 font-semibold text-lg">{client}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
