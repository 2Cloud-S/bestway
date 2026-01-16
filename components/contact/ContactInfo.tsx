'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF } from 'react-icons/fa'
import { ContactInfo as ContactInfoType } from '@/types'

interface ContactInfoProps {
  data: ContactInfoType | null
}

const defaultContactInfo = {
  email: 'Bestwaypackingandmoving.Com',
  phone: '+971 55 611 4348',
  address: 'Al Ain',
  city: 'Al Ain',
  state: 'UAE',
  zip: '',
  openingHours: 'Mon - Fri: 7AM - 9PM\nSat - Sun: 8AM - 6PM',
  socialMedia: {
    facebook: 'https://www.facebook.com/share/1GHJ8ASPFp/',
  },
}

export default function ContactInfo({ data }: ContactInfoProps) {
  const info = data || defaultContactInfo
  const fullAddress = `${info.address}, ${info.city}, ${info.state} ${info.zip}`

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: info.phone,
      link: `tel:${info.phone}`,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: info.email,
      link: `mailto:${info.email}`,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: fullAddress,
      link: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
      color: 'from-red-500 to-red-600',
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: info.openingHours,
      link: null,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  const socialLinks = [
    { icon: FaFacebookF, url: info.socialMedia?.facebook, color: 'hover:text-blue-600' },
  ].filter(link => link.url)

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
        <p className="text-gray-600">We're here to help with all your moving needs</p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 10 }}
          >
            {method.link ? (
              <a
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                      <method.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{method.content}</p>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                    <method.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{method.content}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Social Media */}
      {socialLinks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="bg-accent-50 border-2 border-accent-200 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" />
          <h3 className="font-bold text-gray-900">24/7 Emergency Service</h3>
        </div>
        <p className="text-gray-600">
          Need immediate assistance? We're available around the clock for urgent moving needs.
        </p>
      </motion.div>
    </motion.div>
  )
}
