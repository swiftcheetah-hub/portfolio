import React from 'react'
import { Award, Target, Lightbulb, TrendingUp, Shield, Heart, Users, CheckCircle, Trophy } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Total Sales Volume', value: '$250M+', icon: TrendingUp },
    { label: 'Properties Sold', value: '380+', icon: Award },
    { label: 'Happy Clients', value: '350+', icon: Users },
    { label: 'Client Satisfaction', value: '98%', icon: Heart },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in every transaction, ensuring transparency and trust.',
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your goals are our priority. We listen, understand, and deliver personalized solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and marketing strategies to showcase your property.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to exceeding expectations with exceptional service and attention to detail.',
    },
  ]

  const agents = [
    {
      name: 'Sarah Mitchell',
      role: 'Senior Real Estate Agent & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
      description: 'With over 15 years of experience in luxury real estate, Sarah has built a reputation for exceptional service and market expertise. Her dedication to understanding client needs and delivering personalized solutions has made her one of the top agents in the region.',
      specialties: ['Luxury Residential', 'Investment Properties', 'Waterfront Estates'],
      education: 'MBA, Harvard Business School',
      certifications: [
        'Certified Luxury Home Marketing Specialist',
        "Accredited Buyer's Representative",
      ],
      achievements: [
        'Top 1% of agents nationwide',
        '$150M+ in career sales',
        '200+ satisfied clients',
      ],
    },
    {
      name: 'Michael Chen',
      role: 'Senior Real Estate Agent & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      description: 'Michael brings 12 years of diverse real estate experience, specializing in both commercial and high-end residential properties. His analytical approach and negotiation skills have helped countless clients achieve their real estate goals and maximize their investments.',
      specialties: ['Commercial Real Estate', 'New Developments', 'Property Investment'],
      education: 'B.S. Finance, UC Berkeley',
      certifications: [
        'Certified Commercial Investment Member',
        'Senior Real Estate Specialist',
      ],
      achievements: [
        'Multi-million dollar deal closer',
        '$100M+ in career sales',
        '180+ successful transactions',
      ],
    },
  ]

  const timeline = [
    {
      year: '2010',
      title: 'Founded Elite Properties',
      description: 'Started with a vision to redefine luxury real estate',
    },
    {
      year: '2015',
      title: 'Reached $50M in Sales',
      description: 'Milestone achievement in our first 5 years',
    },
    {
      year: '2018',
      title: 'Expanded Team',
      description: 'Grew to become a leading agency in the region',
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched virtual tours and advanced marketing',
    },
    {
      year: '2023',
      title: '$250M Total Sales',
      description: 'Celebrated over 380 successful transactions',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Awarded Top Real Estate Team of the Year',
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        {/* About Elite Properties Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            About Elite Properties
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded on the principles of excellence, integrity, and innovation, Elite Properties has become a trusted name in luxury real estate. Our mission is to deliver exceptional results while building lasting relationships with our clients.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="bg-dark-lighter rounded-xl p-6 border border-primary/30 text-center"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Our Story Section */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Our Story</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content - Left Side */}
            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Elite Properties was born from a shared vision between Sarah Mitchell and Michael Chen to revolutionize the luxury real estate experience. After years of working independently and witnessing the gaps in traditional real estate services, they decided to create an agency that puts clients first and delivers exceptional results.
              </p>
              <p>
                What started as a two-person operation has grown into one of the most respected real estate teams in the region. Our success is built on a foundation of integrity, market expertise, and an unwavering commitment to our clients' goals.
              </p>
              <p>
                Today, we continue to push boundaries, embracing innovative technology and marketing strategies while maintaining the personal touch that has become our hallmark. Every property we represent and every client we serve receives our full dedication and expertise.
              </p>
            </div>

            {/* Image Grid - Right Side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80"
                  alt="Property Model"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                  alt="Modern Living Room"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1600585152915-d0bec72a0df0?w=600&q=80"
                  alt="Modern House Exterior"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80"
                  alt="Interior Space"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Values Section */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">Our Core Values</h3>
          <p className="text-center text-gray-300 mb-12 text-lg">
            These principles guide everything we do and define who we are as a team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="bg-dark-lighter rounded-xl p-6 border border-gray-700 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">Meet Our Team</h3>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Get to know the experienced professionals dedicated to your real estate success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agents.map((agent, idx) => (
              <div
                key={idx}
                className="bg-dark-lighter rounded-2xl overflow-hidden border border-gray-700"
              >
                {/* Agent Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Name and Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{agent.name}</h4>
                    <p className="text-primary font-semibold">{agent.role}</p>
                  </div>
                </div>

                {/* Agent Details */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{agent.description}</p>

                  {/* Specialties */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Specialties</h5>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-dark border border-primary/30 text-primary text-sm rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h5 className="text-white font-semibold mb-2">Education</h5>
                    <p className="text-gray-300">{agent.education}</p>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Certifications</h5>
                    <ul className="space-y-2">
                      {agent.certifications.map((cert, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {agent.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <Trophy className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey Timeline Section */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">Our Journey</h3>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Key milestones that have shaped our growth and success
          </p>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 bg-dark-lighter rounded-xl p-6 border border-gray-700">
                    <div className={`text-primary font-bold text-lg mb-2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {item.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark z-10 flex-shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
