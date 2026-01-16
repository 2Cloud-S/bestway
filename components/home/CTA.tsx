'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaPhone } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-1/2 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -bottom-1/2 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-6xl mb-8"
            >
              📦🚚
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Make Your Move?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
              Get a free, no-obligation quote today and experience the difference of working with professionals who care.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-accent-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  Get Free Quote
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+971556114348"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-accent-600 transition-all flex items-center justify-center gap-3"
              >
                <FaPhone />
                +971 55 611 4348
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/80 mt-8"
            >
              Available 24/7 • Free Consultation • No Hidden Fees
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
