import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Blog = () => {
  const heroRef = useRef(null)
  const blogRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isBlogInView = useInView(blogRef, { once: true, margin: '-100px' })

  const posts = [
    {
      id: 1,
      title: 'So Why Content Marketing Fails?',
      date: 'JULY 25, 2023',
      image: '📚',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla, vitae porttitor tellus. Nam sit amet nulla consectetur sem fringilla hendrerit.',
    },
    {
      id: 2,
      title: 'Guide to Becoming a Better Writer',
      date: 'JULY 25, 2023',
      image: '✍️',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla, vitae porttitor tellus. Nam sit amet nulla consectetur sem fringilla hendrerit.',
    },
    {
      id: 3,
      title: 'My All Time 5 Favorite Blog Posts',
      date: 'JULY 25, 2023',
      image: '🖊️',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla, vitae porttitor tellus. Nam sit amet nulla consectetur sem fringilla hendrerit.',
    },
    {
      id: 4,
      title: 'The Art of Storytelling in Modern Literature',
      date: 'JULY 25, 2023',
      image: '📖',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla, vitae porttitor tellus. Nam sit amet nulla consectetur sem fringilla hendrerit.',
    },
    {
      id: 5,
      title: 'How to Find Your Writing Voice',
      date: 'JULY 25, 2023',
      image: '✏️',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla, vitae porttitor tellus. Nam sit amet nulla consectetur sem fringilla hendrerit.',
    },
    {
      id: 6,
      title: 'Building a Reading Habit That Sticks',
      date: 'JULY 25, 2023',
      image: '📕',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla, vitae porttitor tellus. Nam sit amet nulla consectetur sem fringilla hendrerit.',
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
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden"
      >
        {/* Background Shape */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Blog & News
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link
                to="/"
                className="hover:text-orange-500 transition-colors"
              >
                HOME
              </Link>
              <span>→</span>
              <span className="text-gray-900 font-semibold">BLOG</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        ref={blogRef}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isBlogInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-8xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <span className="relative z-10">{post.image}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-3">
                      {post.date}
                    </p>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog
