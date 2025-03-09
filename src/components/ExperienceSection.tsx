
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
      'Contributed to LogPoint SIEM product which is a leading security information and event management (SIEM) solution that enables organizations to efficiently detect, investigate, and respond to cyber threats by aggregating and analyzing log data from various sources with its powerful analytics and real-time monitoring capabilities.',
      'Developed and maintained robust and scalable test automation frameworks using Cypress, Selenium, Python and Robot Framework.',
      'Designed and executed test cases for new features, identifying and documenting defects to improve the overall software quality.',
      'Created efficient test scripts and scenarios for JMeter performance testing, simulating realistic user scenarios and measuring system behavior under different loads. Also, conducted API testing using JMeter, ensuring the functionality and performance of RESTful APIs.',
      'Managed the configuration and maintenance of the CI/CD pipeline using Jenkins, automating build and test processes and facilitating seamless deployment.',
      'Leveraged Python and Bash scripting to automate backend tests, streamlining tasks such as database testing, API testing, and system-level testing.',
      'Mentored junior team members, providing guidance on test automation best practices, conducting code reviews, and troubleshooting.',
      'Actively participated in Scrum/Agile meetings, including daily stand-ups, sprint planning, and retrospective sessions'
    ]
  },
  {
    id: 'teksewa',
    title: 'Senior Software Engineer (QA Automation)',
    company: 'Teksewa',
    period: '05/2021 - 04/2022, Kathmandu',
    responsibilities: [
      'Contributed to Integrated Project Development(IPD) product which is a fully integrated web solution that provides all functional aspects of road and bridge construction starting with estimate creation and electronic bidding, through construction management and then processing final contractor payment and project closeout.',
      'Developed and maintained a robust test automation framework using Selenium and C# from scratch, improving overall product quality and streamlining the testing process.',
      'Mentored and provided technical guidance to junior members of the automation team, fostering knowledge sharing and promoting professional growth.',
      'Coordinated and supervised the creation, review, and maintenance of test cases, test scripts, and test data to ensure comprehensive test coverage based on project requirements and specifications.',
      'Collaborated closely with developers, product managers, and stakeholders to identify issues, track defects, and ensure timely resolution.',
      'Conducted performance and load testing, identifying and addressing system bottlenecks to enhance product performance.',
      'Identified and resolved numerous bugs and issues throughout the development process, utilizing strong problem-solving skills to address root causes and implement effective solutions.',
      'Actively participated in Agile/Scrum development processes, contributing to sprint planning, daily stand-ups, and sprint reviews.'
    ]
  },
  {
    id: 'cotiviti',
    title: 'Software Engineer (QA Automation)',
    company: 'Cotiviti',
    period: '08/2018 - 04/2021, Kathmandu',
    responsibilities: [
      'Contributed to Nucleus, a payment accuracy product that leverages advanced analysis of healthcare insurance claims and provider billing patterns to ensure precise claims reimbursement.',
      'Expanded and strengthened the automation framework and test scripts using Selenium and C#, including developing new functionalities and enhancing existing features. Also maintained the automation framework by monitoring its performance, addressing issues, and ensuring smooth operation.',
      'Actively tracked bugs and defects, documenting them and providing comprehensive reports to the development team and collaborated closely with developers to facilitate the timely resolution of issues, contributing to overall software quality.',
      'Utilized JMeter to conduct performance and load tests, simulating real-world scenarios and analyzing system behavior under heavy user loads. Identified performance bottlenecks and made optimization recommendations based on test results.',
      'Created detailed and comprehensive test plans and cases, documenting test scenarios, steps, expected outcomes, and specific test data or configurations required.'
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
            Over 5 years of professional experience in QA automation and software engineering
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
