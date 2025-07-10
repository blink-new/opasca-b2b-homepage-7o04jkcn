import { Star, Trophy, Award } from 'lucide-react'

export default function TrustedBySection() {
  const logos = [
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_UKB.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_CGC.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_UKD.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Erlangen.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Freiburg.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Gttingen.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Hamburg.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Heidelberg.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Kln.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Mainz.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_LMU.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_MRIIsar.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Stuttgart.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Tbingen.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Ulm.png',
  ]

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-white via-opasca-light-gray to-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-opasca-accent/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-opasca-accent/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-primary/10 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-opasca-accent" />
            <span className="text-sm font-medium text-opasca-accent">TOP-RATED</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-opasca-text-dark mb-6">
            <span className="relative">
              15 der TOP 25 Kliniken
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full opacity-30"></div>
            </span>
            <br />
            <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent">
              in Deutschland
            </span>
            <br />
            <span className="text-opasca-text-muted">vertrauen bereits OPASCA</span>
          </h2>
          
          <p className="text-lg text-opasca-text-muted max-w-3xl mx-auto leading-relaxed">
            Diese neuesten Top-Klinik-Empfehlungen sind in der renommierten FOCUS-Klinik-Empfehlungsliste enthalten 
            und geben Patienten eine nützliche Orientierungshilfe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary/10 rounded-2xl mx-auto mb-4">
                  <Award className="w-8 h-8 text-opasca-accent" />
                </div>
                <div className="text-4xl font-bold text-opasca-text-dark mb-2">1000+</div>
                <div className="text-opasca-text-muted font-medium">Krankenhäuser analysiert</div>
              </div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary/10 rounded-2xl mx-auto mb-4">
                  <Star className="w-8 h-8 text-opasca-accent" />
                </div>
                <div className="text-4xl font-bold text-opasca-text-dark mb-2">14.000+</div>
                <div className="text-opasca-text-muted font-medium">Kliniken bewertet</div>
              </div>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary/10 rounded-2xl mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-opasca-accent" />
                </div>
                <div className="text-4xl font-bold text-opasca-text-dark mb-2">TOP 25</div>
                <div className="text-opasca-text-muted font-medium">Deutschland-Ranking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                      <img 
                        src={logo} 
                        alt="Top Klinik Logo" 
                        className="h-16 w-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-opasca-text-muted max-w-4xl mx-auto leading-relaxed">
            Das Rechercheinstitut FactField hat für die FOCUS-Klinikliste eine umfangreiche Auswertung durchgeführt, 
            bei der mehrere Faktoren wie die medizinische Qualität, Reputation, Pflege- und Hygienestandards 
            sowie Vorjahresempfehlungen der Kliniken berücksichtigt wurden.
          </p>
        </div>
      </div>
    </section>
  )
}