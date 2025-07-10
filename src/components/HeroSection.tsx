import { Button } from './ui/button'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://opasca.com/wp-content/uploads/2023/04/ETHOS_Varian_digital_animation.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Digitalisierung der Patientenreise.
          <br />
          <span className="text-opasca-accent">Stärkung medizinischer Fachkräfte.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">
          OPASCA liefert intelligente Workflow-Lösungen, die die Patientensicherheit erhöhen, die Effizienz steigern und Ihrem klinischen Personal wertvolle Zeit zurückgeben. Made in Germany.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-opasca-accent hover:bg-opasca-accent/90 text-white font-semibold px-8 py-4 text-lg h-auto"
            onClick={() => scrollToSection('solutions-section')}
          >
            Unsere Lösungen erkunden
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-4 text-lg h-auto backdrop-blur-sm"
            onClick={() => scrollToSection('video-section')}
          >
            Übersicht ansehen
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}