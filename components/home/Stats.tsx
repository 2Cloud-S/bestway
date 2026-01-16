'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Stat } from '@/types'

interface StatsProps {
  data: Stat[]
}

const defaultStats = [
  { _key: '1', number: '10+', label: 'Years of Experience' },
  { _key: '2', number: '50,000+', label: 'Successful Moves' },
  { _key: '3', number: '5.0', label: 'Average Rating' },
  { _key: '4', number: '100%', label: 'Customer Satisfaction' },
]

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  // Extract numeric value
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue)
    }
  }, [isInView, motionValue, numericValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Math.floor(latest).toLocaleString()
        ref.current.textContent = value.replace(/[0-9,]+/, formatted)
      }
    })
    return unsubscribe
  }, [springValue, value])

  return <span ref={ref}>{value}</span>
}

export default function Stats({ data }: StatsProps) {
  const stats = data.length > 0 ? data : defaultStats

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-primary-100">
            Numbers that speak for our excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat._key}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedNumber value={stat.number} />
                </div>
                <div className="text-primary-100 text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
