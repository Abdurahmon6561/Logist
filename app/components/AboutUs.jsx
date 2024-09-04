import React from 'react'

const AboutUs = () => {
  return (
    <div>
            <section id="about-content" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 px-2">
            Starting from humble beginnings, we`ve evolved into the leading
            power-only logistics company with the largest network of qualified
            carriers across the United States.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">SAFETY</h3>
              <p>
                The safety of our carriers and our customers trailers is our top
                priority. We meticulously screen every motor carrier before they
                handle any transport.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">RELIABILITY</h3>
              <p>
                Our commitment is our promise. We recognize the importance of
                strict schedules for both our carriers and customers. We monitor
                every shipment closely to ensure on-time delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">COVERAGE</h3>
              <p>
                Unforeseen events can occur. We build trust with our customers
                by personally securing all necessary insurance coverage
                certificates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs