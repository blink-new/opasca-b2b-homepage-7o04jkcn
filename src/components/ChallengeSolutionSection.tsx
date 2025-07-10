import { AlertTriangle, Target, Clock, Users, Zap, Shield, BarChart3, CheckCircle } from 'lucide-react'

export default function ChallengeSolutionSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      
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
            <span className="text-sm font-medium text-opasca-accent">PROBLEM & LÖSUNG</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-opasca-text-dark mb-6">
            <span className="text-red-600">Herausforderungen</span> werden zu{' '}
            <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent">
              Chancen
            </span>
          </h2>
          
          <p className="text-lg text-opasca-text-muted max-w-3xl mx-auto leading-relaxed">
            Während das Gesundheitswesen mit komplexen Herausforderungen kämpft, 
            schaffen wir innovative Lösungen, die echte Verbesserungen bewirken.
          </p>
        </div>

        {/* Challenge vs Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Challenge Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 rounded-full mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                  Die Herausforderung
                </span>
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-opasca-text-dark mb-4">
                Überlastetes Personal,
                <br />
                ineffiziente Abläufe?
              </h3>
              <p className="text-opasca-text-muted leading-relaxed">
                Ihre Teams sind durch administrative Aufgaben überlastet, die Wartezeiten für Patienten steigen 
                und unverbundene Systeme schaffen Reibung. Das beeinträchtigt sowohl die Arbeitsmoral als auch 
                die Qualität der Patientenversorgung.
              </p>
            </div>

            {/* Challenge Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Zeitverschwendung</h4>
                  <p className="text-sm text-opasca-text-muted">
                    Manuelle Prozesse und Doppelarbeit durch fehlende Systemintegration
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Personalengpässe</h4>
                  <p className="text-sm text-opasca-text-muted">
                    Begrenzte Ressourcen werden durch ineffiziente Abläufe weiter eingeschränkt
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Qualitätsverlust</h4>
                  <p className="text-sm text-opasca-text-muted">
                    Stress und Überlastung beeinträchtigen die Patientenversorgung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                  Die OPASCA-Lösung
                </span>
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-opasca-text-dark mb-4">
                Automatisieren, integrieren
                <br />
                und <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent">stärken</span>
              </h3>
              <p className="text-opasca-text-muted leading-relaxed">
                Unsere modularen Lösungen digitalisieren die gesamte Patientenreise. Von automatisierten Check-ins 
                bis hin zu Echtzeit-Sicherheitsprüfungen in der Radiotherapie verbinden wir Ihre Systeme, 
                entlasten Ihr Personal und stellen Patienten in den Mittelpunkt ihrer eigenen Versorgung.
              </p>
            </div>

            {/* Solution Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-opasca-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Automatisierung</h4>
                  <p className="text-sm text-opasca-text-muted">
                    Intelligente Workflows reduzieren manuelle Aufgaben um bis zu 70%
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-opasca-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Systemintegration</h4>
                  <p className="text-sm text-opasca-text-muted">
                    Nahtlose Verbindung aller Systeme für einen reibungslosen Datenfluss
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors duration-300">
                  <Target className="w-6 h-6 text-opasca-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Personalentlastung</h4>
                  <p className="text-sm text-opasca-text-muted">
                    Mehr Zeit für die wirklich wichtigen Aufgaben: die Patientenversorgung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-primary/10 rounded-2xl border border-opasca-accent/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-opasca-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-opasca-accent">
                Bereit für die Transformation?
              </span>
            </div>
            <div className="text-sm text-opasca-text-muted">
              Lassen Sie uns gemeinsam Ihre Herausforderungen lösen
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}