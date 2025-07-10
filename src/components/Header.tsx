import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://opasca.com/wp-content/uploads/2023/07/OPASCA-Digital_We_care_for_digital_healthcare_fuer_dunklen_Hintergrund.png" 
              alt="OPASCA Logo" 
              className="h-8 sm:h-10 md:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
                <span>Lösungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="p-4 space-y-2">
                  <a href="#" className="block px-4 py-2 text-sm text-opasca-text-dark hover:bg-opasca-light-gray rounded-md transition-colors">
                    Strahlentherapie
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-opasca-text-dark hover:bg-opasca-light-gray rounded-md transition-colors">
                    Patientenmanagement
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-opasca-text-dark hover:bg-opasca-light-gray rounded-md transition-colors">
                    Alle Lösungen
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#" className="text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
              Unternehmen
            </a>
            <a href="#" className="text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
              Karriere
            </a>
          </nav>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium"
              >
                <span>DE</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-16 bg-white rounded-lg shadow-lg border">
                  <div className="p-2">
                    <button className="block w-full text-left px-2 py-1 text-sm text-opasca-text-dark hover:bg-opasca-light-gray rounded transition-colors">
                      DE
                    </button>
                    <button className="block w-full text-left px-2 py-1 text-sm text-opasca-text-dark hover:bg-opasca-light-gray rounded transition-colors">
                      EN
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-opasca-accent hover:bg-opasca-accent/90 text-white font-medium px-6 py-2 hidden sm:inline-flex"
              onClick={() => scrollToSection('cta-section')}
            >
              Demo anfordern
            </Button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-opasca-text-dark hover:text-opasca-accent transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-4">
              <div className="space-y-2">
                <div className="text-opasca-text-dark font-medium">Lösungen</div>
                <div className="pl-4 space-y-1">
                  <a href="#" className="block text-sm text-opasca-text-dark hover:text-opasca-accent transition-colors">
                    Strahlentherapie
                  </a>
                  <a href="#" className="block text-sm text-opasca-text-dark hover:text-opasca-accent transition-colors">
                    Patientenmanagement
                  </a>
                  <a href="#" className="block text-sm text-opasca-text-dark hover:text-opasca-accent transition-colors">
                    Alle Lösungen
                  </a>
                </div>
              </div>
              <a href="#" className="block text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
                Unternehmen
              </a>
              <a href="#" className="block text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
                Blog
              </a>
              <a href="#" className="block text-opasca-text-dark hover:text-opasca-accent transition-colors font-medium">
                Karriere
              </a>
              <Button 
                className="bg-opasca-accent hover:bg-opasca-accent/90 text-white font-medium px-6 py-2 w-full sm:hidden"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  scrollToSection('cta-section')
                }}
              >
                Demo anfordern
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}