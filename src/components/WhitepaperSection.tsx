import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Download, CheckCircle } from 'lucide-react'

export default function WhitepaperSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="py-20 bg-opasca-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Image */}
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://opasca.com/wp-content/uploads/2024/02/OPASCA_Whitepaper_Fachkraeftemangel.jpg"
                alt="OPASCA Whitepaper: Effizienzsteigerung und Personalentlastung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-opasca-primary/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-opasca-primary/10"></div>
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Download className="w-8 h-8 text-opasca-accent mr-3" />
                  <span className="text-sm font-semibold text-opasca-accent uppercase tracking-wide">
                    Kostenloser Download
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-opasca-text-dark mb-4">
                  OPASCA Whitepaper: Effizienzsteigerung und Personalentlastung in Kliniken
                </h3>
                
                <p className="text-lg text-opasca-text-dark/80 mb-6 leading-relaxed">
                  Entdecken Sie, wie digitale Lösungen die Effizienz steigern und die Belastung Ihres klinischen Personals reduzieren können. Holen Sie sich jetzt Ihr kostenloses Exemplar.
                </p>

                <div className="bg-opasca-light-gray/50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-opasca-text-dark mb-2">Das erwartet Sie:</h4>
                  <ul className="text-sm text-opasca-text-dark/70 space-y-1">
                    <li>• Strategien zur Personalentlastung</li>
                    <li>• Digitalisierung von Workflows</li>
                    <li>• Praxisbeispiele aus Top-Kliniken</li>
                    <li>• ROI-Berechnungen für Digitalisierungsprojekte</li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 border-gray-300 focus:border-opasca-accent focus:ring-opasca-accent"
                    disabled={isSubmitted}
                  />
                </div>
                
                <Button
                  type="submit"
                  className={`w-full h-12 font-semibold transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-opasca-accent hover:bg-opasca-accent/90 text-white'
                  }`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Whitepaper wird gesendet!
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Whitepaper herunterladen
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-opasca-text-dark/60 mt-4">
                Durch das Absenden stimmen Sie unserer Datenschutzerklärung zu. Sie können sich jederzeit abmelden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}