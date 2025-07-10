import { Play, Sparkles, Eye, Award } from 'lucide-react'
import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video-section" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-opasca-accent/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 cyber-grid opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full mb-6 border border-white/20">
            <Eye className="w-4 h-4 text-opasca-accent" />
            <span className="text-sm font-medium text-white/90 uppercase tracking-wide">
              Erleben Sie die Vision
            </span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sehen Sie die Zukunft der{' '}
            <span className="gradient-text bg-gradient-primary bg-clip-text text-transparent">
              digitalen Gesundheitsversorgung
            </span>
            <br />
            <span className="text-white/80">in Aktion</span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie, wie OPASCA die Patientenreise revolutioniert und medizinisches Personal 
            durch innovative Technologie stärkt.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative group">
            
            {/* Video Frame */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Video Content */}
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
                {!isPlaying ? (
                  // Video Thumbnail
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group/play relative z-10 flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="w-8 h-8 text-white ml-1 group-hover/play:scale-110 transition-transform duration-200" />
                      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover/play:opacity-20 transition-opacity duration-300"></div>
                    </button>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-8 left-8 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-white/90">Live Demo</span>
                    </div>
                    
                    <div className="absolute bottom-8 right-8 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <Award className="w-4 h-4 text-opasca-accent" />
                      <span className="text-sm font-medium text-white/90">Ausgezeichnet</span>
                    </div>
                  </div>
                ) : (
                  // Embedded Video
                  <iframe
                    src="https://www.youtube.com/embed/EpR7PupRIP0?autoplay=1&mute=0&showinfo=0&controls=1&start=0"
                    title="OPASCA Vision Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-opasca-accent/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
          <div className="text-center group">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
              <Sparkles className="w-6 h-6 text-opasca-accent" />
            </div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-white/60">Modular</div>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
              <Eye className="w-6 h-6 text-opasca-accent" />
            </div>
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-white/60">Verfügbar</div>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
              <Award className="w-6 h-6 text-opasca-accent" />
            </div>
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-sm text-white/60">Top Kliniken</div>
          </div>
          
          <div className="text-center group">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl mx-auto mb-3 group-hover:bg-white/20 transition-colors duration-300">
              <Play className="w-6 h-6 text-opasca-accent" />
            </div>
            <div className="text-2xl font-bold text-white">Live</div>
            <div className="text-sm text-white/60">Demonstration</div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-opasca-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/90">
                Erleben Sie die Zukunft der Gesundheitsversorgung
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}