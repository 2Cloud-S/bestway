'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaShieldAlt, FaStar, FaHandshake } from 'react-icons/fa'
import { Value } from '@/types'

interface ValuesProps {
  data: Value[]
}

const iconMap = [FaHeart, FaShieldAlt, FaStar, FaHandshake]

const defaultValues = [
  {
    _key: '1',
    title: 'Customer First',
    description: 'Your satisfaction and peace of mind are our top priorities in every move.',
  },
  {
    _key: '2',
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
  },
  {
    _key: '3',
    title: 'Excellence',
    description: 'We strive for perfection in every aspect of our service delivery.',
  },
  {
    _key: '4',
    title: 'Reliability',
    description: 'You can count on us to deliver on our promises, every single time.',
  },
]

export default function Values({ data }: ValuesProps) {
  const values = data.length > 0 ? data : defaultValues

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[index % iconMap.length]

            return (
              <motion.div
                key={value._key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full text-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <Icon className="text-white text-3xl" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
