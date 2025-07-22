import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap, Check } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Resume() {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const response = await apiRequest("GET", "/api/resume/download");
      toast({
        title: "Resume Downloaded",
        description: "Resume has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download resume at this time.",
        variant: "destructive",
      });
    }
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      achievements: [
        "Led development of 3 major web applications serving 10K+ users",
        "Implemented microservices architecture reducing load times by 40%",
        "Mentored 3 junior developers and established code review processes"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment processing systems",
        "Collaborated with designers to implement pixel-perfect UIs"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      year: "2016 - 2020",
      description: "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development."
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      year: "2022",
      description: "Professional level certification demonstrating expertise in designing and deploying scalable systems on AWS."
    },
    {
      degree: "Google Cloud Professional Developer",
      institution: "Google Cloud Platform",
      year: "2023",
      description: "Certified in designing, building, and deploying applications on Google Cloud Platform."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Resume</h2>
          <p className="text-xl text-gray-600 mb-8">My professional journey and experience</p>
          <Button
            onClick={handleDownloadResume}
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 pb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-secondary mb-1">{job.title}</h4>
                      <div className="text-primary font-medium mb-2">{job.company}</div>
                      <div className="text-gray-600 text-sm mb-4">{job.period}</div>
                      <ul className="text-gray-700 space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education & Certifications
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 pb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-secondary mb-1">{edu.degree}</h4>
                      <div className="text-primary font-medium mb-2">{edu.institution}</div>
                      <div className="text-gray-600 text-sm mb-4">{edu.year}</div>
                      <p className="text-gray-700">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
