import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredAgent: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredAgent: '',
      message: '',
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={sectionRef} className={`py-24 px-4 sm:px-6 lg:px-8 bg-dark section-animate section-fade-up ${sectionVisible ? 'animate-in' : ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to find your dream property? Contact us today and let's make it happen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel - Contact Form */}
          <div className="bg-dark-light rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Preferred Agent
                </label>
                <input
                  type="text"
                  name="preferredAgent"
                  value={formData.preferredAgent}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Select an agent (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your property needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-dark-light rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-400 text-sm mt-1">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@eliteproperties.com</p>
                    <p className="text-gray-400 text-sm mt-1">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Office</h4>
                    <p className="text-gray-300">
                      9200 Sunset Blvd, Suite 500
                      <br />
                      Los Angeles, CA 90069
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Agents Card */}
            <div className="bg-dark-light rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Agents</h3>
              <div className="space-y-6">
                {/* Sarah Mitchell */}
                <div className="bg-dark rounded-xl p-4 border border-primary/20">
                  <h4 className="font-bold text-lg mb-1 text-white">Sarah Mitchell</h4>
                  <p className="text-primary text-sm mb-2">Senior Real Estate Agent</p>
                  <p className="text-gray-400 text-sm">sarah@eliteproperties.com</p>
                  <p className="text-gray-400 text-sm">+1 (555) 234-5678</p>
                </div>

                {/* Michael Chen */}
                <div className="bg-dark rounded-xl p-4 border border-primary/20">
                  <h4 className="font-bold text-lg mb-1 text-white">Michael Chen</h4>
                  <p className="text-primary text-sm mb-2">Senior Real Estate Agent</p>
                  <p className="text-gray-400 text-sm">michael@eliteproperties.com</p>
                  <p className="text-gray-400 text-sm">+1 (555) 345-6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
