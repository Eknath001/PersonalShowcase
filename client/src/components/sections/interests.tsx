import { BookOpen, Film, MapPin, Briefcase } from "lucide-react";

export function Interests() {
  const interests = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learn New Things",
      description: "Constantly exploring new technologies and expanding my knowledge base."
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Watching Movies",
      description: "Enjoying cinema and storytelling in various genres."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Travelling",
      description: "Exploring new places and experiencing different cultures."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Free Lancing",
      description: "Working on independent projects and building client relationships."
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Interests & Hobbies</h2>
          <p className="text-xl text-gray-600">What I enjoy doing outside of work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:bg-primary transition-all duration-300 group-hover:text-white">
                <div className="text-primary group-hover:text-white transition-colors duration-300 flex justify-center mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
