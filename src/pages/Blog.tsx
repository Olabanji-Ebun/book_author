import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
            Blog & News
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is the Blog page. More content coming soon...
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Blog
