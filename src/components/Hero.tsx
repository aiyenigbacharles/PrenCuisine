"use client"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToMenu = () => {
    const element = document.getElementById("menu")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-14 sm:pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/samosa.jpeg')`,
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in drop-shadow-2xl leading-tight">
            Welcome to{" "}
            <span className="text-red-400 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Pren Cuisine
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed animate-fade-in drop-shadow-lg px-4">
            <b>
              Exquisite catering services that bring flavor, elegance, and joy to your special moments. From intimate
              gatherings to grand celebrations, we craft culinary experiences that linger in memory.
            </b>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4">
            <Button
              onClick={scrollToMenu}
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Explore Our Menu
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-sm bg-transparent w-full sm:w-auto"
            >
              Book Your Event
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
