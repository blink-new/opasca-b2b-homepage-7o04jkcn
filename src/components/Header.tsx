import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ChevronDown, Menu, X, Zap, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-2xl shadow-2xl shadow-black/5 border-b border-black/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-25 animate-pulse-slow"></div>
              <img 
                src="https://opasca.com/wp-content/uploads/2023/07/OPASCA-Digital_We_care_for_digital_healthcare_fuer_dunklen_Hintergrund.png" 
                alt="OPASCA" 
                className="relative h-8 lg:h-10 w-auto"
              />
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Zap className="w-4 h-4 text-opasca-accent" />
              <span className="text-xs font-medium text-opasca-text-muted uppercase tracking-wider">
                Digital Healthcare
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent transition-all duration-200 hover:bg-opasca-accent/5 rounded-xl">
                <span>Lösungen</span>
                <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-black/10 border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 overflow-hidden">
                <div className="p-6 space-y-3">
                  <a href="#" className="flex items-center justify-between group/item px-4 py-3 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200">
                    <span>Strahlentherapie</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-1 group-hover/item:translate-x-0 transition-all duration-200" />
                  </a>
                  <a href="#" className="flex items-center justify-between group/item px-4 py-3 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200">
                    <span>Patientenmanagement</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-1 group-hover/item:translate-x-0 transition-all duration-200" />
                  </a>
                  <a href="#" className="flex items-center justify-between group/item px-4 py-3 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200">
                    <span>Alle Lösungen</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-1 group-hover/item:translate-x-0 transition-all duration-200" />
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#" className="px-4 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200">
              Unternehmen
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200">
              Blog
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200">
              Karriere
            </a>
          </nav>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center space-x-4">
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200"
              >
                <span>🇩🇪 DE</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white/95 backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/10 border border-black/5 overflow-hidden">
                  <div className="p-2">
                    <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                      🇩🇪 DE
                    </button>
                    <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                      🇺🇸 EN
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              className="relative group bg-gradient-primary text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hidden sm:inline-flex overflow-hidden"
              onClick={() => scrollToSection('cta-section')}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Demo anfordern</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-opasca-accent/0 via-white/10 to-opasca-accent/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-xl transition-all duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-2xl rounded-2xl mt-2 shadow-2xl shadow-black/10 border border-black/5">
              <div className="px-3 py-2">
                <div className="text-opasca-text-dark font-semibold mb-3">Lösungen</div>
                <div className="pl-4 space-y-2">
                  <a href="#" className="block px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                    Strahlentherapie
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                    Patientenmanagement
                  </a>
                  <a href="#" className="block px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                    Alle Lösungen
                  </a>
                </div>
              </div>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                Unternehmen
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-opasca-text-dark hover:text-opasca-accent hover:bg-opasca-accent/5 rounded-lg transition-all duration-200">
                Karriere
              </a>
              <div className="pt-4 px-3">
                <Button 
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-2xl shadow-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection('cta-section')
                  }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Demo anfordern</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}