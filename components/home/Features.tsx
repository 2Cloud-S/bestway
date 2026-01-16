'use client'

import { motion } from 'framer-motion'
import { FaTruck, FaBoxOpen, FaShieldAlt, FaClock, FaAward, FaUsers } from 'react-icons/fa'
import { Feature } from '@/types'

interface FeaturesProps {
  data: Feature[]
}

const iconMap: { [key: string]: any } = {
  FaTruck,
  FaBoxOpen,
  FaShieldAlt,
  FaClock,
  FaAward,
  FaUsers,
}

const defaultFeatures = [
  {
    _key: '1',
    icon: 'FaTruck',
    title: 'Professional Service',
    description: 'Our experienced team ensures your belongings are handled with utmost care.',
  },
  {
    _key: '2',
    icon: 'FaShieldAlt',
    title: 'Fully Insured',
    description: 'Complete insurance coverage for your peace of mind during the move.',
  },
  {
    _key: '3',
    icon: 'FaClock',
    title: 'On-Time Delivery',
    description: 'We value your time and guarantee punctual service every time.',
  },
  {
    _key: '4',
    icon: 'FaAward',
    title: 'Award Winning',
    description: 'Recognized for excellence in customer service and reliability.',
  },
]

export default function Features({ data }: FeaturesProps) {
  const features = data.length > 0 ? data : defaultFeatures

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine expertise, dedication, and modern technology to deliver exceptional moving experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || FaBoxOpen

            return (
              <motion.div
                key={feature._key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300"
                  >
                    <Icon className="text-white text-2xl" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
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
