import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Events = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const events = [
    {
      title: 'New Book Launching Event',
      date: '12 Dec',
      location: 'New York',
      description: 'Join us for the exciting launch of my latest book.',
      image: '👤',
    },
    {
      title: 'Writing and Author Seminar',
      date: '20 Dec',
      location: 'Los Angeles',
      description: 'Learn the art of storytelling and creative writing.',
      image: '👥',
    },
    {
      title: 'How to Become Author',
      date: '28 Dec',
      location: 'Chicago',
      description: 'A comprehensive workshop for aspiring authors.',
      image: '👤',
    },
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
            UPCOMING EVENTS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Anonymous Author. Satisfaction Guaranteed
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ x: 10 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">{event.image}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-500">📍</span>
                  <span className="text-sm text-gray-600">
                    {event.date}, {event.location}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                BUY TICKET
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
