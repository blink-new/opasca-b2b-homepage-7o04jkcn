import { Button } from './ui/button'
import { ArrowRight, Play, Sparkles, Shield, Zap, Users, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://opasca.com/wp-content/uploads/2023/04/ETHOS_Varian_digital_animation.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-opasca-primary/90 via-opasca-secondary/80 to-opasca-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-opasca-primary via-transparent to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-opasca-accent rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Mouse Tracking Gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-opasca-accent/20 to-transparent rounded-full pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white/90 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-opasca-accent" />
            <span>Made in Germany</span>
            <div className="w-2 h-2 bg-opasca-accent rounded-full animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <span className="block">
                <span className="relative">
                  Digitalisierung
                  <div className="absolute -inset-1 bg-gradient-primary blur-lg opacity-30 animate-pulse-slow"></div>
                </span>
              </span>
              <span className="block">
                der{' '}
                <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent animate-gradient-x">
                  Patientenreise
                </span>
              </span>
            </h1>
            
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90">
              Stärkung medizinischer{' '}
              <span className="relative">
                Fachkräfte
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary rounded-full"></div>
              </span>
            </h2>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            OPASCA liefert intelligente Workflow-Lösungen, die die Patientensicherheit erhöhen, 
            die Effizienz steigern und Ihrem klinischen Personal wertvolle Zeit zurückgeben.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-opasca-accent/20 rounded-2xl mx-auto mb-3">
                <Shield className="w-6 h-6 text-opasca-accent" />
              </div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-white/60">Top Kliniken</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-opasca-accent/20 rounded-2xl mx-auto mb-3">
                <Zap className="w-6 h-6 text-opasca-accent" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Features</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-opasca-accent/20 rounded-2xl mx-auto mb-3">
                <Users className="w-6 h-6 text-opasca-accent" />
              </div>
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-white/60">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-opasca-accent/20 rounded-2xl mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-opasca-accent" />
              </div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/60">Modular</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="group relative bg-gradient-primary text-white font-semibold px-8 py-4 text-lg rounded-2xl shadow-2xl shadow-opasca-accent/25 hover:shadow-opasca-accent/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              onClick={() => scrollToSection('solutions-section')}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Lösungen erkunden</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-opasca-accent/0 via-white/10 to-opasca-accent/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 hover:border-white/30 font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('video-section')}
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Übersicht ansehen</span>
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12">
            <p className="text-white/60 text-sm mb-6">Vertrauen von führenden Kliniken in Deutschland</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/40 text-sm font-medium">Universitätsklinik Bonn</div>
              <div className="text-white/40 text-sm font-medium">Charité Berlin</div>
              <div className="text-white/40 text-sm font-medium">Uniklinik Köln</div>
              <div className="text-white/40 text-sm font-medium">MRI München</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-white/30" />
        </div>
      </div>
    </section>
  )
}