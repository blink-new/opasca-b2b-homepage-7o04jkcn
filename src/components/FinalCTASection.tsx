import { Button } from './ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

export default function FinalCTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="cta-section" className="py-20 bg-opasca-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-opasca-accent/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bereit, Ihre klinischen Workflows zu transformieren?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Lassen Sie uns besprechen, wie OPASCA eine maßgeschneiderte Lösung für Ihre individuellen Herausforderungen entwickeln kann. Vereinbaren Sie noch heute eine kostenlose, unverbindliche Demo mit einem unserer Spezialisten.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-opasca-accent hover:bg-opasca-accent/90 text-white font-bold px-8 py-4 text-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Kostenlose Demo anfordern
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-4 text-lg h-auto backdrop-blur-sm"
              onClick={scrollToTop}
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-opasca-accent mb-2">15+</div>
              <div className="text-white/80">Top-Kliniken vertrauen OPASCA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-opasca-accent mb-2">10+</div>
              <div className="text-white/80">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-opasca-accent mb-2">Made in</div>
              <div className="text-white/80">Germany</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-opasca-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-opasca-accent/30 rounded-full blur-lg"></div>
    </section>
  )
}