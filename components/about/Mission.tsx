'use client'

import { motion } from 'framer-motion'
import { FaBullseye, FaEye } from 'react-icons/fa'
import { AboutPage } from '@/types'

interface MissionProps {
  data: AboutPage | null
}

export default function Mission({ data }: MissionProps) {
  const mission = data?.mission || 'To provide exceptional moving services that exceed customer expectations through professionalism, reliability, and care.'
  const vision = data?.vision || 'To be the most trusted and preferred moving company, setting industry standards for quality and customer satisfaction.'

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-10 shadow-2xl h-full">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6"
              >
                <FaBullseye className="text-primary-600 text-3xl" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-primary-50 text-lg leading-relaxed">
                {mission}
              </p>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl p-10 shadow-2xl h-full">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6"
              >
                <FaEye className="text-accent-600 text-3xl" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-accent-50 text-lg leading-relaxed">
                {vision}
              </p>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-400 rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Story section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Founded over a decade ago, Bestway For Moving started with a simple mission: to make moving a stress-free experience for everyone. What began as a small family-owned business has grown into one of the most trusted moving companies in the region.
            </p>
            <p>
              Our commitment to excellence, customer satisfaction, and continuous improvement has been the cornerstone of our success. Every member of our team is dedicated to treating your belongings as if they were their own, ensuring a seamless moving experience from start to finish.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
