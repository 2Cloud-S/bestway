'use client'

import { motion } from 'framer-motion'
import { TeamMember } from '@/types'

interface TeamProps {
  data: TeamMember[]
}

const defaultTeam = [
  {
    _key: '1',
    name: 'Arif',
    position: 'CEO',
    bio: 'Leading Bestway For Moving with expertise and commitment to providing exceptional moving services across the UAE.',
    image: null,
  },
]

export default function Team({ data }: TeamProps) {
  const team = data.length > 0 ? data : defaultTeam

  if (team.length === 0) return null

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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The dedicated professionals who make your move possible
          </p>
        </motion.div>

        <div className="flex justify-center max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member._key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="w-full max-w-md"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Avatar/Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white text-8xl font-bold"
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-semibold mb-4">
                    {member.position}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
