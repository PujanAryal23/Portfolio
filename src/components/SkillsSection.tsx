
import { useState } from 'react';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'tools', name: 'Tools & Technologies' },
  ];
  
  const skills = [
    { name: 'Python', category: 'languages', level: 90 },
    { name: 'C#', category: 'languages', level: 85 },
    { name: 'JavaScript', category: 'languages', level: 80 },
    { name: 'Java', category: 'languages', level: 75 },
    { name: 'PL/SQL', category: 'languages', level: 70 },
    { name: 'Bash', category: 'languages', level: 70 },
    { name: 'Cypress', category: 'frameworks', level: 90 },
    { name: 'Selenium', category: 'frameworks', level: 95 },
    { name: 'Robot Framework', category: 'frameworks', level: 85 },
    { name: 'JMeter', category: 'tools', level: 90 },
    { name: 'Jenkins', category: 'tools', level: 85 },
    { name: 'REST API', category: 'tools', level: 90 },
    { name: 'MSSQL', category: 'tools', level: 75 },
    { name: 'Postman', category: 'tools', level: 85 },
    { name: '.Net', category: 'frameworks', level: 70 },
    { name: 'Appium', category: 'frameworks', level: 80 },
    { name: 'Docker', category: 'tools', level: 75 },
    { name: 'Node.js', category: 'tools', level: 70 },
    { name: 'Bamboo', category: 'tools', level: 75 },
    { name: 'JIRA', category: 'tools', level: 85 },
    { name: 'Linux', category: 'tools', level: 80 },
    { name: 'Agile/Scrum', category: 'tools', level: 90 },
  ];
  
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-gray-300">
            A comprehensive showcase of my professional expertise and technical capabilities
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-secondary/50 hover:bg-secondary text-gray-300 border border-white/10"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="glass-card p-5 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-sm text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills chips */}
        <div className="mt-12 glass-card p-6 rounded-xl">
          <h3 className="text-xl font-medium mb-6 text-center">Additional Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'CI/CD Pipelines', 'Test Case Design', 'Performance Testing', 'API Testing', 
              'Unit Testing', 'Integration Testing', 'ETL Testing', 'Database Testing',
              'Test Automation', 'Bug Tracking', 'Test Management', 'Agile Methodologies',
              'Code Reviews', 'Technical Documentation', 'Problem Solving', 'Team Leadership'
            ].map((skill, index) => (
              <div 
                key={skill} 
                className="skill-chip animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
