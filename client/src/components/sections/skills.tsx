import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Briefcase, GraduationCap } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "Python/Django", level: 80 },
    { name: "AWS/Cloud Services", level: 75 }
  ];

  const professionalSkills = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      name: "Problem Solving",
      description: "Analytical thinking and creative solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Team Collaboration",
      description: "Effective communication and teamwork"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "Project Management",
      description: "Agile methodologies and delivery"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: "Continuous Learning",
      description: "Staying current with tech trends"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8">Professional Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="text-primary mb-3">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-secondary mb-2">{skill.name}</h4>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
