import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata = {
  title: 'Professional Packing Services - Bestway For Moving',
  description: 'Expert packing services in UAE. Quality materials and careful handling for all your belongings.',
}

export default function PackingServicesPage() {
  const serviceData = {
    title: 'Professional Packing Services',
    description: 'Let our experts handle the packing! We use high-quality materials and proven techniques to ensure your belongings are protected during transit.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    features: [
      'High-quality packing materials',
      'Fragile items special protection',
      'Custom crating for valuables',
      'Systematic labeling system',
      'Unpacking services available',
      'Eco-friendly packing options',
      'Electronics packing expertise',
      'Art and antiques handling',
    ],
    process: [
      {
        step: '1',
        title: 'Items Assessment',
        description: 'We evaluate all items and determine the best packing method for each.',
      },
      {
        step: '2',
        title: 'Material Preparation',
        description: 'We bring all necessary packing materials and supplies to your location.',
      },
      {
        step: '3',
        title: 'Professional Packing',
        description: 'Our trained team carefully packs each item with appropriate protection.',
      },
      {
        step: '4',
        title: 'Labeling & Inventory',
        description: 'Every box is labeled and inventoried for easy tracking and unpacking.',
      },
    ],
    pricing: {
      starting: 'Custom Quote',
      note: 'Contact us for a personalized quote based on your packing requirements.',
    },
  }

  return <ServiceDetail data={serviceData} />
}
