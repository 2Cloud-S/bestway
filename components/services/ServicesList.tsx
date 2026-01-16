'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTruck, FaBuilding, FaBoxOpen, FaHome, FaWarehouse, FaTools, FaCheck } from 'react-icons/fa'
import { Service } from '@/types'

interface ServicesListProps {
  services: Service[]
}

const iconMap: { [key: string]: any } = {
  FaTruck,
  FaBuilding,
  FaBoxOpen,
  FaHome,
  FaWarehouse,
  FaTools,
}

const defaultServices = [
  {
    _id: '1',
    title: 'Residential Moving',
    slug: { current: 'residential-moving' },
    description: 'Professional home moving services with expert packing and careful handling.',
    icon: 'FaHome',
    price: 'Custom Quote',
    features: ['Professional packing', 'Furniture disassembly', 'Safe transport', 'Unpacking services'],
    image: null,
    order: 1,
  },
  {
    _id: '2',
    title: 'Commercial Moving',
    slug: { current: 'commercial-moving' },
    description: 'Efficient office and business relocation minimizing downtime.',
    icon: 'FaBuilding',
    price: 'Custom Quote',
    features: ['After-hours moving', 'IT equipment handling', 'Minimal disruption', 'Setup assistance'],
    image: null,
    order: 2,
  },
  {
    _id: '3',
    title: 'Packing Services',
    slug: { current: 'packing-services' },
    description: 'Professional packing with quality materials for maximum protection.',
    icon: 'FaBoxOpen',
    price: 'Custom Quote',
    features: ['Quality materials', 'Fragile item care', 'Labeling system', 'Custom crating'],
    image: null,
    order: 3,
  },
]

export default function ServicesList({ services }: ServicesListProps) {
  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {/* Header */}
                  <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white overflow-hidden">
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
                    <div className="text-accent-200 font-bold text-xl relative z-10">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6 flex-grow">
                        <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <FaCheck className="text-primary-500 mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                      >
                        Request Quote
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
