'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ContactInfo } from '@/types'

// Dynamically import the Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
})

interface MapSectionProps {
  data: ContactInfo | null
}

export default function MapSection({ data }: MapSectionProps) {
  const latitude = data?.latitude || 24.2075
  const longitude = data?.longitude || 55.7447

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">Visit our office or we'll come to you for a free consultation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-100">
            <Map latitude={latitude} longitude={longitude} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
