import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata = {
  title: 'Residential Moving Services - Bestway For Moving',
  description: 'Professional home moving services in UAE. Expert packing, careful handling, and reliable delivery.',
}

export default function ResidentialMovingPage() {
  const serviceData = {
    title: 'Residential Moving Services',
    description: 'Make your home move stress-free with our professional residential moving services. We handle everything from packing to unpacking, ensuring your belongings arrive safely at your new home.',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Professional packing and unpacking',
      'Furniture disassembly and reassembly',
      'Safe and secure transportation',
      'Fragile items special handling',
      'Storage solutions available',
      'Insurance coverage included',
      'Experienced and trained movers',
      'Flexible scheduling options',
    ],
    process: [
      {
        step: '1',
        title: 'Free Consultation',
        description: 'We visit your home to assess your moving needs and provide a detailed quote.',
      },
      {
        step: '2',
        title: 'Packing & Preparation',
        description: 'Our team carefully packs your belongings using quality materials.',
      },
      {
        step: '3',
        title: 'Safe Transportation',
        description: 'We transport your items safely to your new home with our modern fleet.',
      },
      {
        step: '4',
        title: 'Unpacking & Setup',
        description: 'We help unpack and set up your new home exactly how you want it.',
      },
    ],
    pricing: {
      starting: 'Custom Quote',
      note: 'Contact us for a personalized quote based on your specific moving needs.',
    },
  }

  return <ServiceDetail data={serviceData} />
}
