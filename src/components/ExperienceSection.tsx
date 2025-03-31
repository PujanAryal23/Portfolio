
import { Briefcase, Calendar } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    id: 'logpoint',
    title: 'Senior QA Engineer (Automation)',
    company: 'Logpoint',
    period: '04/2022 - Present, Kathmandu',
    responsibilities: [
      'Enhanced test coverage by 70% including UI (Web/Desktop), API, Backend and Database tests by developing and maintaining scalable test automation frameworks using Cypress, Selenium, Python, Robot Framework, Bash and AutoIT leading to faster and more reliable test execution.',
      'Decreased test execution time by 50% by implementing parallel test execution and API driven test setups accelerating feedback loops.',
      'Designed and developed 300+ test cases for new features, identifying and documenting 100+ defects, improving software stability.',
      'Implemented and managed Jenkins pipeline for CI and nightly test execution enabling early defect detection and maintaining software stability.',
      'Automated machine provisioning, patching, and ISO setup using Terraform, Govc, PowerShell, and Bash, eliminating manual intervention.',
      'Mentored and trained 5+ QA engineers, improving team productivity and ensuring adherence to best practices in test automation.',
    ]
  },
  {
    id: 'teksewa',
    title: 'Senior Software Engineer (QA Automation)',
    company: 'Teksewa',
    period: '05/2021 - 04/2022, Kathmandu',
    responsibilities: [
      'Developed and maintained web and mobile test automation framework from scratch using Selenium, Appium and C#, enhancing test coverage by 40% and driving overall product quality improvements.',
      'Led a team of 3 QA Engineers, mentoring them on manual and automation best practices, resulting in improved and streamlined testing processes.',
      'Conducted performance and load testing with JMeter, identifying system bottlenecks and optimizing product performance by 20%.',
      'Implemented and managed Jenkins pipeline for CI and nightly test execution enabling early defect detection and maintaining software stability.',
      'Identified and resolved 50+ critical bugs by analyzing test automation reports and conducting root cause analysis,driving improvements in test efficiency and product stability.',
      'Actively participated in Agile/Scrum development processes, contributing to sprint planning, daily stand-ups, and sprint reviews.'
    ]
  },
  {
    id: 'cotiviti',
    title: 'Software Engineer (QA Automation)',
    company: 'Cotiviti',
    period: '11/2018 - 04/2021, Kathmandu',
    responsibilities: [
      'Developed 200+ automation tests using Selenium and C# leading to a 30% improvement in test coverage.',
      'Reduced test execution time by 40% through parallel execution, framework optimization, and elimination of test dependencies, speeding up feedback loops.',
      'Optimized the automation framework and test suites, improving test reliability and reducing flakiness and false positives/negatives by 20%.',
      'Used JMeter for performance and load testing, identifying bottlenecks that improved system performance and scalibility.',
      'Created an in-house automation dashboard using Ember and Node, improving visibility into performance and functional test execution status.',
      'Implemented and managed Bamboo plans for nightly test execution enabling early defect detection and maintaining software stability.'
    ]
  }
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Work Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>
          <p className="text-gray-300">
            Over 6+ years of professional experience in QA automation and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tabs */}
          <div className="lg:col-span-1 glass-card rounded-xl p-1">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-none gap-1">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={cn(
                    "flex-1 text-left px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap lg:whitespace-normal",
                    activeTab === exp.id 
                      ? "bg-secondary border border-white/10" 
                      : "hover:bg-secondary/50"
                  )}
                >
                  <h3 className="font-medium text-sm lg:text-base">{exp.company}</h3>
                  <p className="text-xs text-gray-400">{exp.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={cn(
                  "glass-card rounded-xl p-6 space-y-6 transition-all duration-300",
                  activeTab === exp.id 
                    ? "opacity-100 animate-fade-in" 
                    : "hidden opacity-0"
                )}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-bold text-gradient-primary">{exp.title}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-secondary/70 border border-white/5">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Briefcase size={16} className="mr-2 text-primary" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-wider text-gray-400">Responsibilities:</h4>
                  <ul className="space-y-3 text-gray-300">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
