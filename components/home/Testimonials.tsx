'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Testimonial } from '@/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const defaultTestimonials = [
  {
    _id: '1',
    name: 'Sarah Johnson',
    position: 'Homeowner',
    company: 'New York',
    content: 'Exceptional service from start to finish! The team was professional, careful with our belongings, and made our move stress-free.',
    rating: 5,
    image: null,
    order: 1,
  },
  {
    _id: '2',
    name: 'Michael Chen',
    position: 'Business Owner',
    company: 'Tech Solutions Inc',
    content: 'We needed to relocate our office quickly, and they delivered perfectly. Minimal downtime and everything arrived safely.',
    rating: 5,
    image: null,
    order: 2,
  },
  {
    _id: '3',
    name: 'Emily Rodriguez',
    position: 'Real Estate Agent',
    company: 'Elite Properties',
    content: 'I recommend them to all my clients. They consistently provide excellent service and treat every move with care.',
    rating: 5,
    image: null,
    order: 3,
  },
]

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const displayTestimonials = testimonials.length > 0 ? testimonials.slice(0, 3) : defaultTestimonials

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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who trusted us with their moves
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col relative overflow-hidden">
                {/* Quote icon background */}
                <div className="absolute -top-4 -right-4 text-primary-100 opacity-50">
                  <FaQuoteLeft size={80} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
