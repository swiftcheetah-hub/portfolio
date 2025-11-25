import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bed, Bath, Square, MapPin, ArrowRight, Building2, Star, Filter } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Properties = () => {
  const [filter, setFilter] = useState('all')
  const navigate = useNavigate()
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 })

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: 4500000,
      beds: 5,
      baths: 6,
      sqft: 6500,
      image: 'https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYyODU2NzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'villas',
      featured: true,
      agent: 'Sarah Mitchell',
    },
    {
      id: 2,
      title: 'Contemporary Penthouse',
      location: 'Manhattan, NY',
      price: 3200000,
      beds: 3,
      baths: 4,
      sqft: 3800,
      image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2Mjg3ODI4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'apartments',
      featured: true,
      agent: 'Michael Chen',
    },
    {
      id: 3,
      title: 'Elegant Modern Estate',
      location: 'Miami Beach, FL',
      price: 5800000,
      beds: 6,
      baths: 7,
      sqft: 8200,
      image: 'https://images.unsplash.com/photo-1638369022547-1c763b1b9b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZXxlbnwxfHx8fDE3NjI4ODgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'houses',
      featured: false,
      agent: 'Sarah Mitchell',
    },
    {
      id: 4,
      title: 'Stylish Urban Apartment',
      location: 'San Francisco, CA',
      price: 1950000,
      beds: 2,
      baths: 2,
      sqft: 2100,
      image: 'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI5MjQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'apartments',
      featured: false,
      agent: 'Michael Chen',
    },
    {
      id: 5,
      title: 'Contemporary Masterpiece',
      location: 'Los Angeles, CA',
      price: 6200000,
      beds: 7,
      baths: 8,
      sqft: 9500,
      image: 'https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2Mjg1MzQ3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'houses',
      featured: true,
      agent: 'Sarah Mitchell',
    },
    {
      id: 6,
      title: 'Luxury Design Residence',
      location: 'Austin, TX',
      price: 2750000,
      beds: 4,
      baths: 5,
      sqft: 5200,
      image: 'https://images.unsplash.com/photo-1689346547653-c165d6c1bef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYyOTQwNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      type: 'houses',
      featured: false,
      agent: 'Michael Chen',
    },
  ]

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type === filter)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const filterOptions = [
    { id: 'all', label: 'All Properties' },
    { id: 'houses', label: 'Houses' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'villas', label: 'Villas' },
  ]

  return (
    <section id="properties" ref={sectionRef} className={`py-24 px-4 sm:px-6 lg:px-8 bg-dark section-animate section-fade-up ${sectionVisible ? 'animate-in' : ''}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Featured Properties
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our handpicked selection of luxury properties in prime locations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions.map((filterOption) => (
            <button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === filterOption.id
                  ? 'bg-primary text-black border-2 border-primary'
                  : 'bg-transparent border-2 border-primary/30 text-primary hover:border-primary/50'
              }`}
            >
              <Filter className={`w-4 h-4 ${filter === filterOption.id ? 'text-black' : 'text-primary'}`} />
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, idx) => (
            <div
              key={property.id}
              className={`bg-dark-lighter rounded-2xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer section-animate section-scale ${sectionVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onClick={() => navigate(`/property/${property.id}`)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Featured Tag */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-primary rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 text-black fill-black" />
                    <span className="text-black text-sm font-semibold">Featured</span>
                  </div>
                )}
                
                {/* Price Overlay */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="text-primary font-bold text-lg">{formatPrice(property.price)}</div>
                </div>
              </div>

              {/* Content - White Background Section */}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{property.title}</h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  {property.location}
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  Listed by <span className="font-semibold text-gray-700">{property.agent}</span>
                </div>

                {/* View Details Button */}
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties
