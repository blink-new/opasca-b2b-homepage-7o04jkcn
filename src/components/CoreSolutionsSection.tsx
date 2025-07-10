import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function CoreSolutionsSection() {
  return (
    <section id="solutions-section" className="py-20 bg-opasca-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-opasca-text-dark mb-6">
            Unsere Kernlösungen
          </h2>
          <p className="text-lg sm:text-xl text-opasca-text-dark/80 max-w-3xl mx-auto">
            Maßgeschneiderte Digitalisierungslösungen für jeden Bereich Ihrer medizinischen Einrichtung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Safety Suite Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              {/* Background Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://opasca.com/wp-content/uploads/2023/04/ETHOS_Varian_digital_animation.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-opasca-primary/70 group-hover:bg-opasca-primary/60 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                    Safety Suite für Strahlentherapie
                  </h3>
                  <p className="text-lg text-white/90 mb-6 max-w-sm mx-auto">
                    Unübertroffene Sicherheit und Effizienz für Ihre Strahlentherapie-Workflows.
                  </p>
                </div>
                
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm group-hover:bg-white group-hover:text-opasca-primary transition-all duration-300"
                >
                  Jetzt entdecken
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Patient Management Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-80 sm:h-96 lg:h-[500px]">
              {/* Background Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://opasca.com/wp-content/uploads/2024/02/OPASCA_Startseite_digital_animation.mp4" type="video/mp4" />
              </video>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-opasca-accent/70 group-hover:bg-opasca-accent/60 transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                    InClinic Patientenmanagement
                  </h3>
                  <p className="text-lg text-white/90 mb-6 max-w-sm mx-auto">
                    Digitale Klinik: Health Journey 4.0 - Optimieren Sie die gesamte klinische Patientenreise.
                  </p>
                </div>
                
                <Button 
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm group-hover:bg-white group-hover:text-opasca-accent transition-all duration-300"
                >
                  Unsere Komplettlösung
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}