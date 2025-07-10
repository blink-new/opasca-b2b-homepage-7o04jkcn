export default function VideoSection() {
  return (
    <section id="video-section" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-opasca-text-dark mb-6">
            Die Zukunft der digitalen Gesundheitsversorgung in Aktion erleben
          </h2>
          <p className="text-lg sm:text-xl text-opasca-text-dark/80 max-w-3xl mx-auto">
            Entdecken Sie, wie OPASCA die Patientenreise revolutioniert und klinische Workflows optimiert.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
          <div className="aspect-video">
            <iframe 
              src="https://www.youtube.com/embed/EpR7PupRIP0?mute=0&showinfo=0&controls=1&start=0&rel=0&modestbranding=1"
              title="OPASCA Digital Healthcare Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-opasca-text-dark/70 max-w-4xl mx-auto leading-relaxed">
            Erleben Sie die Vision von OPASCA für eine patientenzentrierte, effiziente und sichere Gesundheitsversorgung. Unsere Lösungen transformieren komplexe medizinische Prozesse in intuitive, benutzerfreundliche Workflows.
          </p>
        </div>
      </div>
    </section>
  )
}