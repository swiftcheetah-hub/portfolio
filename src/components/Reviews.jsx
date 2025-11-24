import React from 'react'
import { Star, Quote } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Jennifer Williams',
      role: 'CEO, Tech Startup',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'Sarah helped us find our dream home in Beverly Hills. Her expertise and attention to detail made the entire process seamless. Highly recommended!',
      property: 'Luxury Villa, Beverly Hills',
      agent: 'Sarah Mitchell',
    },
    {
      id: 2,
      name: 'David Thompson',
      role: 'Investment Banker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'Michael\'s knowledge of the commercial real estate market is outstanding. He secured us an amazing deal on a prime Manhattan property.',
      property: 'Penthouse, Manhattan',
      agent: 'Michael Chen',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'Working with Sarah was an absolute pleasure. She understood exactly what we were looking for and delivered beyond our expectations.',
      property: 'Modern Estate, Miami',
      agent: 'Sarah Mitchell',
    },
    {
      id: 4,
      name: 'Robert Chang',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 5,
      text: 'Michael made selling our property incredibly easy. His marketing strategy and negotiation skills resulted in a sale above asking price!',
      property: 'Residence, Austin',
      agent: 'Michael Chen',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Medical Professional',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      rating: 5,
      text: 'Sarah\'s professionalism and market knowledge are unmatched. She guided us through every step and we couldn\'t be happier with our new home.',
      property: 'Masterpiece, Los Angeles',
      agent: 'Sarah Mitchell',
    },
    {
      id: 6,
      name: 'James Miller',
      role: 'Corporate Executive',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'Michael\'s expertise in luxury real estate is exceptional. He found us the perfect property and negotiated excellent terms.',
      property: 'Urban Apartment, San Francisco',
      agent: 'Michael Chen',
    },
  ]

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-dark-light rounded-xl p-6 border border-primary/30 relative hover:border-primary/50 transition-all duration-300"
            >
              {/* Large Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-16 h-16 text-primary/20" />
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white mb-4 leading-relaxed">{review.text}</p>

              {/* Property */}
              <div className="text-sm text-gray-400 mb-2">
                {review.property}
              </div>

              {/* Agent */}
              <div className="text-sm text-primary font-medium">
                Agent: {review.agent}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-dark-light rounded-xl p-8 border border-primary/20">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">4.9/5.0</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">350+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">98%</div>
              <div className="text-gray-400 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
