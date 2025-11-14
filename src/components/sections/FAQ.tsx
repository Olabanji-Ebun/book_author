import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How do I make stories that are interesting to read',
      answer: 'Creating interesting stories requires a combination of compelling characters, engaging plot, and authentic voice. Focus on developing unique characters with clear motivations, create conflict and tension, and write with passion and authenticity. Read widely, practice regularly, and don\'t be afraid to revise and refine your work.',
    },
    {
      question: 'Who is the figure that I make a role model for writing',
      answer: 'Finding a writing role model is a personal journey. Look for authors whose style resonates with you, whose stories inspire you, and whose career path you admire. Study their techniques, read their works critically, and learn from their approach to storytelling. Remember, you can have multiple role models for different aspects of writing.',
    },
    {
      question: 'How long will it take me to write a book',
      answer: 'The time to write a book varies greatly depending on the length, complexity, your writing speed, and the time you can dedicate. A typical novel can take anywhere from 6 months to several years. The key is consistency - writing regularly, even if it\'s just a little each day, will help you make steady progress toward completing your book.',
    },
    {
      question: 'Do i accept collaborative projects',
      answer: 'Yes, I do accept collaborative projects! Collaboration can bring fresh perspectives and new ideas to a project. If you have a collaborative project in mind, please reach out through the contact page with details about your project, timeline, and what you\'re looking for in a collaborator.',
    },
    {
      question: 'How do I get inspiration to write book',
      answer: 'Inspiration can come from many sources: personal experiences, observations of the world around you, other books, art, music, conversations, dreams, and even everyday moments. Keep a journal, read widely, explore new places, engage with different perspectives, and most importantly, write regularly - sometimes inspiration comes while you\'re already writing.',
    },
  ]

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
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
            FAQS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

export default FAQ

