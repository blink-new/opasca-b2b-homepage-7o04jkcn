import { Clock, Shield, AlertTriangle, ArrowRight } from 'lucide-react'

export default function ChallengeSolutionSection() {
  return (
    <section className="py-20 bg-opasca-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* The Challenge */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-opasca-text-dark">
                  Überlastetes Personal, ineffiziente Workflows?
                </h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-opasca-text-dark/80 leading-relaxed">
                Ihre Teams sind durch administrative Aufgaben überlastet, die Wartezeiten der Patienten steigen, und unverbundene Systeme schaffen Reibung. Dies beeinträchtigt sowohl die Moral der Mitarbeiter als auch die Qualität der Patientenversorgung.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center text-opasca-text-dark/70">
                  <Clock className="w-5 h-5 mr-3 text-red-500" />
                  <span>Verschwendete Zeit durch manuelle Prozesse</span>
                </div>
                <div className="flex items-center text-opasca-text-dark/70">
                  <AlertTriangle className="w-5 h-5 mr-3 text-red-500" />
                  <span>Erhöhte Fehlerquote durch Medienbrüche</span>
                </div>
                <div className="flex items-center text-opasca-text-dark/70">
                  <Clock className="w-5 h-5 mr-3 text-red-500" />
                  <span>Längere Wartezeiten für Patienten</span>
                </div>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-opasca-accent to-opasca-accent/90 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-heading text-2xl md:text-3xl font-bold">
                  Automatisieren, Integrieren und Stärken.
                </h3>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-white/90 leading-relaxed">
                Unsere modularen Lösungen digitalisieren die gesamte Patientenreise. Von automatisierten Check-ins bis hin zu Echtzeit-Sicherheitschecks in der Radiotherapie – wir verbinden Ihre Systeme, entlasten Ihr Personal und stellen die Patienten in den Mittelpunkt ihrer eigenen Versorgung.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center text-white/90">
                  <ArrowRight className="w-5 h-5 mr-3 text-white" />
                  <span>End-to-End Workflow-Digitalisierung</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Shield className="w-5 h-5 mr-3 text-white" />
                  <span>Erhöhte Patientensicherheit</span>
                </div>
                <div className="flex items-center text-white/90">
                  <ArrowRight className="w-5 h-5 mr-3 text-white" />
                  <span>Entlastung des Fachpersonals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}