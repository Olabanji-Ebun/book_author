import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Awards from '../components/sections/Awards'
import AboutSection from '../components/sections/AboutSection'
import Clients from '../components/sections/Clients'
import BookCollection from '../components/sections/BookCollection'
import Skills from '../components/sections/Skills'
import Events from '../components/sections/Events'
import NewRelease from '../components/sections/NewRelease'
import Testimonials from '../components/sections/Testimonials'
import BlogSection from '../components/sections/BlogSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Awards />
      <AboutSection />
      <Clients />
      <BookCollection />
      <Skills />
      <Events />
      <NewRelease />
      <Testimonials />
      <BlogSection />
    </motion.div>
  )
}

export default Home
