import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Bestway For Moving',
  description: 'Terms of Service for Bestway For Moving services in UAE',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-primary-100 text-lg">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By using Bestway For Moving's services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services. These terms apply to all users, customers, and visitors of our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bestway For Moving provides professional moving and packing services in the UAE, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Residential moving services</li>
                <li>Commercial moving and office relocation</li>
                <li>Professional packing and unpacking services</li>
                <li>Furniture disassembly and reassembly</li>
                <li>Storage solutions (where applicable)</li>
                <li>Transportation of goods within UAE</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Booking and Quotes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>3.1 Quotes:</strong> All quotes provided are estimates based on the information you provide. Final costs may vary based on actual services required, distance, volume, and unforeseen circumstances.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>3.2 Booking Confirmation:</strong> Your booking is confirmed only when you receive written confirmation from us via email or SMS. A deposit may be required to secure your booking.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>3.3 Accuracy of Information:</strong> You are responsible for providing accurate information about your moving requirements, including inventory lists, access restrictions, and special handling needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>4.1 Payment Methods:</strong> We accept cash, bank transfers, and credit/debit cards as payment methods.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>4.2 Payment Schedule:</strong> Payment terms will be specified in your service agreement. Typically, a deposit is required at booking, with the balance due upon completion of services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>4.3 Additional Charges:</strong> Additional charges may apply for services not included in the original quote, such as stairs, long carries, waiting time, or additional packing materials.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Cancellation and Rescheduling</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>5.1 By Customer:</strong> You may cancel or reschedule your move with at least 48 hours notice. Cancellations made with less notice may result in cancellation fees.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>5.2 By Company:</strong> We reserve the right to cancel or reschedule services due to unforeseen circumstances, extreme weather, or operational issues. We will provide as much notice as possible and work to accommodate your needs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>5.3 Refunds:</strong> Deposits are non-refundable unless the cancellation is made by Bestway For Moving.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Customer Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate information about items to be moved</li>
                <li>Disclose any fragile, valuable, or hazardous items</li>
                <li>Ensure access to both pickup and delivery locations</li>
                <li>Obtain necessary permissions for building access, parking, etc.</li>
                <li>Be present or have an authorized representative during the move</li>
                <li>Empty drawers, disconnect appliances, and prepare items as instructed</li>
                <li>Remove personal items from furniture before moving</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Liability and Insurance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>7.1 Basic Coverage:</strong> Our services include basic liability coverage. The extent of coverage will be detailed in your service agreement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>7.2 Excluded Items:</strong> We are not liable for damage to items that are improperly packed by the customer, items of extraordinary value (unless declared and additional insurance purchased), or damage resulting from natural disasters.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>7.3 Claims:</strong> Any damage claims must be reported in writing within 7 days of the move completion. Claims must include photos and detailed descriptions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>7.4 Additional Insurance:</strong> We recommend purchasing additional insurance for high-value items. We can provide information about insurance options.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Prohibited Items</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We cannot transport the following items:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Hazardous materials (flammable, explosive, corrosive substances)</li>
                <li>Illegal items or contraband</li>
                <li>Perishable food items</li>
                <li>Live plants or animals</li>
                <li>Cash, jewelry, or items of extraordinary value (unless properly declared)</li>
                <li>Important documents (we recommend you transport these personally)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for delays or failure to perform services due to circumstances beyond our control, including but not limited to: natural disasters, extreme weather, strikes, government actions, pandemics, or other acts of God.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>10.1 Communication First:</strong> We encourage you to contact us directly to resolve any issues or concerns.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>10.2 Mediation:</strong> If a dispute cannot be resolved through direct communication, both parties agree to attempt mediation before pursuing legal action.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>10.3 Governing Law:</strong> These terms are governed by the laws of the United Arab Emirates. Any disputes will be handled in the courts of Abu Dhabi, UAE.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Our total liability for any claim related to our services shall not exceed the total amount paid for those services. We are not liable for indirect, consequential, or punitive damages.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your personal information will be handled in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Modification of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service, together with your service agreement and our Privacy Policy, constitute the entire agreement between you and Bestway For Moving regarding our services.
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Email:</strong> Bestwaypackingandmoving.Com</li>
                <li><strong>Phone:</strong> +971 55 611 4348</li>
                <li><strong>Address:</strong> Al Ain, Abu Dhabi, United Arab Emirates</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
