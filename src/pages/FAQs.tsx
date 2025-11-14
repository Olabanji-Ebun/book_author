import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import FAQSection from '../components/sections/FAQSection'

const FAQs = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })

  const aboutBooksFAQs = [
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

  const aboutPaymentFAQs = [
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

  const otherQuestionsFAQs = [
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with Breadcrumb */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              FAQs Page
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <span>→</span>
              <span className="text-gray-900 font-semibold">FAQS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Books Section */}
      <FAQSection
        title="About Books"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        faqs={aboutBooksFAQs}
        sectionIndex={0}
      />

      {/* About Payment Section */}
      <FAQSection
        title="About Payment"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        faqs={aboutPaymentFAQs}
        sectionIndex={1}
      />

      {/* Other Questions Section */}
      <FAQSection
        title="Other Questions"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        faqs={otherQuestionsFAQs}
        sectionIndex={2}
      />
    </motion.div>
  )
}

export default FAQs

