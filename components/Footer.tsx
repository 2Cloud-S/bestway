'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaTruck,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ],
  services: [
    { name: 'Residential Moving', href: '/services#residential' },
    { name: 'Commercial Moving', href: '/services#commercial' },
    { name: 'Long Distance', href: '/services#long-distance' },
    { name: 'Packing Services', href: '/services#packing' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/share/1GHJ8ASPFp/', color: 'hover:text-blue-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Main footer content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FaTruck className="text-accent-400 text-3xl" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold">Bestway</h3>
                  <p className="text-xs text-gray-300 -mt-1">For Moving</p>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for seamless moving experiences. We handle every aspect of your move with care and professionalism.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Al Ain, UAE
                </span>
              </li>
              <li>
                <a href="tel:+971556114348" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <FaPhone className="text-accent-400" />
                  <span>+971 55 611 4348</span>
                </a>
              </li>
              <li>
                <a href="mailto:Bestwaypackingandmoving.Com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <FaEnvelope className="text-accent-400" />
                  <span>Bestwaypackingandmoving.Com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon - Fri: 7AM - 9PM<br />
                  Sat - Sun: 8AM - 6PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="border-t border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>
              &copy; {currentYear} Bestway For Moving. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
