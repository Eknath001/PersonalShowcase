import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include product management, cart functionality, and secure payments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Vue.js", "Firebase", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for social media metrics with interactive charts, real-time data visualization, and export features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "D3.js", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social sharing capabilities.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React Native", "MongoDB", "GraphQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "DevOps Monitoring Tool",
      description: "A comprehensive DevOps monitoring solution for tracking server performance, deployment status, and system health across multiple environments.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Docker", "Kubernetes", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Recommendation Engine",
      description: "A machine learning-powered recommendation system using collaborative filtering and neural networks to provide personalized content suggestions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors = {
      "React": "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      "MongoDB": "bg-purple-100 text-purple-800",
      "Vue.js": "bg-blue-100 text-blue-800",
      "Firebase": "bg-red-100 text-red-800",
      "WebSocket": "bg-yellow-100 text-yellow-800",
      "D3.js": "bg-orange-100 text-orange-800",
      "Express": "bg-gray-100 text-gray-800",
      "React Native": "bg-cyan-100 text-cyan-800",
      "GraphQL": "bg-purple-100 text-purple-800",
      "Docker": "bg-red-100 text-red-800",
      "Kubernetes": "bg-blue-100 text-blue-800",
      "AWS": "bg-yellow-100 text-yellow-800",
      "Python": "bg-yellow-100 text-yellow-800",
      "TensorFlow": "bg-green-100 text-green-800",
      "FastAPI": "bg-blue-100 text-blue-800"
    };
    return colors[tech as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600">In my portfolio, I showcase a diverse array of projects encompassing both software and hardware domains. Alongside my accomplishments, including securing prestigious awards, these projects exemplify my versatility and proficiency in delivering innovative solutions across various technological realms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="text-white hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="text-white hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech)}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center text-primary hover:text-blue-700 font-medium transition-colors duration-200">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
