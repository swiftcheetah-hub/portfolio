import React from 'react'
import { Star, Quote } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Property Buyer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'Sarah and Michael made our home buying experience seamless. Their expertise and attention to detail helped us find our dream home. Highly recommend!',
      property: 'Modern Luxury Villa',
    },
    {
      id: 2,
      name: 'David Thompson',
      role: 'Property Seller',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'Outstanding service from start to finish. They sold our property above asking price in just 2 weeks. Professional, knowledgeable, and always available.',
      property: 'Downtown Penthouse',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Property Buyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'The best real estate team we\'ve worked with. They understood our needs perfectly and found us a property that exceeded all expectations.',
      property: 'Beachfront Estate',
    },
    {
      id: 4,
      name: 'Robert Chen',
      role: 'Investor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 5,
      text: 'Professional, efficient, and results-driven. They helped us build a diverse property portfolio. Their market knowledge is exceptional.',
      property: 'Multiple Properties',
    },
    {
      id: 5,
      name: 'Amanda Wilson',
      role: 'Property Buyer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      rating: 5,
      text: 'Sarah and Michael are true professionals. They guided us through every step and made the entire process stress-free. Thank you!',
      property: 'Urban Loft',
    },
    {
      id: 6,
      name: 'James Anderson',
      role: 'Property Seller',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'Exceptional service! They marketed our property beautifully and negotiated an excellent deal. We couldn\'t be happier with the results.',
      property: 'Mountain View Mansion',
    },
  ]

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/50 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>

              {/* Property */}
              <div className="text-sm text-primary mb-4 font-medium">
                Property: {review.property}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
