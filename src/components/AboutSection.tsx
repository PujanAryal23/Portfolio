
import { Award, Clock, Code, MapPin, Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl h-full animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="mr-2 text-primary" size={20} />
                Professional Summary
              </h3>
              <p className="text-gray-300">
                Highly skilled and results-driven QA Automation Engineer with 5 years of extensive experience 
                in designing, developing, and implementing automated testing solutions. Demonstrated expertise in 
                ensuring the delivery of high-quality software products by identifying and rectifying defects early 
                in the development cycle.
              </p>
              <p className="text-gray-300">
                Possess a strong understanding of testing methodologies, agile practices, and continuous integration, 
                coupled with a passion for innovation and continuous learning. 
              </p>
              <p className="text-gray-300">
                Seeking a challenging role to contribute my technical proficiency and problem-solving abilities 
                in a dynamic and collaborative environment.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl h-full animate-fade-in animate-delay-100">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="mr-2 text-primary" size={20} />
                Expertise
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Test Automation Framework Development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Performance and Load Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>API Testing and Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>CI/CD Pipeline Configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Backend Test Automation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Agile/Scrum Methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>Leadership and Mentoring</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl h-full animate-fade-in animate-delay-200">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-2 text-primary" size={20} />
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone size={18} className="text-primary mr-3" />
                  <span>+977 9841223344</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-primary mr-3" />
                  <a href="mailto:aryalpujan@gmail.com" className="hover:text-primary transition-colors">
                    aryalpujan@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="text-primary mr-3" />
                  <span>Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center">
                  <Clock size={18} className="text-primary mr-3" />
                  <span>5+ Years of Experience</span>
                </li>
              </ul>
              <div className="pt-4">
                <h4 className="text-sm uppercase text-gray-400 mb-2">Languages</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span>Advanced</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-primary w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Nepali</span>
                      <span>Native</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full">
                      <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-primary w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
