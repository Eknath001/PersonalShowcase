import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Hi, I'm <span className="text-primary">Eknath Changade</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-8">
              Java Developer & Web Developer
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              As a graduate in Information Technology Engineering with honors in 
              Artificial Intelligence and Machine Learning, I am currently expanding 
              my expertise in Information Technology, furthering my knowledge and 
              skills to excel in this dynamic industry.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <a href="mailto:ekanathchangade@gmail.com" className="text-primary hover:text-blue-700 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/eknath-changade-full-stack-java-developer" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Eknath001" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://wa.me/918329274587" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-700 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollTo("#portfolio")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("#contact")}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl animate-float">
                <img 
                  src="assets\img\ekka.jpeg" 
                  alt="Eknath Changade - Full Stack Developer" 
                  className="w-full h-full object-cover" 
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
