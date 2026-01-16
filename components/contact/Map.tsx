'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  latitude: number
  longitude: number
}

export default function Map({ latitude, longitude }: MapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only initialize if map hasn't been created yet
    if (!mapRef.current && containerRef.current) {
      // Fix for default marker icon
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      // Create map
      const map = L.map(containerRef.current).setView([latitude, longitude], 13)
      mapRef.current = map

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Add marker with popup
      const marker = L.marker([latitude, longitude]).addTo(map)

      const popupContent = `
        <div style="text-align: center; padding: 8px;">
          <h3 style="font-weight: bold; font-size: 1.125rem; margin-bottom: 4px;">Bestway For Moving</h3>
          <p style="font-size: 0.875rem; color: #4B5563; margin-bottom: 8px;">Visit us at our office</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}"
            target="_blank"
            rel="noopener noreferrer"
            style="color: #0284c7; font-size: 0.875rem; font-weight: 600; text-decoration: none;"
          >
            Get Directions →
          </a>
        </div>
      `

      marker.bindPopup(popupContent)
    }

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [latitude, longitude])

  return (
    <div
      ref={containerRef}
      style={{ height: '500px', width: '100%' }}
      className="z-0 rounded-lg"
    />
  )
}
