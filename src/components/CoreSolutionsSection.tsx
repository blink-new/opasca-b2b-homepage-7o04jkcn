import { ArrowRight, Shield, Users, Zap, Target, Sparkles, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export default function CoreSolutionsSection() {
  return (
    <section id="solutions-section" className="relative py-16 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-opasca-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-primary/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-opasca-accent" />
            <span className="text-sm font-medium text-opasca-accent uppercase tracking-wide">
              Kern-Lösungen
            </span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-opasca-text-dark mb-6">
            Zwei{' '}
            <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent">
              revolutionäre Lösungen
            </span>
            <br />
            <span className="text-opasca-text-muted">für maximale Effizienz</span>
          </h2>
          
          <p className="text-lg text-opasca-text-muted max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere beiden Hauptlösungen, die speziell entwickelt wurden, 
            um Ihre klinischen Abläufe zu optimieren und die Patientenversorgung zu verbessern.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Safety Suite Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500">
              
              {/* Card Header */}
              <div className="relative h-64 bg-gradient-to-br from-red-500 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Background Video */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                  <source src="https://opasca.com/wp-content/uploads/2023/04/ETHOS_Varian_digital_animation.mp4" type="video/mp4" />
                </video>
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                
                {/* Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full">
                  <span className="text-xs font-medium text-white uppercase tracking-wide">
                    Strahlentherapie
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-opasca-text-dark mb-2">
                      Safety Suite für Strahlentherapie
                    </h3>
                    <p className="text-opasca-text-muted">
                      Unübertroffene Sicherheit und Effizienz für Ihre Radiotherapie-Workflows
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-opasca-text-dark">
                      Echtzeit-Sicherheitsprüfungen
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-opasca-text-dark">
                      Automatisierte Workflow-Optimierung
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium text-opasca-text-dark">
                      Nahtlose Systemintegration
                    </span>
                  </div>
                </div>
                
                {/* CTA */}
                <Button 
                  className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:from-red-600 group-hover:to-pink-700"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Patient Management Card */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-opasca-accent/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group-hover:shadow-3xl transition-all duration-500">
              
              {/* Card Header */}
              <div className="relative h-64 bg-gradient-to-br from-opasca-accent to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Background Video */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                  <source src="https://opasca.com/wp-content/uploads/2024/02/OPASCA_Startseite_digital_animation.mp4" type="video/mp4" />
                </video>
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                
                {/* Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full">
                  <span className="text-xs font-medium text-white uppercase tracking-wide">
                    Patientenmanagement
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-opasca-text-dark mb-2">
                      InClinic Patientenmanagement
                    </h3>
                    <p className="text-opasca-text-muted">
                      Optimieren Sie die gesamte klinische Reise von der Ankunft bis zur Entlassung
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-opasca-accent rounded-full"></div>
                    <span className="text-sm font-medium text-opasca-text-dark">
                      Digitale Patientenreise
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-opasca-accent rounded-full"></div>
                    <span className="text-sm font-medium text-opasca-text-dark">
                      Automatisierte Check-in-Prozesse
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-opasca-accent rounded-full"></div>
                    <span className="text-sm font-medium text-opasca-text-dark">
                      Echtzeit-Kommunikation
                    </span>
                  </div>
                </div>
                
                {/* CTA */}
                <Button 
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-primary/10 rounded-2xl border border-opasca-accent/20">
            <div className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-opasca-accent" />
              <span className="text-sm font-medium text-opasca-accent">
                Beide Lösungen kombinierbar
              </span>
            </div>
            <div className="text-sm text-opasca-text-muted">
              Für maximale Effizienz und Patientenzufriedenheit
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}