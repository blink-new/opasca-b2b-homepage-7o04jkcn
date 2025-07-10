import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustedBySection from './components/TrustedBySection'
import ChallengeSolutionSection from './components/ChallengeSolutionSection'
import VideoSection from './components/VideoSection'
import CoreSolutionsSection from './components/CoreSolutionsSection'
import WhitepaperSection from './components/WhitepaperSection'
import BlogSection from './components/BlogSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ChallengeSolutionSection />
      <VideoSection />
      <CoreSolutionsSection />
      <WhitepaperSection />
      <BlogSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}

export default App