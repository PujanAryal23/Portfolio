
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 animate-fade-in">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full bg-secondary/50 border border-white/10 px-3 py-1 text-sm animate-fade-in">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Senior QA Automation Engineer
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient animate-fade-in animate-delay-100">
                PUJAN ARYAL
              </h1>
              
              <p className="text-lg text-gray-300 animate-fade-in animate-delay-200">
                Highly skilled and results-driven QA Automation Engineer with 5 years of extensive experience 
                in designing, developing, and implementing automated testing solutions.
              </p>
              
              <div className="flex flex-wrap gap-3 animate-fade-in animate-delay-300">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary hover:bg-primary/90 transition-colors text-white"
                >
                  Contact Me
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-secondary hover:bg-secondary/90 border border-white/10 transition-colors"
                >
                  View Experience
                </a>
              </div>

              <div className="flex gap-5 pt-5 animate-fade-in animate-delay-400">
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>
                <div className="h-10 border-l border-gray-700"></div>
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="h-10 border-l border-gray-700"></div>
                <div className="flex flex-col items-center">
                  <p className="text-3xl font-bold text-primary">7+</p>
                  <p className="text-sm text-gray-400">Certifications</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 flex justify-center md:justify-end animate-fade-in animate-delay-200">
            <div className="relative max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white/10 glass-card animate-float">
                <img
                  src="/lovable-uploads/1ae62014-5da8-4ec8-87a2-670595b33960.png"
                  alt="Pujan Aryal"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/60 hover:text-white/90 transition-colors"
      >
        <span className="text-sm mb-1">Scroll Down</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
