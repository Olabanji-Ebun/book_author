import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import FAQ from '../components/sections/FAQ'

const Contact = () => {
  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isContactInView = useInView(contactRef, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message!')
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              My Contact
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <span>→</span>
              <span className="text-gray-900 font-semibold">CONTACT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section
        ref={contactRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
                  CONTACT
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">559 Fern Ridges, New York</p>
                  <p className="text-gray-600">South Dakota 99104</p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">myrra.writer@mails.com</p>
                  <p className="text-gray-600">example@mails.com</p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567 890</p>
                  <p className="text-gray-600">+0 (987) 654 321</p>
                </div>

                {/* Social Media Icons */}
                <div>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="text-gray-700" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-gray-700" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="YouTube"
                    >
                      <FaYoutube className="text-gray-700" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-gray-700" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Jhon"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567 890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Hello there!"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gray-900 text-white font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.675423847315!2d-0.1277584!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </motion.div>
  )
}

export default Contact
