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
      title: "Eknath Changade - Summary",
      company: "Fresh Graduate",
      period: "2023 - Present",
      achievements: [
        "After completing my degree, I enhanced my skills by pursuing a 6-month Java Full Stack Course.",
        "I recently completed this course, where I gained valuable practical experience and contributed to real-world projects.",
        "I am now graduating and eager to apply my knowledge to new opportunities."
      ]
    }
  ];

  const education = [
    {
      degree: "BE Information Technology",
      institution: "Anuradha Engineering College, Chikhali",
      year: "2019 - 2023",
      description: "Sant Gadge Baba Amravati University, Amravati. CGPA - 6.50"
    },
    {
      degree: "Java Full Stack Developer",
      institution: "Seed Infotech Pvt Ltd, Pune",
      year: "June 2023 - Nov 2024",
      description: "Hands On experience on following Technologies: JAVA | MySQL | C | CPP | Python | HTML | CSS | JavaScript | Angular | ReactJs | MongoDB | NodeJs | MicroServices | API | Servlet | SpringBoot | ExpressJS"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Resume</h2>
          <p className="text-xl text-gray-600 mb-8">As a graduate in Information Technology Engineering, with honors in Artificial Intelligence and Machine Learning, I am currently expanding my expertise in the field of Information Technology, furthering my knowledge and skills to thrive in this dynamic industry.</p>
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
