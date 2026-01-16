import ServiceDetail from '@/components/services/ServiceDetail'

export const metadata = {
  title: 'Commercial Moving Services - Bestway For Moving',
  description: 'Professional office and business relocation services in UAE. Minimize downtime and keep your business running.',
}

export default function CommercialMovingPage() {
  const serviceData = {
    title: 'Commercial Moving Services',
    description: 'Relocate your business with minimal disruption. Our commercial moving services are designed to get your office up and running quickly in your new location.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    features: [
      'After-hours moving available',
      'IT equipment handling and setup',
      'Office furniture disassembly/reassembly',
      'Minimal business disruption',
      'Dedicated project manager',
      'Secure document handling',
      'Equipment installation assistance',
      'Customized moving plans',
    ],
    process: [
      {
        step: '1',
        title: 'Site Assessment',
        description: 'We evaluate your current office and new location to create a detailed plan.',
      },
      {
        step: '2',
        title: 'Strategic Planning',
        description: 'Develop a timeline that minimizes downtime for your business operations.',
      },
      {
        step: '3',
        title: 'Professional Execution',
        description: 'Our team executes the move efficiently, often during off-hours.',
      },
      {
        step: '4',
        title: 'Setup & Testing',
        description: 'We help set up your new office and ensure everything works perfectly.',
      },
    ],
    pricing: {
      starting: 'Custom Quote',
      note: 'Pricing based on office size, equipment, and specific business requirements.',
    },
  }

  return <ServiceDetail data={serviceData} />
}
