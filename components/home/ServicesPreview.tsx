'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTruck, FaBuilding, FaBoxOpen, FaArrowRight } from 'react-icons/fa'
import { Service } from '@/types'

interface ServicesPreviewProps {
  services: Service[]
}

const iconMap: { [key: string]: any } = {
  FaTruck,
  FaBuilding,
  FaBoxOpen,
}

const defaultServices = [
  {
    _id: '1',
    title: 'Residential Moving',
    slug: { current: 'residential-moving' },
    description: 'Complete home moving services with professional packing and careful handling of your belongings.',
    icon: 'FaTruck',
    price: 'Custom Quote',
    features: [],
    image: null,
    order: 1,
  },
  {
    _id: '2',
    title: 'Commercial Moving',
    slug: { current: 'commercial-moving' },
    description: 'Efficient office relocation services minimizing downtime for your business.',
    icon: 'FaBuilding',
    price: 'Custom Quote',
    features: [],
    image: null,
    order: 2,
  },
  {
    _id: '3',
    title: 'Packing Services',
    slug: { current: 'packing-services' },
    description: 'Professional packing with quality materials ensuring maximum protection.',
    icon: 'FaBoxOpen',
    price: 'Custom Quote',
    features: [],
    image: null,
    order: 3,
  },
]

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  const displayServices = services.length > 0 ? services.slice(0, 3) : defaultServices

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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive moving solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon] || FaTruck

            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white relative overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
                    />
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative z-10"
                    >
                      <Icon className="text-5xl mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 relative z-10">
                      {service.title}
                    </h3>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-accent-500">
                        {service.price}
                      </div>
                      <Link href={`/services/${service.slug.current}`}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 group"
                        >
                          Learn More
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/30"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
