import { Button } from './ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Entwicklungspartnerschaft auf Augenhöhe",
      image: "https://opasca.com/wp-content/uploads/2025/07/1750670122017-e1751616190833.jpg",
      link: "https://opasca.com/partnerschaft-fuer-moderne-sichere-und-menschenzentrierte-patientenversorgung-in-der-strahlentherapie/",
      date: "Juli 2025",
      excerpt: "Moderne, sichere und menschenzentrierte Patientenversorgung in der Strahlentherapie durch strategische Partnerschaften."
    },
    {
      title: "Rückblick: DEGRO 2025 - Impulse, die den Weg für morgen bereiten",
      image: "https://opasca.com/wp-content/uploads/2025/06/Image-1024x462.jpg",
      link: "https://opasca.com/rueckblick-auf-die-degro-2025/",
      date: "Juni 2025", 
      excerpt: "Einblicke und Erkenntnisse vom DEGRO 2025 Kongress über die Zukunft der Strahlentherapie."
    },
    {
      title: "Willkommen in der Zukunft der Patientenreise - mit OPASCA",
      image: "https://opasca.com/wp-content/uploads/2025/05/Kopie-von-Gemeinschaft-Website.png",
      link: "https://opasca.com/degro-2025/",
      date: "Mai 2025",
      excerpt: "Entdecken Sie, wie OPASCA die Patientenreise revolutioniert und die Gesundheitsversorgung transformiert."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-opasca-text-dark mb-6">
            Die neuesten Themen in unserem Blog
          </h2>
          <p className="text-lg sm:text-xl text-opasca-text-dark/80 max-w-3xl mx-auto">
            Bleiben Sie informiert über die neuesten Entwicklungen in der digitalen Gesundheitsversorgung und erhalten Sie Experteneinblicke von unserem Team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-opasca-accent/20 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-opasca-text-dark/60 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time>{post.date}</time>
                </div>

                <h3 className="font-heading text-xl font-bold text-opasca-text-dark mb-3 group-hover:text-opasca-accent transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-opasca-text-dark/70 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <Button 
                  variant="link" 
                  className="p-0 h-auto text-opasca-accent hover:text-opasca-accent/80 font-semibold group/btn"
                  onClick={() => window.open(post.link, '_blank')}
                >
                  Weiterlesen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-opasca-accent text-opasca-accent hover:bg-opasca-accent hover:text-white px-8 py-3 font-semibold"
          >
            Alle Blogbeiträge anzeigen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}