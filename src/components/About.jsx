import React from 'react'

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We are a team that continuously learns and evolves. We follow the latest technologies and apply them to our projects.',
    },
    {
      title: 'Customer Focus',
      description: 'Our customers\' success is our success. We prioritize customer satisfaction in every project.',
    },
    {
      title: 'Quality',
      description: 'We work to high standards, aiming for the best results in every project.',
    },
    {
      title: 'Reliability',
      description: 'We keep our promises, building trust through timely delivery and transparent communication.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-space-dark via-space-darker to-space-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            FlowVox AI, as a leading company in artificial intelligence and technology,
            <br />
            is a trusted partner in businesses' digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-4"></span>
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We develop innovative solutions to increase businesses' efficiency, reduce costs,
              and help them gain competitive advantage using artificial intelligence technologies.
              In every project, we understand our customers' needs and provide them with the most
              suitable technological solutions.
            </p>
          </div>

          <div className="space-y-6 bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-4"></span>
              Our Vision
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We aim to be a leading company in artificial intelligence in Turkey and worldwide,
              serving as a bridge connecting technology with the business world. We envision a future
              where every business can benefit from AI technologies, and we work to make this vision a reality.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Values
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/60 transition-all">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 animate-pulse opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Let's Work Together
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's find the most suitable solution for your project together.
                <br />
                We are with you on your digital transformation journey.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
