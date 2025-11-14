import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description: string
  faqs: FAQItem[]
  sectionIndex: number
}

const FAQSection = ({ title, description, faqs, sectionIndex }: FAQSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          className="mb-12"
        >
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
            FAQS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl">
            {description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (index * 0.1) }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-0 py-5 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <FaMinus className="text-gray-900" />
                  ) : (
                    <FaPlus className="text-gray-400" />
                  )}
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

