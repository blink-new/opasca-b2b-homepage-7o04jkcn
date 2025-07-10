export default function TrustedBySection() {
  const logos = [
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_UKB.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_CGC.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_UKD.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Erlangen.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Freiburg.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Gttingen.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Hamburg.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Heidelberg.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Kln.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Mainz.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_LMU.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_MRIIsar.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Stuttgart.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Tbingen.png',
    'https://opasca.com/wp-content/uploads/2024/04/TOP10_Ulm.png',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-opasca-text-dark mb-4">
            15 der TOP 25 Kliniken in Deutschland vertrauen bereits OPASCA
          </h3>
          <p className="text-lg text-opasca-text-dark/80 max-w-4xl mx-auto">
            Diese neusten Top-Klinik-Empfehlungen sind in der renommierten FOCUS-Klinik-Empfehlungsliste enthalten und geben Patienten eine nützliche Orientierungshilfe.
          </p>
        </div>

        {/* Infinite scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={logo} 
                  alt={`Hospital ${index + 1}`}
                  className="h-16 sm:h-20 md:h-24 object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={logo} 
                  alt={`Hospital ${index + 1}`}
                  className="h-16 sm:h-20 md:h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional text */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-opasca-text-dark/70 max-w-5xl mx-auto leading-relaxed">
            Das Rechercheinstitut FactField hat für die FOCUS-Klinikliste eine umfangreiche Auswertung durchgeführt, bei der mehrere Faktoren wie die medizinische Qualität, Reputation, Pflege- und Hygienestandards sowie Vorjahresempfehlungen der Kliniken berücksichtigt wurden. Es ist daher bemerkenswert, dass eine hohe Anzahl der Top-Kliniken Deutschlands auf die modernen Technologien und Lösungen von OPASCA setzen.
          </p>
        </div>
      </div>
    </section>
  )
}