import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutAuthor from '../components/sections/AboutAuthor'
import Statistics from '../components/sections/Statistics'
import Awards from '../components/sections/Awards'
import Clients from '../components/sections/Clients'
import Skills from '../components/sections/Skills'
import FAQ from '../components/sections/FAQ'
import BlogSection from '../components/sections/BlogSection'

const About = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })

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
              About Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <span>→</span>
              <span className="text-gray-900 font-semibold">ABOUT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Author Section */}
      <AboutAuthor />

      {/* Statistics Section */}
      <Statistics />

      {/* Awards Section */}
      <Awards />

      {/* Clients Section */}
      <Clients />

      {/* Skills Section */}
      <Skills />

      {/* FAQ Section */}
      <FAQ />

      {/* Blog Section */}
      <BlogSection />
    </motion.div>
  )
}

export default About
