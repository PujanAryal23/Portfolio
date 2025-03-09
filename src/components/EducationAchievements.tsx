
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const EducationAchievements = () => {
  const achievements = [
    {
      title: 'Applitools Cross Browser Testing Hackathon Winner',
      description: 'One of the Gold Winners in cross browser testing hackathon organized by Applitools. Was awarded with $500 as a prize.',
      icon: <Award size={20} className="text-yellow-400" />
    },
    {
      title: 'Cotiviti Hackafest Winner',
      description: 'Won cotiviti hackafest which is annual hackathon organized by Cotiviti for the implementation of selenoid for running automation tests and optimization of in house selenium framework to support parallel test run.',
      icon: <Award size={20} className="text-yellow-400" />
    },
    {
      title: 'Applitools Visual AI Rockstar Hackathon Winner',
      description: 'One of the Silver Winners in Visual AI Rockstar Hackathon organized by Applitools. Was awarded with $200 as a prize.',
      icon: <Award size={20} className="text-blue-400" />
    },
    {
      title: 'Qualithon Winner 2022',
      description: 'UI Automation hackathon winner out of 200 participants organized by Qualitest company.',
      icon: <Award size={20} className="text-purple-400" />
    }
  ];

  const certifications = [
    {
      title: 'JMeter Pro',
      issuer: 'Issued by Blazemeter University'
    },
    {
      title: 'Certified SAFe 4 Practitioner',
      issuer: 'Issued by Scaled Agile, Inc.'
    },
    {
      title: 'Continuous Integration With Jenkins',
      issuer: 'Issued by Applitools'
    },
    {
      title: 'Mobile Automation With Appium',
      issuer: 'Issued by Applitools'
    },
    {
      title: 'Cypress',
      issuer: 'Issued by Applitools'
    },
    {
      title: 'REST Assured',
      issuer: 'Issued by Applitools'
    },
    {
      title: 'Scaling Tests With Docker',
      issuer: 'Issued by Applitools'
    }
  ];

  return (
    <>
      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Education</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-secondary/70 text-primary">
                  <BookOpen size={28} />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <h3 className="text-xl font-bold text-gradient-primary">Bachelor in Computer Science and Engineering</h3>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-secondary/70 border border-white/5">
                        <Calendar size={14} className="mr-1" />
                        12/2012 - 12/2016
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-300 mt-1">
                      <MapPin size={16} className="mr-2 text-primary" />
                      <span className="font-medium">Nepal Engineering College, Bhaktapur</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">
                    Completed bachelor's of computer science and engineering from Nepal Engineering College
                  </p>
                  
                  <div className="pt-2">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering', 
                        'Web Development', 'Operating Systems', 'Computer Networks', 'Programming Languages'].map((course) => (
                        <span key={course} className="skill-chip">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements and Certifications */}
      <section id="achievements" className="py-20 relative bg-slate-900/30">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Achievements & Certifications</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
            <p className="text-gray-300">
              Recognition of my professional achievements and specialized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Achievements */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center lg:text-left">Achievements</h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title} 
                    className="glass-card p-5 rounded-xl flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-white/5">
                      {achievement.icon}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-2">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center lg:text-left">Certifications</h3>
              
              <div className="glass-card p-6 rounded-xl animate-fade-in animate-delay-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {certifications.map((cert, index) => (
                    <div key={cert.title} className="space-y-1 animate-fade-in" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                        <div>
                          <h4 className="font-medium">{cert.title}</h4>
                          <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Badge */}
              <div className="flex justify-center lg:justify-start animate-fade-in animate-delay-300">
                <div className="bg-gradient-to-r from-blue-900/20 to-primary/20 p-4 rounded-xl border border-primary/20 max-w-sm">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full p-2 bg-primary/10">
                      <Award size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Continuous Learner</h4>
                      <p className="text-gray-400 text-sm">Actively pursuing new certifications and skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationAchievements;
