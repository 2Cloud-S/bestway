'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaPhone } from 'react-icons/fa'
import { HomePage } from '@/types'

interface HeroProps {
  data: HomePage | null
}

export default function Hero({ data }: HeroProps) {
  const title = data?.heroTitle || 'Moving Made Easy'
  const description = data?.heroDescription || 'Professional, reliable, and stress-free moving services tailored to your needs.'
  const ctaText = data?.ctaText || 'Get Free Quote'
  const ctaLink = data?.ctaLink || '/contact'

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold">
                #1 Rated Moving Company
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              {title.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="inline-block mr-3"
                  style={{
                    background: index % 2 === 0 ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' : 'inherit',
                    WebkitBackgroundClip: index % 2 === 0 ? 'text' : 'inherit',
                    WebkitTextFillColor: index % 2 === 0 ? 'transparent' : 'inherit',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href={ctaLink}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-600 transition-all shadow-xl shadow-accent-500/30 flex items-center justify-center gap-2"
                >
                  {ctaText}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+97155611 4348"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <FaPhone />
                Call Now
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-gray-200"
            >
              {[
                { label: '10+ Years', sublabel: 'Experience' },
                { label: '50K+', sublabel: 'Happy Customers' },
                { label: '5.0', sublabel: 'Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary-600">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Animated illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Hero image */}
              <div className="relative w-full h-[600px] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional Moving Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl">📦</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl">🚚</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
